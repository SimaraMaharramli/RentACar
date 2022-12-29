//nav
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

// nav

const esasSehife = document.getElementsByClassName("esasSehive")[0]
const yaxtaSehife = document.getElementsByClassName("yahta")[0]
const toyMashini = document.getElementsByClassName("Toy_ma_shini")[0]
const miniVan_ = document.getElementsByClassName("mini_van_")[0]
const sedann = document.getElementsByClassName("sedan_n")[0]
const elaqes = document.getElementsByClassName("elaqes")[0]


esasSehife.addEventListener('click',ishlediEsas)
yaxtaSehife.addEventListener('click',ishlediYaxta)
toyMashini.addEventListener('click',ishlediToy)
miniVan_.addEventListener('click',ishlediVita)
sedann.addEventListener('click',ishlediSedan)
elaqes.addEventListener('click',ishlediElaqe)

function ishlediEsas(){
  elaqes.classList.remove('van')
  elaqes.classList.add('hover_effect_el')
  esasSehife.classList.add('van')
  esasSehife.classList.remove('hover_effect_e')
  yaxtaSehife.classList.remove('van')
  yaxtaSehife.classList.add('hover_effect_y')
  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')
  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')
  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')


}
function ishlediYaxta(){
  elaqes.classList.remove('van')
  elaqes.classList.add('hover_effect_el')
  esasSehife.classList.add('hover_effect_e')
  esasSehife.classList.remove('van')
  yaxtaSehife.classList.add("van")
  yaxtaSehife.classList.remove('hover_effect_y')
  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')
  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')
  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')

}
function ishlediToy(){
  esasSehife.classList.remove('van')
  esasSehife.classList.add('hover_effect_e')
  elaqes.classList.remove('van')
  elaqes.classList.add('hover_effect_el')
  toyMashini.classList.add('van')
  toyMashini.classList.remove('hover_effect_t')
  yaxtaSehife.classList.remove('van')
  yaxtaSehife.classList.add('hover_effect_y')
  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')
  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')

}
function ishlediVita(){
  elaqes.classList.remove('van')
  elaqes.classList.add('hover_effect_el')
  miniVan_.classList.add("van")
  miniVan_.classList.remove('hover_effect_m')

  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')

  esasSehife.classList.remove('van')
  esasSehife.classList.add('hover_effect_e')

  yaxtaSehife.classList.remove('van')
  yaxtaSehife.classList.add('hover_effect_y')

  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')



}
function ishlediSedan(){
  elaqes.classList.remove('van')
  elaqes.classList.add('hover_effect_el')

  sedann.classList.add('van')
  sedann.classList.remove('hover_effect_s' )

  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')

  esasSehife.classList.remove('van')
  esasSehife.classList.add('hover_effect_e')

  yaxtaSehife.classList.remove('van')
  yaxtaSehife.classList.add('hover_effect_y')

  miniVan_.classList.remove("van")
  miniVan_.classList.add('hover_effect_m')

}
function ishlediElaqe(){
  elaqes.classList.add('van')
  elaqes.classList.remove('hover_effect_el')

  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')

  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')

  esasSehife.classList.remove('van')
  esasSehife.classList.add('hover_effect_e')

  yaxtaSehife.classList.remove("van")
  yaxtaSehife.classList.add("hover_effect_y")

  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')




}

// //swiper
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

