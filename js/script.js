$(function () {
  'use strict'

  // banner slider

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });

  //   screen slider
  $('.screen_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true
  });
  // feed-slider
  //   screen slider
  


    $('.feed_main').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.f_slick'
    });
    $('.f_slick').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.feed_main',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      arrows:false,
      centerPadding:0
    });
            
  //   venobox
  $('.venobox').venobox();

  // sticky menu
  var navOff = $('.main_menu').offset().top;

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > navOff) {

      $(".main_menu").addClass('menu_fix');

    } else {
      $(".main_menu").removeClass('menu_fix');
    }

  });

  // back to top button
  $('.back-to-top-button').click(function () {
    $('html,body').animate({
      scrollTop: 0,
    }, 1000);
  });

  $(window).scroll(function () {
    var scrolling2 = $(this).scrollTop();
    if (scrolling2 > 150) {
      $('.back-to-top-button').fadeIn();
    } else {
      $('.back-to-top-button').fadeOut();
    }
  });

});

// Dark mode and light mode
document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
document.body.classList.toggle('dark');
});