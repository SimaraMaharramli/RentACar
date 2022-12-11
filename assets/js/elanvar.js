const btnclick = document.getElementById("btn");
btnclick.addEventListener("click", function (e) {
  e.preventDefault();
  Swal.fire(
    'Elanınız uğurla göndərildi!',
    'Sizə qısa zamanda geri dönüş olunacaqdır!',
    'success'
  )
});

