const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const anchorLink = document.querySelectorAll('a[href^="#"]');
const hamburger = document.querySelector(".hamburger");

// toggle hamburger menu
function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
hamburger.addEventListener("click", mobileMenu);

// close the nav menu when user clicks link
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

// smooth scrolling effect
anchorLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});
