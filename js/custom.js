
$(window).bind("load", function () {
    $(".loader-screen").hide();
}); 




$(document).ready(function () {
    

  $('.banner-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            dots:false,
        },
        600:{
            items:1,
            dots:false,
            
        },
        1000:{
            items:1,
        }
    }
  })

  $('.campaign-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    nav:false,
    dots:false,
  })
  

  


  $('.client-slider').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:false,
    dots:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:3,
        },
        600:{
            items:4,
            
        },
        1000:{
            items:6,
        }
    }
  })


  


    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 10) {
            $(".header-menu").addClass("sticky");
        } else {
            $(".header-menu").removeClass("sticky");
        }
    }); 
   


    
        $(".menu-toggle").click(function () {
            $(".menu").toggleClass("slide-right");
            $(this).find('i').toggleClass('fa-bars fa-times')
        });
        
        
       
        $('.map-container')
        .click(function () {
            $(this).find('iframe').addClass('clicked')
        })
        .mouseleave(function () {
            $(this).find('iframe').removeClass('clicked')
        });
});


$(document).ready(function(){
    $(".load-each").slice(0,8).show();
    $("#load").click(function(e){
      e.preventDefault();
      $(".load-each:hidden").slice(0,4).fadeIn("slow");
      
      if($(".load-each:hidden").length == 0){
         $("#load").fadeOut("slow");
        }
    });
  })