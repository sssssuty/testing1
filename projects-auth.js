/* Shared access for projects.html — localStorage session, 30 minutes. */
(function (global) {
  var KEY = "tingyu-projects-access";
  var TOKEN = "tingyu-projects-ok-v1";
  var TTL_MS = 30 * 60 * 1000;

  function read() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function clear() {
    try {
      localStorage.removeItem(KEY);
    } catch (e) {}
    try {
      sessionStorage.removeItem(KEY);
    } catch (e) {}
  }

  function isAllowed() {
    var data = read();
    if (!data || data.token !== TOKEN || typeof data.expiresAt !== "number") {
      clear();
      return false;
    }
    if (Date.now() > data.expiresAt) {
      clear();
      return false;
    }
    return true;
  }

  function grant() {
    try {
      localStorage.setItem(
        KEY,
        JSON.stringify({
          token: TOKEN,
          expiresAt: Date.now() + TTL_MS
        })
      );
    } catch (e) {}
    try {
      sessionStorage.removeItem(KEY);
    } catch (e) {}
  }

  /* Refresh the 30-minute window while still valid. */
  function touch() {
    if (!isAllowed()) return false;
    grant();
    return true;
  }

  global.TingyuProjectsAuth = {
    isAllowed: isAllowed,
    grant: grant,
    touch: touch,
    clear: clear,
    TTL_MS: TTL_MS
  };
})(typeof window !== "undefined" ? window : this);