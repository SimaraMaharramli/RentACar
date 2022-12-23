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

//acc
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
   
    var panel = this.nextElementSibling;
    

    if (panel.style.display === "block") {
      panel.style.display = "none";

    } else {
      panel.style.display = "block";  

    }
  });
}