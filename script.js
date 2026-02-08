const links = document.querySelectorAll(".nav__item");
const nav = document.querySelector("nav");
const navL = document.querySelector(".nav__list");
const icons = document.querySelector("#icons");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
