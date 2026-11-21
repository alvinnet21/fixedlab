(function () {
  "use strict";

  // Mobile nav
  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  function setNav(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.querySelector("use").setAttribute("href", open ? "#i-close" : "#i-menu");
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
  document.querySelectorAll("[data-service]").forEach(function (el) {
    el.addEventListener("click", function () {
      var v = el.getAttribute("data-service");
      for (var i = 0; i < select.options.length; i++) {
        if (select.options[i].text === v) { select.selectedIndex = i; break; }
      }
    });
  });

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Quote form: validates, then opens the visitor's email app with a pre-filled message.
  // To receive submissions directly, point the form at a service such as Formspree (see README).
  var form = document.getElementById("quoteForm");
  var status = document.getElementById("formStatus");
  var TO = "hello@fixedlab.com.au";
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var ok = true;
    form.querySelectorAll("[required]").forEach(function (f) {
      var bad = !f.value.trim();
      f.classList.toggle("invalid", bad);
      if (bad) ok = false;
    });
    var email = form.email.value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { form.email.classList.add("invalid"); ok = false; }
    else form.email.classList.remove("invalid");

    if (!ok) {
      status.className = "form-status err";
      status.textContent = "Please fill in the highlighted fields.";
      return;
    }
    var d = form.elements;
    var body = [
      "Name: " + d.name.value,
      "Phone: " + d.phone.value,
      "Email: " + (d.email.value || "-"),
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

  document.getElementById("year").textContent = new Date().getFullYear();
})();
