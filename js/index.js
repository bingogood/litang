      var mySwiper = new Swiper('.swiper-container1', {
      	direction: 'horizontal',
      	loop: true,
      	// 如果需要前进后退按钮
      	nextButton: '.btn_left1',
      	prevButton: '.btn_right1',
      	pagination: '.swiper-pagination',
      	autoplay : 3000,
      	speed:1000,
      })

      var mySwiper1 = new Swiper('.swiper-container2', {
      	direction: 'horizontal',
      	slidesPerView: 'auto',
      	loopedSlides: 5,

      	// 如果需要前进后退按钮
      	nextButton: '.btn_left2',
      	prevButton: '.btn_right2',
      })

      /*点击换图片*/
      $('.index_hxgn4_1').click(function() {

      	var index;
      	if($(this).parent().hasClass('index_hxgn5')) {
      		index = $(this).index();
      		index += 7;
      	} else {
      		index = $(this).index();
      	}
      	if(!$('.index_hxgn6 img').is(":animated")) {
      		$('.index_hxgn6 img').eq(index).siblings().fadeOut();
      		$('.index_hxgn6 img').eq(index).fadeIn();
      	}

      })
      /*数字增长*/
     window.onload = function(){
     	 var tops = $('.index_sz').offset().top -350;
      $(document).scroll(function() {
      	var tt = $(this).scrollTop();
      	
      	var num = 0;
      	var num1 = 0;
      	var num2 = 0;
      	var num3 = 0;
      	if(tt >= tops) {

      		var timer = setInterval(function() {
      			num++;
      			$('.zz1').text(num);
      			if(num >= 20) {
      				clearInterval(timer);
      				$(document).off("scroll");
      				$('.zz1').text("20+");
      			}
      			
      		},30);

      		var timer1 = setInterval(function() {
      			num1 = num1 +15;
      			$('.zz2').text(num1);
      			if(num1 >= 1000) {
      				clearInterval(timer1);
      				$(document).off("scroll");
      				$('.zz2').text("1000+");
      			}
      			
      		}, 10);

      		var timer2 = setInterval(function() {
      			num2 = num2 + 5;
      			$('.zz3').text(num2);
      			if(num2 >= 500) {
      				clearInterval(timer2);
      				$(document).off("scroll");
      				$('.zz3').text("500+");
      			}
      		
      		}, 10);

      		var timer3 = setInterval(function() {
      			num3++;
      			$('.zz4').text(num3);
      			if(num3 >= 8) {
      				clearInterval(timer3);
      				$(document).off("scroll");
      				$('.zz4').text("8");
      			}
      			
      		}, 130);

      	}

      });
     	
     	
     }
