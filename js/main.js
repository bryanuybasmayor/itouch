/* ============================================================
   I-TOUCH MASSAGE SPA CLINIC — Site Script
   Handles: mobile menu toggle + nav active state (scrollspy)
            + dynamic copyright year.
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

  /* ---- Nav active state (scrollspy) ----
     Marks the nav link whose section currently sits at the middle of
     the viewport, so the header always shows where the visitor is. */
  var navAnchors = document.querySelectorAll(
    'header .nav-link[href^="#"], header .mobile-link[href^="#"]'
  );
  var linkMap = {}; // section id -> its nav links
  var order   = []; // section ids, in nav order

  Array.prototype.forEach.call(navAnchors, function (link) {
    var id     = link.getAttribute('href').slice(1);
    var target = id && document.getElementById(id);
    if (!target) return;
    if (!linkMap[id]) { linkMap[id] = []; order.push(id); }
    linkMap[id].push(link);
  });

  function setActive(id) {
    order.forEach(function (sid) {
      var isActive = sid === id;
      linkMap[sid].forEach(function (link) {
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    });
  }

  var sections = order.map(function (id) { return document.getElementById(id); });

  if ('IntersectionObserver' in window && sections.length) {
    // A zero-height band across the viewport's mid-line: whichever
    // section spans it is the one in view.
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(function (section) { spy.observe(section); });
  }

  /* ---- Dynamic copyright year ---- */
  var year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
