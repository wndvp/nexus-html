/* ---------------------------------------------
 common scripts
 --------------------------------------------- */


(function ($) {
    'use strict';

 
// Counter up 
$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  //Counter       

  // // Portfolio  
  //   $('.item-slider-one').slick({
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         centerMode: true,
  //         infinite: true,
  //         dots:false,
  //         autoplay: true,
  //         autoplaySpeed: 2000,
  //         arrows: false,
  //         responsive: [{
            
  //             breakpoint: 1024,
  //             settings: {
  //               slidesToShow: 3
  //             }

  //           }, 
  //           {
  //             breakpoint: 768,
  //             settings: {
  //               arrows: false,
  //               centerMode: true,
  //               slidesToShow: 1,
  //               slidesToScroll: 1
  //             }
  //           },
              
            
  //           {
  //             breakpoint: 480,
  //             settings: {
  //               arrows: false,
  //               centerMode: true,
  //               slidesToShow: 1,
  //                 slidesToScroll: 1
  //             }
  //           },
  //           {

  //             breakpoint: 300,
  //             settings: 'unslick'
  //           }
  //         ]
  //     });

//  //Main Slider
  
//  $('.hero-slider').slick({
//         autoplay: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         arrows: false,
//         dots: true,
//         autoplaySpeed: 6000,
//         pauseOnFocus: false,
//         pauseOnHover: false
//     });
//     $('.hero-slider').slickAnimation();




  // Init Magnific Popup
  $('.gallery-item').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-with-zoom',
    navigateByImgClick: true,
    arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
    tPrev: 'Previous (Left arrow key)',
    tNext: 'Next (Right arrow key)',
    tCounter: '<span class="mfp-counter">%curr% of %total%</span>',
    zoom: {
      enabled: true,
      duration: 300,
      easing: 'ease-in-out',
      opener: function (openerElement) {
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  });


})(jQuery);