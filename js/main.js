/* ============================================================
   I-TOUCH MASSAGE SPA CLINIC — Site Script
   Handles: mobile menu toggle + dynamic copyright year.
   Loaded with `defer` from index.html.
   ============================================================ */

(function () {
  'use strict';

  /* ---- Mobile menu ---- */
  var btn   = document.getElementById('menu-btn');
  var menu  = document.getElementById('mobile-menu');
  var open  = document.getElementById('icon-open');
  var close = document.getElementById('icon-close');

  function toggle() {
    var isOpen = menu.classList.toggle('hidden') === false;
    open.classList.toggle('hidden', isOpen);
    close.classList.toggle('hidden', !isOpen);
    btn.setAttribute('aria-expanded', String(isOpen));
  }

  if (btn && menu) {
    btn.addEventListener('click', toggle);

    // Close menu when a link is tapped (mobile)
    menu.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!menu.classList.contains('hidden')) toggle();
      });
    });
  }

  /* ---- Dynamic copyright year ---- */
  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
