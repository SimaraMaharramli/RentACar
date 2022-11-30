//nav
const navbar = document.getElementsByClassName("fa-bars")[0];
const overlaymenu = document.querySelector(".overlay");
const closex = document.querySelector(".fa-xmark");
const dropdown = document.querySelector(".dropdown-content");

navbar.addEventListener("click", openOverlay);
closex.addEventListener("click", closeeOverlay);

function openOverlay() {
  overlaymenu.classList.add("active");

  dropdown.classList.remove("dropdown-content");
}

function closeeOverlay() {
  overlaymenu.classList.remove("active");

  dropdown.classList.add("dropdown-content");
}

//swiper
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});
