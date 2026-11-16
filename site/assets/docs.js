(function () {
  var root = document.documentElement;
  var ctls = document.querySelectorAll('[data-theme-ctl]');

  function current() {
    return { theme: root.getAttribute('data-theme'), accent: root.getAttribute('data-accent'), font: root.getAttribute('data-font') };
  }
  function broadcast() {
    var t = current();
    document.querySelectorAll('iframe').forEach(function (f) {
      try { f.contentWindow.postMessage({ tesseraTheme: t }, location.origin); } catch (e) {}
    });
  }
  function sync() {
    var t = current();
    ctls.forEach(function (s) { s.value = t[s.getAttribute('data-theme-ctl')]; });
  }
  ctls.forEach(function (s) {
    s.addEventListener('change', function () {
      var k = s.getAttribute('data-theme-ctl');
      root.setAttribute('data-' + k, s.value);
      try {
        if (k === 'theme') localStorage.setItem('tessera-docs:mode', s.value);
        else {
          var cur = JSON.parse(localStorage.getItem('tessera:theme') || '{}') || {};
          cur[k] = s.value;
          localStorage.setItem('tessera:theme', JSON.stringify(cur));
        }
      } catch (e) {}
      broadcast();
    });
  });
  // The Themes preview changes accent and typeface through Tessera.setTheme, which writes storage.
  window.addEventListener('storage', function (e) {
    if (e.key !== 'tessera:theme') return;
    try {
      var t = JSON.parse(e.newValue || '{}') || {};
      if (t.accent) root.setAttribute('data-accent', t.accent);
      if (t.font) root.setAttribute('data-font', t.font);
      sync();
      broadcast();
    } catch (x) {}
  });
  document.querySelectorAll('iframe').forEach(function (f) { f.addEventListener('load', broadcast); });
  sync();

  var btn = document.querySelector('.menu-btn');
  if (btn) btn.addEventListener('click', function () {
    var open = document.body.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', String(open));
  });

  document.querySelectorAll('[data-origin]').forEach(function (el) { el.textContent = location.origin; });
})();
