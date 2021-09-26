import $ from 'jquery'

$(function () {
    
    'use strict';
    
    /*************************************************NAVBAR SECTION**************/
    
    // var disstat = $('.nav-links').css("display"),zs
    var counter = 1;
    
    //FOR RESPONSIVE NAVBAR
    if($(window).width() <= 990){
        
    
        $('.nav .icon-nav , .nav ul li a ').click(function () {
            $('.nav-links').animate({
                "width" : "toggle"
            });
            
    //FOR ANIMATION ICON NAV
            
            counter++;
            if ( counter %2 ==0 ){
                $('.nav .icon-nav .inSecond').css({
                    "transform" : "translateX(-10px)"
                });
            }else{
                $('.nav .icon-nav .inSecond').css({
                    "transform" : "translateX(10px)"
                });
            }
            

        });
    }
    //FOR ANIMATION NAVBAR
    
        $(window).on("scroll",function(){
            if ($(window).scrollTop() >= 30){

                $('.nav').css({
                    "height":"60px",
                    "margin-top": "-8px"
                });
                $('.nav li').css({
                    "margin-top": "-8px"
                });
                $('.nav .logo img').css({
                    "margin-top": "-24px"
                });
                $('.nav .logo i').css({
                    "font-size": "36px"
                });

            }else if ($(window).scrollTop() <= 1){
                $('.nav').css({
                    "height":"80px",
                    "margin-top": "0px"
                });
                $('.nav li').css({
                    "margin-top": "0px"
                });
                $('.nav .logo img').css({
                    "margin-top": "0"
                });
                $('.nav .logo i').css({
                    "font-size": "50px"
                });

            }
            
        });
    
     /*************************************************SCROLL TO ELEMNT**************/
        $('.nav ul li a ').click(function(e){
            e.preventDefault();
            $('html ,body').animate({
                    scrollTop:$('#'+$(this).data('scroll')).offset().top 
                },2000);
            
        });
   /*************************************************SCROLL TO ELEMNT**************/
   /*************************************************ACTIVEING COLOUR NAVBAR**************/
        $(window).on("scroll",function(){
        
        /*$('.block').each(function(){
            if($(window).scrollTop() > $(this).offset().top){
                var blockId = $(this).attr('id');
                
                $('.nav li a [data-scroll=" ' + blockId + ' "]').addClass('active');
            }
        })*/
        
        if ($(window).scrollTop() > $('.header').offset().top  - $(window).height()  ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(1) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.service').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(2) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.more').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(3) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.team').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(4) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.portfolio').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(5) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.pricing').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(6) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.news').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(7) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.vedio').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(8) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.skills').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(9) a ').addClass('active')
        }
        if ($(window).scrollTop() > $('.stay').offset().top  - $(window).height() +600 ) 
        {
            $('.nav li a ').removeClass('active')
            $('.nav li:nth-child(10) a ').addClass('active')
        }
        
        
    })
   /*************************************************ACTIVEING COLOUR NAVBAR**************/

    /*************************************************NAVBAR SECTION**************/
    /*************************************************COUNT TO**************/
        
        $(window).on("scroll",function(){


            if($(window).scrollTop() >= 
               
               $('.count .content .col-box').offset().top - $(window).height() + 100){

                // $('.count .content .col-box .box h1').countTo();
            }

        });
    
    /*************************************************COUNT TO**************/
    /*************************************************PORTFOLIO**************/
    
    $('.portfolio .content .pics .col-box:nth-child(1)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(1) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(1) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
     $('.portfolio .content .pics .col-box:nth-child(2)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(2) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(2) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
    $('.portfolio .content .pics .col-box:nth-child(3)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(3) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(3) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
    $('.portfolio .content .pics .col-box:nth-child(4)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(4) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(4) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
    $('.portfolio .content .pics .col-box:nth-child(5)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(5) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(5) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
    $('.portfolio .content .pics .col-box:nth-child(6)').hover(function(){
        $('.portfolio .content .pics .col-box:nth-child(6) .overlay').css({
            "transform": "scale(1, 1)"
        })
        },function(){
        $('.portfolio .content .pics .col-box:nth-child(6) .overlay').css({
            "transform": "scale(0, 0)"
        })
    });
    
    var count = 0;
    
    $('.mar').click(function() {
        
        $('.moreSlide').slideToggle();
        
        count++;
        if ( count %2 == 0 ){
            
            $('.portfolio .content .pics .box-button i').css({
                "transform" : "rotate(0deg)"
            });
            
        }else{
            
            $('.portfolio .content .pics .box-button i').css({
                "transform" : "rotate(135deg)"
            });
        }
    })
   /*************************************************PORTFOLIO**************/
   /*************************************************CAROSAL**************/
      // Activate Carousel
    //   $("#myCarousel").carousel();

    //   // Enable Carousel Indicators
    //   $(".item1").click(function(){
    //     $("#myCarousel").carousel(0);
    //   });
    //   $(".item2").click(function(){
    //     $("#myCarousel").carousel(1);
    //   });
    //   $(".item3").click(function(){
    //     $("#myCarousel").carousel(2);
    //   });

      // Enable Carousel Controls
      $(".carousel-control-prev").click(function(){
        $("#myCarousel").carousel("prev");
      });
      $(".carousel-control-next").click(function(){
        $("#myCarousel").carousel("next");
      });
   /*************************************************CAROSAL**************/
    
   /*************************************************Check our competitive skills**************/
    $(window).on("scroll",function(){


            if($(window).scrollTop() >= 
               
               $('.skills .content .horpro').offset().top - $(window).height() + 300){

                $('.skills .content .horpro .row-box .col-box:nth-child(6) .box .inner').css({
                    "height" : "97%"
                });
                $('.skills .content .horpro .row-box .col-box:nth-child(5) .box .inner').css({
                    "height" : "54%"
                });
                $('.skills .content .horpro .row-box .col-box:nth-child(4) .box .inner').css({
                    "height" : "67%"
                });
                $('.skills .content .horpro .row-box .col-box:nth-child(3) .box .inner').css({
                    "height" : "90%"
                });
                $('.skills .content .horpro .row-box .col-box:nth-child(2) .box .inner').css({
                    "height" : "35%"
                });
                $('.skills .content .horpro .row-box .col-box:nth-child(1) .box .inner').css({
                    "height" : "79%"
                });
            }else{
                $('.skills .content .horpro .row-box .col-box .box .inner').css({
                    "height" : "0%"
                });
            }

        });
    
    $(window).on("scroll",function(){


            if($(window).scrollTop() >= 
               
               $('.skills .content .horpro .alt .box').offset().top - $(window).height() + 300){

                $('.skills .content .horpro .alt .box:nth-child(6) .inner').css({
                    "width" : "97%"
                });
                $('.skills .content .horpro .alt .box:nth-child(5) .inner').css({
                    "width" : "54%"
                });
                $('.skills .content .horpro .alt .box:nth-child(4) .inner').css({
                    "width" : "67%"
                });
                $('.skills .content .horpro .alt .box:nth-child(3) .inner').css({
                    "width" : "90%"
                });
                $('.skills .content .horpro .alt .box:nth-child(2) .inner').css({
                    "width" : "35%"
                });
                $('.skills .content .horpro .alt .box:nth-child(1) .inner').css({
                    "width" : "79%"
                });
            }else{
                $('.skills .content .horpro .alt .box .inner').css({
                    "width" : "0%"
                });
            }

        });
   /*************************************************Check our competitive skills**************/
    
   /*************************************************SCROLL_TO_TOP**************/
    $(window).on("scroll",function(){
        if($(window).scrollTop() > 900){
            $('.scrollToTop').fadeIn(1000)
        }else{
            $('.scrollToTop').fadeOut(1000)
        }
    })
    $('.scrollToTop').click(function(){
        $('html,body').animate({
            scrollTop : '0'
        },2000)
    })
   /*************************************************SCROLL_TO_TOP**************/
    
   /*************************************************LOADING**************/
    $(window).on("load",function(){
        
        $('.loading .overlay .sk-cube-grid').fadeOut(1000,function(){
            $(this).parent().fadeOut(1500)
        })
    })
   /*************************************************LOADING**************/
    
  
    
    
    
    
    
    
    
});