$('.mybutton').click(function(e) {
    e.preventDefault();
    if ($(".password").val().trim() == '')
      $(".password").css('border-color', 'red');
    else
      $(".password").css('border-color', '');
  });