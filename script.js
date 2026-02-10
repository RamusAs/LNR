const links = document.querySelectorAll(".nav__item");
const nav = document.querySelector("nav");
const navL = document.querySelector(".nav__list");
const icons = document.querySelector(".burger");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const darkSections = document.querySelectorAll(".section-dark");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        nav.classList.add("dark-zone");
      } else {
        nav.classList.remove("dark-zone");
      }
    });
  },
  { threshold: 0.3 }
);

darkSections.forEach((section) => observer.observe(section));
