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

  // Header border on scroll
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Pre-select a service when a service link is clicked
  var select = document.getElementById("serviceSelect");
  if (select) {
    document.querySelectorAll("[data-service]").forEach(function (el) {
      el.addEventListener("click", function () {
        var v = el.getAttribute("data-service");
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].text === v) { select.selectedIndex = i; break; }
        }
      });
    });
  }

  // Mobile action bar: show once the hero buttons are scrolled past, hide over the contact form
  var bar = document.getElementById("actionBar");
  var heroActions = document.querySelector(".hero-actions");
  var contact = document.getElementById("contact");
  function updateBar() {
    var pastHero = !heroActions || heroActions.getBoundingClientRect().bottom < 0;
    var atContact = false;
    if (contact) {
      var r = contact.getBoundingClientRect();
      atContact = r.top < window.innerHeight * 0.85 && r.bottom > 0;
    }
    bar.classList.toggle("hide", !pastHero || atContact);
  }
  if (bar) {
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar);
    updateBar();
  }

  // Quote form: validates, then opens the visitor's email app with a pre-filled message.
  // To receive submissions directly, point the form at a service such as Formspree (see README).
  var form = document.getElementById("quoteForm");
  var status = document.getElementById("formStatus");
  if (form) {
  var TO = "hello@fixedlab.com.au";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    form.querySelectorAll("[required]").forEach(function (f) {
      var bad = !f.value.trim();
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    if (!ok) {
      status.className = "form-status err";
      status.textContent = "Please fill in the highlighted fields.";
      return;
    }
    var d = form.elements;
    var body = [
      "Name: " + d.name.value,
      "Phone: " + d.phone.value,
      "Service: " + d.service.value,
      "Suburb: " + (d.suburb.value || "-"),
      "On-site visit: " + (d.onsite.checked ? "Yes" : "No"),
      "",
      d.message.value
    ].join("\n");
    var subject = "Quote request: " + d.service.value + " — " + d.name.value;
    window.location.href = "mailto:" + TO + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    status.className = "form-status ok";
    status.textContent = "Thanks! Your email app should open — just hit send.";
  });
  form.addEventListener("input", function (e) { e.target.classList.remove("invalid"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
