let menuIcon = document.querySelector("#menuIcon");
let nav = document.querySelector("nav");
let header = document.querySelector("header");

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("show");

  this.classList.containes("fa-bars")
    ? (this.classList = "fa-solid fa-xmark")
    : (this.classList = "fa-solid fa-bars");
});
window.addEventListener("scroll", function () {
  console.log("window.scrollY: ", window.scrollY);
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
