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
