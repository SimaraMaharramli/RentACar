
const navbar = document.getElementsByClassName("fa-bars")[0];
const overlaymenu = document.querySelector(".overlay");
const closex = document.querySelector(".fa-xmark");

navbar.addEventListener("click", openOverlay);
closex.addEventListener("click", closeeOverlay);

function openOverlay() {
  overlaymenu.classList.add("active");

}

function closeeOverlay() {
  overlaymenu.classList.remove("active");

}


// //swiper
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

