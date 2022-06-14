$(document).ready(function() {

//   // добавляем класс в шапку при скролле
// 	$(window).on('load scroll resize', function(){
// 		//var height = $(window).height() - 100;
// 		if($(this).scrollTop() > 10) {
// 		    $('#header').addClass('scroll');
// 		} else {
// 		    $('#header').removeClass('scroll');
// 		} 
// 	});
  
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
                $('nav').removeClass('slid_active');
            }else{
                $('.menu_btn').addClass('active');
                $('nav').addClass('slid_active');
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

    $('.discussions_block').slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToScroll: 3,
      responsive: [
            {
                breakpoint: 1000,
                settings: {
                slidesToShow: 2,
            }
        },
            {
                breakpoint: 740,
                settings: {
                slidesToShow: 1,
            }
        }
    ]
    });

    // services block
        $(window).on('load resize', function() {
          if ($(window).width() < 605) {
            $('.quorum_block').slick({
            //   centerMode: true,
              arrows: false,
              slidesToShow: 1,
            });
          } else {
            $('.quorum_block').slick('unslick');
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

    
    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });
             
            show = false;
        }
    });

});

// код для паралакс эфекта 
let circle_1 = document.querySelectorAll('.circle_1');
for (let i = 0; i < circle_1.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        circle_1[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 100 + 'px)';
    });    
}

let circle_2 = document.querySelectorAll('.circle_2');
for (let i = 0; i < circle_2.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        circle_2[i].style.transform = 'translate(' + x * 100 + 'px, -' + y * 100 + 'px)';
    });    
}

let circle_3 = document.querySelectorAll('.circle_3');
for (let i = 0; i < circle_3.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        circle_3[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 100 + 'px)';
    });    
}

let circle_4 = document.querySelectorAll('.circle_4');
for (let i = 0; i < circle_4.length; i++){
  window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      // circle[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 20 + 'px)';
      circle_4[i].style.transform = 'translate(' + x * 50 + 'px, -' + y * 20 + 'px)';
  }); 
}

let circle_5 = document.querySelectorAll('.circle_5');
for (let i = 0; i < circle_5.length; i++){
  window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      // circle[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 20 + 'px)';
      circle_5[i].style.transform = 'translate(-' + x * 150 + 'px, -' + y * 200 + 'px)';
  }); 
}