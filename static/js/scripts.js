$(document).ready(function() {

  // добавляем класс в шапку при скролле
	$(window).on('load scroll resize', function(){
		//var height = $(window).height() - 100;
		if($(this).scrollTop() > 10) {
		    $('#header').addClass('scroll');
		} else {
		    $('#header').removeClass('scroll');
		} 
	});
  
  // добавляем класс в пункты с подменю
  $('ul.menu > li').each(function(){
    var list = $(this).children('ul');

    if(list.length > 0){
      list.parent().addClass('submenu');
    };
  });

  // animation
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.5 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});

    // menu button
        $('.menu_btn').click(function(){
            if($('.menu_btn').hasClass('active')){
                $('.menu_btn').removeClass('active');
                $('.navigation').removeClass('slid_active');
            }else{
                $('.menu_btn').addClass('active');
                $('.navigation').addClass('slid_active');
            }
        });

    $('.statements_block').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      fade: true,
      cssEase: 'linear'
    });

    // services block
        $(window).on('load resize', function() {
          if ($(window).width() < 750) {
            $('.services_block').slick({
              centerMode: true,
              arrows: false,
              slidesToShow: 1,
            });
          } else {
            $('.services_block').slick('unslick');
          }
      });

  // category
    //   $(window).on('load resize', function() {
    //     if ($(window).width() < 967) {
    //       $('.category').slick({
    //         // centerMode: true,
    //         arrows: true,
    //         slidesToShow: 3,
    //         responsive: [
    //           {
    //             breakpoint: 355,
    //             settings: {
    //               slidesToShow: 2,
    //               slidesToScroll: 1,
    //             }
    //           }
    //         ]
    //       });
    //     } else {
    //       $('.category').slick('unslick');
    //     }
    // });

    
});

"use strict"

window.onload = function () {
  const parallax = document.querySelector('.parallax');

  if(parallax) {
    const circle = document.querySelector('.circle');

    // const forCircle = 40;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;

      positionX = positionX + (distX * speed);
      positionY = positionY + (distY * speed);

      circle.style.cssText = 'transform: translate(${positionX / 40}%, ${positionY / 40}%);';
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;

      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;

      coordXprocent = coordX / parallaxWidth * 100;
      coordYprocent = coordY / parallaxHeight * 100;
    });
  }
}



let circle = document.querySelectorAll('.circle');
for (let i = 0; i < circle.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        circle[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 20 + 'px)';
    });    
}
