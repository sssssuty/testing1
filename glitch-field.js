/* <glitch-field> — real-time ordered-dither organic field.
   WebGL fragment shader (default) with a 2D-canvas "lite" path for small tiles.
   Bayer 4x4 ordered dithering + warped fbm noise -> solid cores, checker/stripe/dot halos,
   glitch band displacement, speckle bursts, mouse bloom, scroll flow.
   Attributes: colors="hex,hex,hex" density scale speed warp glitch pixel fps seed interactive lite static */
(function () {
  if (customElements.get('glitch-field')) return;
  var RM = window.matchMedia ? matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  var VS = 'attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}';
  var FS = [
    'precision highp float;',
    'uniform vec2 uRes;uniform float uTime;uniform float uSeed;uniform vec2 uMouse;uniform float uMouseAmt;',
    'uniform float uDensity;uniform float uScale;uniform float uWarp;uniform float uGlitch;uniform float uScroll;',
    'uniform vec3 uC1;uniform vec3 uC2;uniform vec3 uC3;uniform vec3 uC4;',
    'float hash21(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}',
    'float vnoise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);',
    ' float a=hash21(i);float b=hash21(i+vec2(1.0,0.0));float c=hash21(i+vec2(0.0,1.0));float d=hash21(i+vec2(1.0,1.0));',
    ' return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);}',
    'float fbm(vec2 p){float v=0.0;float a=0.55;for(int i=0;i<4;i++){v+=a*vnoise(p);p=p*2.03+vec2(11.7,7.3);a*=0.5;}return v;}',
    'float bayer2(vec2 a){a=floor(a);return fract(a.x/2.0+a.y*a.y*0.75);}',
    'float bayer4(vec2 a){return bayer2(0.5*a)*0.25+bayer2(a);}',
    'void main(){',
    ' vec2 cell=floor(gl_FragCoord.xy);',
    ' float t=uTime;float tick=floor(t*6.0);',
    ' float band=floor(cell.y/7.0);',
    ' float gr=hash21(vec2(band+uSeed*7.0,tick));',
    ' if(gr>1.0-0.055*uGlitch){cell.x+=floor((hash21(vec2(band,tick+0.5))-0.5)*uRes.x*0.24);}',
    ' vec2 p=vec2(cell.x/uRes.y,cell.y/uRes.y)*2.4*uScale+uSeed*13.1;',
    ' p.y+=uScroll;',
    ' vec2 w=vec2(fbm(p*1.5+t*0.16),fbm(p*1.5+vec2(5.2,1.3)-t*0.12));',
    ' p+=(w-0.5)*2.4*uWarp;',
    ' float md=distance(cell,uMouse)/uRes.y;',
    ' float bloom=uMouseAmt*exp(-md*md*7.0);',
    ' float f1=fbm(p+vec2(0.0,t*0.22))+bloom*0.5;',
    ' float f2=fbm(p*1.31+vec2(7.7,-t*0.17))+bloom*0.34;',
    ' float f3=fbm(p*2.2+vec2(-3.3,t*0.13))+bloom*0.22;',
    ' float burst=step(0.982,hash21(vec2(tick,uSeed+2.0)));',
    ' f3+=burst*step(0.9,hash21(cell*0.71+vec2(tick,0.0)))*0.5;',
    ' float d8=bayer4(cell)-0.5;',
    ' float thr=uDensity<0.01?9.0:0.86-uDensity*0.34;',
    ' float c1=f1+d8*0.10;float c2=f2+d8*0.10;float c3=f3+d8*0.08;',
    ' float checker=step(0.5,mod(floor(cell.x/2.0)+floor(cell.y/2.0),2.0));',
    ' float stripes=step(1.0,mod(cell.x,2.0));',
    ' float dots=mod(floor(cell.x/2.0),2.0)*mod(floor(cell.y/2.0),2.0);',
    ' vec3 col=vec3(0.0);float a=0.0;',
    ' if(c1>thr&&checker>0.5){col=uC1;a=1.0;}',
    ' if(c1>thr+0.10){col=uC1;a=1.0;}',
    ' if(c2>thr+0.03&&stripes>0.5){col=uC2;a=1.0;}',
    ' if(c2>thr+0.13){col=uC2;a=1.0;}',
    ' float f4=fbm(p*1.7+vec2(9.1,t*0.19))+bloom*0.28;',
    ' float c4v=f4+d8*0.09;',
    ' float dotsY=mod(floor((cell.x+2.0)/2.0),2.0)*mod(floor((cell.y+2.0)/2.0),2.0);',
    ' if(c4v>thr+0.07&&dotsY>0.5){col=uC3;a=1.0;}',
    ' if(c4v>thr+0.15){col=uC3;a=1.0;}',
    ' float thrK=thr+0.16;',
    ' if(c3>thrK&&dots>0.5){col=uC4;a=1.0;}',
    ' if(c3>thrK+0.09){col=uC4;a=1.0;}',
    ' gl_FragColor=vec4(col*a,a);',
    '}'
  ].join('\n');

  function fract(x) { return x - Math.floor(x); }
  function h21(x, y) {
    var px = fract(x * 123.34), py = fract(y * 456.21);
    var d = px * (px + 45.32) + py * (py + 45.32);
    px += d; py += d;
    return fract(px * py);
  }
  function vn(x, y) {
    var ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
    var ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
    var a = h21(ix, iy), b = h21(ix + 1, iy), c = h21(ix, iy + 1), d = h21(ix + 1, iy + 1);
    var top = a + (b - a) * ux;
    return top + ((c + (d - c) * ux) - top) * uy;
  }
  function fbm2(x, y) {
    var v = 0.62 * vn(x, y);
    x = x * 2.03 + 11.7; y = y * 2.03 + 7.3;
    return v + 0.38 * vn(x, y);
  }
  function b2(x, y) { x = Math.floor(x); y = Math.floor(y); return fract(x / 2 + y * y * 0.75); }
  function b4(x, y) { return b2(x / 2, y / 2) * 0.25 + b2(x, y); }

  function parseColors(attr) {
    var defs = ['276FF8', 'FB3B3E', 'FBCB10', '0B0C0E'];
    var parts = String(attr || '').split(',').map(function (s) { return s.trim().replace('#', ''); })
      .filter(function (s) { return /^[0-9a-fA-F]{6}$/.test(s); });
    while (parts.length < 4) parts.push(defs[parts.length]);
    return parts.slice(0, 4).map(function (hx) {
      return [parseInt(hx.slice(0, 2), 16), parseInt(hx.slice(2, 4), 16), parseInt(hx.slice(4, 6), 16)];
    });
  }

  function mkProg(gl) {
    function sh(t, src) {
      var s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error('glitch-field shader:', gl.getShaderInfoLog(s)); return null; }
      return s;
    }
    var v = sh(gl.VERTEX_SHADER, VS), f = sh(gl.FRAGMENT_SHADER, FS);
    if (!v || !f) return null;
    var p = gl.createProgram(); gl.attachShader(p, v); gl.attachShader(p, f); gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { console.error('glitch-field link:', gl.getProgramInfoLog(p)); return null; }
    return p;
  }

  var UNIFORMS = ['uRes', 'uTime', 'uSeed', 'uMouse', 'uMouseAmt', 'uDensity', 'uScale', 'uWarp', 'uGlitch', 'uScroll', 'uC1', 'uC2', 'uC3', 'uC4'];

  class GlitchField extends HTMLElement {
    static get observedAttributes() { return ['colors', 'density', 'scale', 'speed', 'warp', 'glitch', 'pixel', 'fps', 'seed', 'interactive', 'lite', 'static', 'text', 'text-font', 'text-pad', 'textfont', 'textpad', 'mask-src', 'masksrc', 'photo-src', 'photosrc', 'photo-cut', 'photocut', 'photo-ink', 'photoink', 'photo-mid', 'photomid', 'photo-lite', 'photolite', 'photo-wobble', 'photowobble', 'photo-invert', 'photoinvert']; }

    _attr(name) {
      return this.getAttribute(name) !== null ? this.getAttribute(name) : this.getAttribute(name.replace(/-/g, ''));
    }

    _numA(name, def) {
      var v = parseFloat(this._attr(name));
      return isFinite(v) ? v : def;
    }

    _num(name, def) {
      var v = parseFloat(this.getAttribute(name));
      return isFinite(v) ? v : def;
    }

    connectedCallback() {
      var self = this;
      if (!this.style.display) this.style.display = 'block';
      if (!this.style.width) this.style.width = '100%';
      if (!this.style.height) this.style.height = '100%';
      if (!this._c) {
        this._c = document.createElement('canvas');
        this._c.style.cssText = 'width:100%;height:100%;display:block;image-rendering:pixelated;';
        this.appendChild(this._c);
      }
      this._vis = true;
      this._mx = -9999; this._my = -9999; this._mAmt = 0; this._mBase = 0;
      this._scroll = 0; this._lastQ = -1; this._forceDraw = true;
      this._ro = new ResizeObserver(function () { self._resize(); });
      this._ro.observe(this);
      this._io = new IntersectionObserver(function (es) { self._vis = es[0].isIntersecting; });
      this._io.observe(this);
      if (this.getAttribute('interactive') === '1') {
        this._pm = function (e) {
          var r = self._rect; if (!r) return;
          var x = e.clientX - r.left, y = e.clientY - r.top;
          var inside = x >= -60 && y >= -60 && x <= r.width + 60 && y <= r.height + 60;
          var px = self._pxCache || 5;
          if (inside) {
            var dx = e.clientX - (self._lx === undefined ? e.clientX : self._lx);
            var dy = e.clientY - (self._ly === undefined ? e.clientY : self._ly);
            var sp = Math.min(1, Math.hypot(dx, dy) / 26);
            self._mAmt = Math.max(self._mAmt, sp);
            self._mBase = 0.14;
            self._mx = x / px; self._my = (r.height - y) / px;
          } else { self._mBase = 0; }
          self._lx = e.clientX; self._ly = e.clientY;
        };
        addEventListener('pointermove', this._pm, { passive: true });
        this._sc = function () { self._scroll = (window.scrollY || 0) * 0.0006; };
        addEventListener('scroll', this._sc, { passive: true });
      }
      if (this.hasAttribute('lite') || this.hasAttribute('text') || this.hasAttribute('mask-src') || this.hasAttribute('masksrc') || this.hasAttribute('photo-src') || this.hasAttribute('photosrc')) this._mode = '2d'; else this._setupGL();
      if (document.fonts && document.fonts.ready) {
        var self3 = this;
        document.fonts.ready.then(function () { self3._buildMask(); self3._forceDraw = true; });
      }
      if (this._mode === '2d' && !this._ctx2d) this._ctx2d = this._c.getContext('2d');
      this._resize();
      this._loop();
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      if (this._ro) this._ro.disconnect();
      if (this._io) this._io.disconnect();
      if (this._pm) removeEventListener('pointermove', this._pm);
      if (this._sc) removeEventListener('scroll', this._sc);
    }

    attributeChangedCallback(name) {
      this._forceDraw = true;
      if (name === 'pixel' && this._c) this._resize();
      if ((name.indexOf('text') === 0 || name.indexOf('mask') === 0 || name.indexOf('photo') === 0) && this._c) this._buildMask();
    }

    _buildMask() {
      var psrc = this._attr('photo-src');
      var src = psrc || this._attr('mask-src');
      var text = this.getAttribute('text');
      if ((!src && !text) || !this._c || !this._c.width) { this._mask = null; return; }
      var w = this._c.width, h = this._c.height;
      if (!this._maskCanvas) this._maskCanvas = document.createElement('canvas');
      var mc = this._maskCanvas;
      mc.width = w; mc.height = h;
      var ctx = mc.getContext('2d', { willReadFrequently: true });
      ctx.clearRect(0, 0, w, h);
      var pad = parseFloat(this._attr('text-pad'));
      if (!isFinite(pad)) pad = 1;
      if (src) {
        var self = this;
        if (this._mimgSrc !== src) {
          this._mimgSrc = src;
          this._mimg = null;
          this._mask = null;
          /* Same-origin fetch avoids canvas taint (Image+crossOrigin often fails locally). */
          fetch(src)
            .then(function (res) { return res.blob(); })
            .then(function (blob) { return createImageBitmap(blob); })
            .then(function (bitmap) {
              if (self._mimgSrc !== src) return;
              self._mimg = bitmap;
              self._buildMask();
              self._forceDraw = true;
            })
            .catch(function () {
              if (self._mimgSrc !== src) return;
              var img = new Image();
              img.onload = function () {
                if (self._mimgSrc !== src) return;
                self._mimg = img;
                self._buildMask();
                self._forceDraw = true;
              };
              img.onerror = function () {
                if (self._mimgSrc !== src) return;
                self._mimg = null;
                self._mimgSrc = null;
                self._mask = null;
              };
              img.src = src;
            });
          return;
        }
        if (!this._mimg) { this._mask = null; return; }
        var iw = this._mimg.naturalWidth || this._mimg.width;
        var ih = this._mimg.naturalHeight || this._mimg.height;
        if (!iw || !ih) { this._mask = null; return; }
        ctx.imageSmoothingEnabled = !psrc;
        if (psrc) {
          var sc = Math.max(w / iw, h / ih);
          ctx.drawImage(this._mimg, (w - iw * sc) / 2, (h - ih * sc) / 2, iw * sc, ih * sc);
          var dp;
          try { dp = ctx.getImageData(0, 0, w, h).data; }
          catch (err) { this._mask = null; return; }
          var invert = this.hasAttribute('photo-invert') || this.getAttribute('photoinvert') === '1';
          var tone = new Uint8Array(w * h);
          for (var pi = 0; pi < w * h; pi++) {
            var aPx = dp[pi * 4 + 3];
            var lum = aPx < 128 ? 1 : (dp[pi * 4] * 0.299 + dp[pi * 4 + 1] * 0.587 + dp[pi * 4 + 2] * 0.114) / 255;
            if (invert) lum = 1 - lum;
            tone[pi] = 1 + Math.round(lum * 254);
          }
          this._mask = tone; this._maskMode = 'photo';
          return;
        }
        var s = Math.min((w - pad * 2) / iw, (h - pad * 2) / ih);
        var dw = iw * s, dh = ih * s;
        ctx.drawImage(this._mimg, (w - dw) / 2, (h - dh) / 2, dw, dh);
        var di = ctx.getImageData(0, 0, w, h).data;
        var Ci = parseColors(this.getAttribute('colors'));
        var maskI = new Uint8Array(w * h);
        for (var ii = 0; ii < w * h; ii++) {
          if (di[ii * 4 + 3] > 150) {
            var r = di[ii * 4], g = di[ii * 4 + 1], b = di[ii * 4 + 2];
            var best = 0, bd = 1e9;
            for (var k = 0; k < 4; k++) {
              var dr = r - Ci[k][0], dg = g - Ci[k][1], db = b - Ci[k][2];
              var dist = dr * dr + dg * dg + db * db;
              if (dist < bd) { bd = dist; best = k; }
            }
            maskI[ii] = best + 1;
          }
        }
        this._mask = maskI; this._maskMode = 'image';
        return;
      }
      var font = this._attr('text-font') || "900 100px sans-serif";
      ctx.font = font.replace(/\d+px/, '100px');
      var mw = Math.max(1, ctx.measureText(text).width);
      var size = Math.min(Math.floor(100 * (w - pad * 2) / mw), Math.floor(h * 1.25));
      ctx.font = font.replace(/\d+px/, size + 'px');
      ctx.textBaseline = 'alphabetic';
      ctx.fillStyle = '#fff';
      ctx.fillText(text, pad, Math.round(h / 2 + size * 0.36));
      var d = ctx.getImageData(0, 0, w, h).data;
      var mask = new Uint8Array(w * h);
      for (var i = 0; i < w * h; i++) mask[i] = d[i * 4 + 3] > 120 ? 1 : 0;
      this._mask = mask; this._maskMode = 'text';
    }

    _setupGL() {
      var self = this;
      var gl = this._c.getContext('webgl', { alpha: true, premultipliedAlpha: true, antialias: false, depth: false, stencil: false });
      if (!gl) { this._mode = '2d'; return; }
      var prog = mkProg(gl);
      if (!prog) { this._mode = '2d'; return; }
      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var aPos = gl.getAttribLocation(prog, 'aPos');
      gl.enableVertexAttribArray(aPos);
      gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
      var locs = {};
      UNIFORMS.forEach(function (u) { locs[u] = gl.getUniformLocation(prog, u); });
      this._gl = gl; this._prog = prog; this._locs = locs; this._mode = 'gl'; this._glLost = false;
      this._c.addEventListener('webglcontextlost', function (e) { e.preventDefault(); self._glLost = true; });
      this._c.addEventListener('webglcontextrestored', function () { self._setupGL(); self._forceDraw = true; });
    }

    _resize() {
      if (!this._c) return;
      var px = Math.max(1, this._num('pixel', 5));
      this._pxCache = px;
      var w = Math.max(4, Math.round(this.clientWidth / px));
      var h = Math.max(3, Math.round(this.clientHeight / px));
      if (this._c.width !== w || this._c.height !== h) {
        this._c.width = w; this._c.height = h;
        this._img = null;
      }
      this._rect = this._c.getBoundingClientRect();
      this._buildMask();
      this._forceDraw = true;
    }

    _loop() {
      var self = this;
      this._raf = requestAnimationFrame(function () { self._loop(); });
      if (!this._vis) return;
      var fps = Math.max(1, this._num('fps', 12));
      var reduce = RM.matches || this.hasAttribute('static');
      var now = performance.now() / 1000;
      var q = reduce ? 0 : Math.floor(now * fps) / fps;
      if (q === this._lastQ && !this._forceDraw) return;
      this._lastQ = q; this._forceDraw = false;
      this._mAmt = Math.max(this._mBase, this._mAmt * 0.86);
      var t = (reduce ? this._num('seed', 0) * 3 + 5 : q) * this._num('speed', 1);
      if (this._mode === 'gl') this._drawGL(t); else this._draw2D(t);
    }

    _params() {
      return {
        density: this._num('density', 0.5),
        scale: this._num('scale', 1),
        warp: this._num('warp', 1),
        glitch: this._num('glitch', 0.7),
        seed: this._num('seed', 0) % 97,
        colors: parseColors(this.getAttribute('colors'))
      };
    }

    _drawGL(t) {
      var gl = this._gl, L = this._locs;
      if (!gl || this._glLost) return;
      var P = this._params();
      var w = this._c.width, h = this._c.height;
      gl.viewport(0, 0, w, h);
      gl.useProgram(this._prog);
      gl.uniform2f(L.uRes, w, h);
      gl.uniform1f(L.uTime, t);
      gl.uniform1f(L.uSeed, P.seed);
      gl.uniform2f(L.uMouse, this._mx, this._my);
      gl.uniform1f(L.uMouseAmt, this._mAmt);
      gl.uniform1f(L.uDensity, P.density);
      gl.uniform1f(L.uScale, P.scale);
      gl.uniform1f(L.uWarp, P.warp);
      gl.uniform1f(L.uGlitch, P.glitch);
      gl.uniform1f(L.uScroll, this._scroll);
      gl.uniform3f(L.uC1, P.colors[0][0] / 255, P.colors[0][1] / 255, P.colors[0][2] / 255);
      gl.uniform3f(L.uC2, P.colors[1][0] / 255, P.colors[1][1] / 255, P.colors[1][2] / 255);
      gl.uniform3f(L.uC3, P.colors[2][0] / 255, P.colors[2][1] / 255, P.colors[2][2] / 255);
      gl.uniform3f(L.uC4, P.colors[3][0] / 255, P.colors[3][1] / 255, P.colors[3][2] / 255);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    _draw2D(t) {
      var ctx = this._ctx2d;
      if (!ctx) { this._ctx2d = ctx = this._c.getContext('2d'); if (!ctx) return; }
      var P = this._params();
      var w = this._c.width, h = this._c.height;
      if (!this._img || this._img.width !== w || this._img.height !== h) this._img = ctx.createImageData(w, h);
      var data = this._img.data;
      var t6 = Math.floor(t * 6);
      var k = 2.4 * P.scale / h;
      var off = P.seed * 13.1;
      var thr = P.density < 0.01 ? 9 : 0.86 - P.density * 0.34;
      var mask = this._mask;
      if (!mask && (this._attr('mask-src') || this._attr('photo-src') || this.getAttribute('text'))) {
        if (this._ctx2d) this._ctx2d.clearRect(0, 0, this._c.width, this._c.height);
        return;
      }
      if (mask && this._maskMode === 'text') thr -= 0.16;
      var PH = mask && this._maskMode === 'photo' ? { cut: this._numA('photo-cut', 0.9), ink: this._numA('photo-ink', 0.62), mid: this._numA('photo-mid', 0.42), lite: this._numA('photo-lite', 0.26), wob: this._numA('photo-wobble', 0.3) } : null;
      var thrK = thr + 0.16;
      var burst = h21(t6, P.seed + 2) > 0.982;
      var C = P.colors;
      var mAmt = this._mAmt, mx = this._mx, my = this._my;
      for (var y = 0; y < h; y++) {
        var cy = h - 1 - y;
        var band = Math.floor(cy / 7);
        var gr = h21(band + P.seed * 7, t6);
        var shift = gr > 1 - 0.055 * P.glitch ? Math.floor((h21(band, t6 + 0.5) - 0.5) * w * 0.24) : 0;
        for (var x = 0; x < w; x++) {
          var cx = x + shift;
          var mv = 0;
          if (mask) {
            mv = mask[y * w + Math.max(0, Math.min(w - 1, cx))];
            if (!mv) { data[(y * w + x) * 4 + 3] = 0; continue; }
          }
          var px0 = cx * k + off, py0 = cy * k + off + this._scroll;
          var wv = vn(px0 * 1.3 + t * 0.18, py0 * 1.3) - 0.5;
          px0 += wv * 1.9 * P.warp; py0 += wv * 1.3 * P.warp;
          var bloom = 0;
          if (mAmt > 0.01) {
            var mdx = (cx - mx) / h, mdy = (cy - my) / h;
            bloom = mAmt * Math.exp(-(mdx * mdx + mdy * mdy) * 7);
          }
          if (mv && this._maskMode === 'photo') {
            var lumP = (mv - 1) / 254;
            var i4P = (y * w + x) * 4;
            if (lumP > PH.cut) { data[i4P + 3] = 0; continue; }
            var dP = (b4(cx, cy) - 0.5) * 0.2 + (((cx + cy) % 2 + 2) % 2) * 0.05;
            if (PH.wob > 0.01) dP += (h21(cx + t6 * 7, cy * 1.3 + t6) - 0.5) * PH.wob * 0.14;
            var cvP = (1 - lumP) + dP;
            var ccP = null;
            if (cvP > PH.ink) ccP = C[0];
            else if (cvP > PH.mid) ccP = C[2];
            else if (cvP > PH.lite) ccP = C[1];
            if (ccP) { data[i4P] = ccP[0]; data[i4P + 1] = ccP[1]; data[i4P + 2] = ccP[2]; data[i4P + 3] = 255; }
            else data[i4P + 3] = 0;
            continue;
          }
          if (mv && this._maskMode === 'image') {
            var fI = fbm2(px0, py0 + t * 0.22) + bloom * 0.5;
            var cvI = fI + (b4(cx, cy) - 0.5) * 0.12;
            var chI = ((Math.floor(cx / 2) + Math.floor(cy / 2)) % 2 + 2) % 2;
            var stI = ((cx % 2) + 2) % 2;
            var thrI = P.density < 0.01 ? 9 : 0.8 - P.density * 0.55;
            var onI = cvI > thrI || (cvI > thrI - 0.09 && chI === 1) || (cvI > thrI - 0.14 && stI === 1);
            if (burst && P.density >= 0.01 && h21(cx * 0.71 + t6, cy * 0.71) > 0.93) onI = true;
            var i4I = (y * w + x) * 4;
            if (onI) { var ccI = C[mv - 1]; data[i4I] = ccI[0]; data[i4I + 1] = ccI[1]; data[i4I + 2] = ccI[2]; data[i4I + 3] = 255; }
            else data[i4I + 3] = 0;
            continue;
          }
          var f1 = fbm2(px0, py0 + t * 0.22) + bloom * 0.5;
          var f2 = fbm2(px0 * 1.31 + 7.7, py0 * 1.31 - t * 0.17) + bloom * 0.34;
          var f3 = fbm2(px0 * 2.2 - 3.3, py0 * 2.2 + t * 0.13) + bloom * 0.22;
          if (burst && h21(cx * 0.71 + t6, cy * 0.71) > 0.9) f3 += 0.5;
          var d8 = b4(cx, cy) - 0.5;
          var c1 = f1 + d8 * 0.10, c2 = f2 + d8 * 0.10, c3 = f3 + d8 * 0.08;
          var col = null;
          var checker = ((Math.floor(cx / 2) + Math.floor(cy / 2)) % 2 + 2) % 2;
          if (c1 > thr && checker === 1) col = C[0];
          if (c1 > thr + 0.10) col = C[0];
          var stripes = ((cx % 2) + 2) % 2;
          if (c2 > thr + 0.03 && stripes === 1) col = C[1];
          if (c2 > thr + 0.13) col = C[1];
          var f4 = fbm2(px0 * 1.7 + 9.1, py0 * 1.7 + t * 0.19) + bloom * 0.28;
          var c4v = f4 + d8 * 0.09;
          var dotsY = (((Math.floor((cx + 2) / 2) % 2) + 2) % 2) * (((Math.floor((cy + 2) / 2) % 2) + 2) % 2);
          if (c4v > thr + 0.07 && dotsY === 1) col = C[2];
          if (c4v > thr + 0.15) col = C[2];
          var dots = (((Math.floor(cx / 2) % 2) + 2) % 2) * (((Math.floor(cy / 2) % 2) + 2) % 2);
          if (c3 > thrK && dots === 1) col = C[3];
          if (c3 > thrK + 0.09) col = C[3];
          var i4 = (y * w + x) * 4;
          if (col) { data[i4] = col[0]; data[i4 + 1] = col[1]; data[i4 + 2] = col[2]; data[i4 + 3] = 255; }
          else { data[i4 + 3] = 0; }
        }
      }
      ctx.putImageData(this._img, 0, 0);
    }
  }

  customElements.define('glitch-field', GlitchField);
})();
