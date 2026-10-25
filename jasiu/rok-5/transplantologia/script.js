// TOC search
(function () {
  var search = document.getElementById('tocSearch');
  if (!search) return;
  search.addEventListener('input', function () {
    var q = this.value.toLowerCase().trim();
    var list = document.querySelectorAll('#tocList li');
    list.forEach(function (li) {
      if (li.classList.contains('group-title')) { li.style.display = ''; return; }
      var txt = (li.textContent || '').toLowerCase();
      li.style.display = (!q || txt.indexOf(q) >= 0) ? '' : 'none';
    });
  });
})();

// Collapsible TOC on mobile
(function () {
  var sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  var h3 = sidebar.querySelector('h3');
  if (!h3) return;
  var mq = window.matchMedia('(max-width: 1100px)');

  function applyState() {
    if (mq.matches) {
      sidebar.classList.add('is-collapsible');
      h3.setAttribute('role', 'button');
      h3.setAttribute('tabindex', '0');
      h3.setAttribute('aria-expanded', sidebar.classList.contains('is-open') ? 'true' : 'false');
    } else {
      sidebar.classList.remove('is-collapsible');
      sidebar.classList.remove('is-open');
      h3.removeAttribute('role');
      h3.removeAttribute('tabindex');
      h3.removeAttribute('aria-expanded');
    }
  }

  function toggle() {
    if (!mq.matches) return;
    var nowOpen = !sidebar.classList.contains('is-open');
    sidebar.classList.toggle('is-open', nowOpen);
    h3.setAttribute('aria-expanded', nowOpen ? 'true' : 'false');
  }

  h3.addEventListener('click', toggle);
  h3.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
  });

  sidebar.addEventListener('click', function (e) {
    if (!mq.matches) return;
    var a = e.target.closest && e.target.closest('a');
    if (a && sidebar.contains(a)) {
      sidebar.classList.remove('is-open');
      h3.setAttribute('aria-expanded', 'false');
    }
  });

  if (mq.addEventListener) mq.addEventListener('change', applyState);
  else if (mq.addListener) mq.addListener(applyState);
  applyState();
})();

// Live thing: day filter for the week plan
(function () {
  var switcher = document.querySelector('.day-switch');
  if (!switcher) return;
  var rows = document.querySelectorAll('.plan-row');
  switcher.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-day]');
    if (!btn) return;
    var day = btn.getAttribute('data-day');
    switcher.querySelectorAll('button').forEach(function (b) {
      b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
    });
    rows.forEach(function (row) {
      if (day === 'all') row.classList.remove('is-dim');
      else row.classList.toggle('is-dim', row.getAttribute('data-day') !== day);
    });
  });
})();

// Section entrance motion
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-part, .card, details.qa').forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }
  var nodes = [];
  document.querySelectorAll('.card > *:not(.bloque-banner), .figure-band, details.qa, .bloque-banner').forEach(function (el, i) {
    el.classList.add('reveal-part');
    el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + 'ms';
    nodes.push(el);
  });
  if (!('IntersectionObserver' in window)) {
    nodes.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  nodes.forEach(function (el) { io.observe(el); });
})();
