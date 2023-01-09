
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('click', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        // image.parentElement.classList.add('active');
    });
});

//nav
const navbar = document.getElementsByClassName("fa-bars")[0];
const overlaymenu = document.querySelector(".overlay");
const closex = document.querySelector(".fa-xmark");
const dropdown = document.querySelector(".dropdown-content");

navbar.addEventListener("click", openOverlay);
closex.addEventListener("click", closeeOverlay);

function openOverlay() {
  overlaymenu.classList.add("active");

}

function closeeOverlay() {
  overlaymenu.classList.remove("active");

}



var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});