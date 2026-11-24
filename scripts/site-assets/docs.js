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

  /* Sidebar search: filters component links by name, group and summary. "/" focuses, Enter opens the first match, Esc clears. */
  var q = document.getElementById('side-q');
  if (q) {
    var side = document.querySelector('.side');
    var groups = Array.prototype.slice.call(side.querySelectorAll('.side-group'));
    var status = document.getElementById('side-q-status');
    var labels = new Map();
    side.querySelectorAll('a').forEach(function (a) { labels.set(a, a.textContent); });
    function norm(s) { return s.toLowerCase().replace(/[\s_-]+/g, ''); }
    function filter() {
      var raw = q.value.trim(), term = raw.toLowerCase(), first = null, best = 9, n = 0;
      groups.forEach(function (g) {
        var any = false;
        g.querySelectorAll('a').forEach(function (a) {
          var name = labels.get(a), k = a.getAttribute('data-k');
          var hit = !term || (k ? (k.indexOf(term) >= 0 || norm(name).indexOf(norm(term)) >= 0) : name.toLowerCase().indexOf(term) >= 0);
          a.hidden = !hit;
          var i = term ? name.toLowerCase().indexOf(term) : -1;
          if (i >= 0) { a.innerHTML = ''; a.append(name.slice(0, i)); var m = document.createElement('mark'); m.textContent = name.slice(i, i + term.length); a.append(m, name.slice(i + term.length)); }
          else a.textContent = name;
          if (hit) { any = true; var sc = !term ? 3 : name.toLowerCase().indexOf(term) === 0 ? 0 : i >= 0 ? 1 : 2; if (!k) sc += 0.5; if (k) n++; if (term && (!first || sc < best)) { first = a; best = sc; } }
        });
        g.hidden = !any;
      });
      status.textContent = term ? (n ? n + (n === 1 ? ' component' : ' components') : 'No components match “' + raw + '”') : '';
      return first;
    }
    q.addEventListener('input', filter);
    q.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { var f = filter(); if (f) location.href = f.href; }
      else if (e.key === 'Escape') { if (q.value) { q.value = ''; filter(); } else q.blur(); }
      else if (e.key === 'ArrowDown') { var a = side.querySelector('a:not([hidden])'); if (a) { e.preventDefault(); a.focus(); } }
    });
    document.addEventListener('keydown', function (e) {
      var t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
      if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        if (getComputedStyle(document.getElementById('side')).display === 'none') { var b = document.querySelector('.menu-btn'); if (b) b.click(); }
        q.focus(); q.select();
      }
    });
  }
})();
