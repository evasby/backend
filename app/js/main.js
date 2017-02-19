$(document).ready(function(){
	//fixed header show
	$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top < 250) {
      $(".header_position").removeClass('header_position__fixed');
      //$("body").removeClass('fixed');
    } else {
      $(".header_position").addClass('header_position__fixed');
      //$("body").addClass('fixed');
    }
  });
  //menu toggle
  $('.toggle').click(function(){
    if ($(this).hasClass('toggle__on')) {
      $(this).removeClass('toggle__on');
      $(".menu").removeClass('menu__on');
    } else{
      $(this).addClass('toggle__on');
      $(".menu").addClass('menu__on');
    }
  });
  //hide menu
  $(".menu").click(function(e) {
    if ($(e.target).closest(".menu_wrap").length) return;
    $('.toggle').removeClass('toggle__on');
    $(".menu").removeClass('menu__on');
    e.stopPropagation();
  });
  //scroll to services
  $(".arrows").click(function() {
    $('html, body').animate({
        scrollTop: $(".services-block").offset().top + 80
    }, 400);
  });
});