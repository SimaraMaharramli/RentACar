
// nav
const esasSehife = document.getElementsByClassName("esasSehive")[0]
const yaxtaSehife = document.getElementsByClassName("yahta")[0]
const toyMashini = document.getElementsByClassName("Toy_ma_shini")[0]
const miniVan_ = document.getElementsByClassName("mini_van_")[0]
const elaqe = document.getElementsByClassName("elaqes")[0]


esasSehife.addEventListener('click',ishlediEsas)
yaxtaSehife.addEventListener('click',ishlediYaxta)
toyMashini.addEventListener('click',ishlediToy)
miniVan_.addEventListener('click',ishlediVita)
elaqe.addEventListener('click',ishlediEla_qe)

function ishlediEsas(){
    esasSehife.classList.add('van')
    esasSehife.classList.remove('hover_effect_e')
  elaqe.classList.remove('van')
  elaqe.classList.add('hover_effect_el')
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
    yaxtaSehife.classList.add("van")
    yaxtaSehife.classList.remove('hover_effect_y')
  elaqe.classList.remove('van')
  elaqe.classList.add('hover_effect_el')
  esasSehife.classList.add('hover_effect_e')
  esasSehife.classList.remove('van')
  toyMashini.classList.remove('van')
  toyMashini.classList.add('hover_effect_t')
  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')
  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')

}
function ishlediToy(){
    toyMashini.classList.add('van')
    toyMashini.classList.remove('hover_effect_t')
  esasSehife.classList.remove('van')
  esasSehife.classList.add('hover_effect_e')
  elaqe.classList.remove('van')
  elaqe.classList.add('hover_effect_el')
  yaxtaSehife.classList.remove('van')
  yaxtaSehife.classList.add('hover_effect_y')
  miniVan_.classList.remove('van')
  miniVan_.classList.add('hover_effect_m')
  sedann.classList.remove('van')
  sedann.classList.add(' hover_effect_s')

}
function ishlediVita(){
  elaqe.classList.remove('van')
  elaqe.classList.add('hover_effect_el')
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

function ishlediEla_qe(){
  elaqe.classList.add('van')
  elaqe.classList.remove('hover_effect_el')

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