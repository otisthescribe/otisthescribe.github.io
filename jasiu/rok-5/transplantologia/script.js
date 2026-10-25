// Filtro del índice
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

// TOC plegable en móvil
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
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });

  // Auto-close after clicking a TOC link on mobile
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
