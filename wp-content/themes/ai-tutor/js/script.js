jQuery(document).ready(function(){
  var owl = jQuery('.team-section .owl-carousel');
    owl.owlCarousel({
    margin: 20,
    nav: true,
    autoplay: true,
    lazyLoad: true,
    autoplayTimeout: 3000,
    loop: true,
    dots: false,
    navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    },
    autoplayHoverPause: true,
    mouseDrag: true
  });
});