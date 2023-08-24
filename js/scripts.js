/*====================================*
    01. VIDEO JS
*=====================================*/ 

    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });

/*====================================*
    02.OWL-CAROUSEL JS
*=====================================*/ 


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        dots:false,
        responsive:{
            0:{
                items:2
            },

            600:{
                items:3
            },
            900:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

/*====================================*
    03. SWIPER SLIDER JS
*=====================================*/ 

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

/*====================================*
    04. SCROLLUP JS
*=====================================*/ 

   $(document).ready(function(){ 
        $(window).scroll(function(){ 
            if ($(this).scrollTop() > 100) { 
                $('.scrollup').fadeIn(); 
            } else { 
                $('.scrollup').fadeOut(); 
            } 
        }); 
        $('.scrollup').click(function(){ 
            $("html, body").animate({ scrollTop: 0 }, 1700); 
            return false; 
        }); 
    });

// ===============================================

      