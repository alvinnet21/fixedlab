(function () {
  "use strict";

  // Mobile nav
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  function setNav(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.querySelector("use").setAttribute("href", open ? "assets/img/icons.svg#i-close" : "assets/img/icons.svg#i-menu");
  }
  toggle.addEventListener("click", function () { setNav(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) setNav(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });

  // Logo click: scroll all the way to the top
  document.querySelectorAll('a[href="#top"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      setNav(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (history.replaceState) history.replaceState(null, "", location.pathname + location.search);
    });
  });

  // Header border on scroll
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile action bar: show once the hero buttons are scrolled past, hide over the contact form
  var bar = document.getElementById("actionBar");
  var heroActions = document.querySelector(".hero-actions");
  var contact = document.getElementById("contact");
  function updateBar() {
    var pastHero = !heroActions || heroActions.getBoundingClientRect().bottom < 0;
    var atContact = false;
    if (contact) {
      var r = contact.getBoundingClientRect();
      atContact = r.top < window.innerHeight * 0.85 && r.bottom > window.innerHeight * 0.3;
    }
    bar.classList.toggle("hide", !pastHero || atContact);
  }
  if (bar) {
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar);
    updateBar();
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
