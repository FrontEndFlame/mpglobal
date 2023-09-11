$(document).ready(function() {
  $('.menu__icon').on('click', function() {
    $('.menu__body').toggleClass('show');
    $('#close-menu-btn').toggleClass('hidden');
  });
  
  $('#close-menu-btn').on ('click', function() {
    $('.menu__body').removeClass('show');
    $('#close-menu-btn').addClass('hidden');
  })

  $('.menu__body a').on('click', function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    $('.menu__body').removeClass('show');
    $('#close-menu-btn').addClass('hidden');
  });
});