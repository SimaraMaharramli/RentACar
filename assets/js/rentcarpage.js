const popup = document.getElementById("pop_up");
const btns = document.querySelectorAll("#open_pop_up");
Array.from(btns).forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    popup.classList.add("active");
  });
});
const closepopup = document.getElementById("pop_up_close");
closepopup.addEventListener("click", function (e) {
  e.preventDefault();
  popup.classList.remove("active");
});



// nav

const esasSehife = document.getElementsByClassName("esasSehife")[0]
const yaxtaSehife = document.getElementsByClassName("yaxtaSehife")[0]
const toyMashini = document.getElementsByClassName("toyMashini")[0]
const miniVan = document.getElementsByClassName("miniVan")[0]
const sedann = document.getElementsByClassName("sedann")[0]
const elaqeee = document.getElementsByClassName("elaqeee")[0]
const van = document.querySelector('.nav')

esasSehife.addEventListener('click',ishlediEsas)
yaxtaSehife.addEventListener('click',ishlediYaxta)
toyMashini.addEventListener('click',ishlediToy)
miniVan.addEventListener('click',ishlediVita)
sedann.addEventListener('click',ishlediSedan)
elaqeee.addEventListener('click',ishlediElaqe)
function ishlediEsas(){
  van.classList.add('van')
  van.classList.remove('vann')
  van.classList.remove('vannn')
  van.classList.remove('vannnn')
  van.classList.remove('vannnnn')
  van.classList.remove('vannnnnn')
  

}
function ishlediYaxta(){
  van.classList.add('vann')
  van.classList.remove('van')
  van.classList.remove('vannn')
  van.classList.remove('vannnn')
  van.classList.remove('vannnnn')
  van.classList.remove('vannnnnn')
}
function ishlediToy(){
  van.classList.add('vannn')
  van.classList.remove('van')
  van.classList.remove('vann')
  van.classList.remove('vannnn')
  van.classList.remove('vannnnn')
  van.classList.remove('vannnnnn')
}
function ishlediVita(){
  van.classList.add('vannnn')
  van.classList.remove('van')
  van.classList.remove('vann')
  van.classList.remove('vannn')
  van.classList.remove('vannnnn')
  van.classList.remove('vannnnnn')
}
function ishlediSedan(){
  van.classList.add('vannnnn')
  van.classList.remove('van')
  van.classList.remove('vann')
  van.classList.remove('vannn')
  van.classList.remove('vannnn')
  van.classList.remove('vannnnnn')
}
function ishlediElaqe(){
  van.classList.add('vannnnnn')
  van.classList.remove('van')
  van.classList.remove('vann')
  van.classList.remove('vannn')
  van.classList.remove('vannnn')
  van.classList.remove('vannnnn')
}