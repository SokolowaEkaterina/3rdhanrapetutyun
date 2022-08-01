$(document).ready(function() {

    // pop_up 1
    $(".myLinkModal").click(function (event) {
        event.preventDefault();
        $("#myOverlay").fadeIn(297, function () {
            $("#myModal")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#myModal__close, #myOverlay").click(function () {
        $("#myModal").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#myOverlay").fadeOut(297);
        });
    });
    /////////

    // pop_up 2
    $(".my_delit_Modal").click(function (event) {
        event.preventDefault();
        $("#delit_accaunt_Overlay").fadeIn(297, function () {
            $("#delit_accaunt")
                .css("display", "block")
                .animate({ opacity: 1 }, 198);
        });
    });

    $("#delit_accaunt__close, #delit_accaunt_Overlay").click(function () {
        $("#delit_accaunt").animate({ opacity: 0 }, 198, function () {
            $(this).css("display", "none");
            $("#delit_accaunt_Overlay").fadeOut(297);
        });
    });
    /////////



  
  // добавляем класс в пункты с подменю
  $('ul.menu > li').each(function(){
    var list = $(this).children('ul');

    if(list.length > 0){
      list.parent().addClass('submenu');
    };
  });


//   подменю когда произашёл вход в аккаунт
    $('.account_features').click(function(){
        $('.account_features').toggleClass('active');
    });


$('.regulation_title').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $(this).next('.hiden_block').slideUp();
    }else{
        $(this).addClass('active');
        $(this).next('.hiden_block').slideDown();
    }
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
                $('body').removeClass('wrapper_overflow');
            }else{
                $('.menu_btn').addClass('active');
                $('nav').addClass('slid_active');
                $('body').addClass('wrapper_overflow');
            }
        });

        $(window).on('load resize', function() {
            if ($(window).width() > 970) {
                $('body').removeClass('wrapper_overflow');
                
            }else if ($('nav').hasClass('slid_active')){
                $('body').addClass('wrapper_overflow');
            }
        });

    //more
    $('.more').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
    
    // filter button 
    $('.filter_button').click(function(){
        if($('.filter').hasClass('active')){
            $('.filter').removeClass('active');
        }else{
            $('.filter').addClass('active');
        }
    });

    $('.like').click(function(){
        if($('.like').hasClass('liked')){
            $('.like').removeClass('liked');
        }else{
            $('.like').removeClass('liked');
            $(this).addClass('liked');
            // $(this).addClass('liked');
            // $(~'.like').removeClass('liked');
        }
        // $(this).toggleClass('liked');

    });

    $('.main_screen_slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        fade: true,
        cssEase: 'linear'
    });

    $('.statements_block').slick({
      slidesToShow: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      fade: true,
      cssEase: 'linear'
    });

    $('.discussion_slider').slick({
      slidesToShow: 3,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
    //   infinite: true,
      slidesToScroll: 1,
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
            $('.quorum_slider').slick({
            //   centerMode: true,
              arrows: false,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 1000,
            });
          } else {
            $('.quorum_block').slick('unslick');
          }
      });

    
    // var show = true;
    // var countbox = ".benefits__inner";
    // $(window).on("scroll load resize", function () {
    //     if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    //     var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    //     var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    //     var w_height = $(window).height(); // Высота окна браузера
    //     var d_height = $(document).height(); // Высота всего документа
    //     var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    //     if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //         $('.benefits__number').css('opacity', '1');
    //         $('.benefits__number').spincrement({
    //             thousandSeparator: "",
    //             duration: 1200
    //         });
             
    //         show = false;
    //     }
    // });



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

let circle_6 = document.querySelectorAll('.circle_6');
for (let i = 0; i < circle_6.length; i++){
  window.addEventListener('mousemove', function(e) { 
      let x = e.clientX / window.innerWidth;
      let y = e.clientY / window.innerHeight;     
      // circle[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 20 + 'px)';
      circle_6[i].style.transform = 'translate(' + x * 200 + 'px, -' + y * 100 + 'px)';
  }); 
}

let circle_7 = document.querySelectorAll('.circle_7');
for (let i = 0; i < circle_7.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        circle_7[i].style.transform = 'translate(-' + x * 80 + 'px, -' + y * 100 + 'px)';
    });    
}



//     const openPopUp = document.querySelectorAll('pop_up_open');
// const closePopUp = document.querySelectorAll('pop_up_close');
// const popUp = document.querySelectorAll('pop_up');

// openPopUp.addEventListener('click', function(e){
//     e.preventDefault();
//     // popUp.addClass('active');
//     popUp.classList.add('active');
// })

// closePopUp.addEventListener('click' , function() {
//     popUp.classList.remove('active');
// })
