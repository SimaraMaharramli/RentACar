
const allHoverImages = document.querySelectorAll('.product_div div img');
const imgContainer = document.querySelector('.img-global');

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

//swiper

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});