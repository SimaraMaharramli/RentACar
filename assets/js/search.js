const search = document.getElementsByClassName("search")[0];
const searchMenu = document.querySelector(".searchOverlay");
const closeSearch = document.querySelector(".fa-circle-xmark");

search.addEventListener("click", searchOverlay);
closeSearch.addEventListener("click", searchClose);

function searchOverlay() {
  searchMenu.classList.add("searchActive");

}

function searchClose() {
  searchMenu.classList.remove("searchActive");

}