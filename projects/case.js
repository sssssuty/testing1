/* Shared behavior for project detail pages: access check, clock, mobile nav, anchor highlight. */
(function () {
  if (!window.TingyuProjectsAuth || !TingyuProjectsAuth.isAllowed()) {
    location.replace("../work.html");
    return;
  }
  var content = document.getElementById("projects-content");
  if (content) content.hidden = false;

  /* Clock */
  var clock = document.getElementById("sf-clock");
  if (clock) {
    var fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "America/Los_Angeles",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    var tick = function () {
      clock.textContent = "San Francisco " + fmt.format(new Date());
    };
    tick();
    setInterval(tick, 1000);
  }

  /* Mobile nav */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav-toggle");
  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (nav.classList.contains("is-open") && !nav.contains(e.target)) setOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 861px)").matches) setOpen(false);
    });
  }

  /* Anchor highlight: mark the section currently being read. */
  var toc = document.querySelector(".case-toc");
  if (!toc) return;
  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); })
    .filter(Boolean);
  var current = null;

  function update() {
    var line = window.innerHeight * 0.35;
    var active = sections[0];
    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) active = s;
    });
    var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (atBottom) active = sections[sections.length - 1];
    if (!active || active === current) return;
    current = active;
    links.forEach(function (a) {
      var on = a.getAttribute("href") === "#" + active.id;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
      /* Keep the active anchor visible in the horizontal strip on small screens. */
      if (on && toc.scrollWidth > toc.clientWidth) {
        toc.scrollTo({ left: a.offsetLeft - toc.offsetLeft - 20, behavior: "smooth" });
      }
    });
  }

  var queued = false;
  window.addEventListener("scroll", function () {
    if (queued) return;
    queued = true;
    requestAnimationFrame(function () { queued = false; update(); });
  }, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
