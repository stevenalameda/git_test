"use strict";

$(window).scroll(function() {
  if ($(window).scrollTop() > 90) {
    $('header').addClass('header-shadow');
    $('.buzzblog-bug').addClass('buzzblog-bug-opaque');
  } else {
    $('header').removeClass('header-shadow');
    $('.buzzblog-bug').removeClass('buzzblog-bug-opaque');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 10) {
    $('.buzzblog-bug').addClass('buzzblog-bug-opaque');
  } else {
    $('.buzzblog-bug').removeClass('buzzblog-bug-opaque');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 30) {
    $('.carousel-item > img').addClass('hero-zoom');
	//$('.blog-slide-item > img').addClass('hero-zoom');
  } else {
    $('.carousel-item > img').removeClass('hero-zoom');
	//$('.blog-slide-item > img').removeClass('hero-zoom');
  }
});

$(window).scroll(function() {
  if ($(window).scrollTop() > 170) {
    $('.totop a').fadeIn();
  } else {
    $('.totop a').fadeOut();
  }
});

$('#uptop').on('click', function(event) {

  $('html, body').animate({
    scrollTop: $("#page-top").offset().top
  }, 500);

});

//
// GSAP container for header
//