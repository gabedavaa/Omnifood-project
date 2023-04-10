"use strict";

////////////////////////////
// Set current year
const yearElement = document.querySelector(".year");
yearElement.textContent = new Date().getFullYear();

// Make mobile navigation work
const headerElement = document.querySelector(".header");
const btnNav = document.querySelector(".btn-mobile-nav");

btnNav.addEventListener("click", () => {
  headerElement.classList.toggle("nav-open");
});

///////////////////////////////////////////////
// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionElement = document.querySelector(href);
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      headerElement.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroElement = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroElement);
