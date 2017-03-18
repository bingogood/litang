      var mySwiper = new Swiper('.swiper-container1', {
      	direction: 'horizontal',
      	loop: true,
      	// 如果需要前进后退按钮
      	nextButton: '.btn_left1',
      	prevButton: '.btn_right1',
      	pagination: '.swiper-pagination',
      	autoplay: 3000,
      	speed: 1000,
      })

      var mySwiper1 = new Swiper('.swiper-container2', {
      	direction: 'horizontal',
      	slidesPerView: 'auto',
      	loopedSlides: 5,
      	loop: true,
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

      $('.index_hxgn4_1 img').hover(function() {
      	$(this).next().css('color', '#D70000');
      }, function() {
      	$('.index_hxgn4_2').css('color', '#C0C0C0');
      })

      var arrr = ['img/index/s-163.png', 'img/index/s-166.png', 'img/index/s-165.png', 'img/index/s-160.png', 'img/index/ss164.png', 'img/index/ss-167.png']

      var arrr1 = ['img/index/s-163r.png', 'img/index/s-166r.png', 'img/index/s-165r.png', 'img/index/s-160r.png', 'img/index/ss164r.png', 'img/index/ss-167r.png']

      var arrr2 = ['img/index/sss.png', 'img/index/ssss-2.png', 'img/index/s-157.png', 'img/index/s.png', 'img/index/s-159.png', 'img/index/efe.png', 'img/index/s-168.png']
      var arrr3 = ['img/index/sssr.png', 'img/index/ssss-2r.png', 'img/index/s-157r.png', 'img/index/sr.png', 'img/index/s-159r.png', 'img/index/efer.png', 'img/index/s-168r.png']

      $('.youbiande li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arrr1[index])

      }, function() {

      	var index = $(this).index();
      	$(this).find('img').attr('src', arrr[index])

      })

      $('.zuobiande li').hover(function() {

      	var index = $(this).index();
      	$(this).find('img').attr('src', arrr3[index]);

      }, function() {

      	var index = $(this).index();
      	$(this).find('img').attr('src', arrr2[index])

      })

      /*数字增长*/
      window.onload = function() {
      	var tops = $('.index_sz').offset().top - 350;

      	$(document).scroll(function() {
      		var tt = $(this).scrollTop();

      		var num = 0;
      		var num1 = 0;
      		var num2 = 0;
      		var num3 = 0;

      		//数字增长
      		if(tt >= tops) {

      			var timer = setInterval(function() {
      				num++;
      				$('.zz1').text(num);
      				if(num >= 20) {
      					clearInterval(timer);
      					$(document).off("scroll");
      					$('.zz1').text("20+");
      				}

      			}, 30);

      			var timer1 = setInterval(function() {
      				num1 = num1 + 15;
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

      //手机端移动菜单
      var flag = true;
      $(".btn").click(function() {

      	if(flag) {
      		$(".btn").addClass("open");
      		$(".appmenu").css("display", "block");
      		flag = false;
      	} else {
      		$(".btn").removeClass("open");
      		$(".appmenu").css("display", "none");

      		flag = true;
      	}
      })

      $(".xinfuright ul li:not(.resource)").each(function(index, el) {

      	$(el).attr('xuHao', index);

      	/*定义一个数组控制每个一级菜单的状态*/

      	var arr = [0, 0, 0, 0, 0, 0];

      	$(".xinfuright ul li:not(.resource)").click(function() {
      		$('.tumb').css({
      			visibility: "visible",
      			opacity: "0.8"
      		});
      		$('.xinfukuaixian').css('background', '#474747')

      		var i = $(this).attr('xuHao');
      		/*状态为1代表已经点击之后的状态*/
      		arr[i] = !arr[i];

      		/*进行初始化*/

      		for(var s = 0; s < arr.length; s++) {

      			if(s == i) {
      				continue;

      			}
      			arr[s] = 0;
      		}
      		if(arr[i] == 1) {

      			if(!$('.xiacd').is(":animated")) {
      				$('.xiacd>.xl').eq(i).show().siblings().hide();
      				$('.xiacd').stop().slideDown();

      				$(".xinfuright ul li:not(.resource)").removeClass('border');
      				$(this).addClass('border');

      			}

      		} else {

      			$('.xiacd').stop().slideUp();
      			$(this).removeClass('border');
      			$('.tumb').css({
      				visibility: "hidden",
      				opacity: "0"
      			});
      			$('.xinfukuaixian').css('background', 'rgba(0,0,0,.3)')
      		}

      	})
      })

      $('.tumb').click(function() {
      	$('.xiacd').slideUp();
      	$('.tumb').css({
      		visibility: "hidden",
      		opacity: "0"
      	});
      	$(".xinfuright ul li:not(.resource)").removeClass('border');
      })

      /*添加手机端二级菜单*/

      $('.onelist').click(function(event) {

      	if($(this).parent().hasClass('current')) {

      		$(this).parent().removeClass('current');

      	} else {

      		$(this).parent().addClass('current');
      		$(this).parent().siblings().removeClass('current');
      	}

      });
      /*fwefewf*/
      setInterval(function() {
      	var topss = $(document).scrollTop();
      	if(topss > 100) {
      		$('.xinfukuaixian').css('background', '#474747');
      	} else {
      		$('.xinfukuaixian').css('background', 'rgba(0,0,0,.3)')
      	}

      }, 100)

      //移动
      setInterval(function() {
      	var top4 = $('.swiper-container2').offset().top;
      	var topsss = $(document).scrollTop() + 600;

      	if(topsss > top4) {
      		$('.shang2').addClass('shang1');
      		$('.xia2').addClass('xia1');
      	} else {
      		$('.shang2').removeClass('shang1');
      		$('.xia2').removeClass('xia1');

      	}

      }, 100)

      //第二块

      setInterval(function() {
      	var top3 = $('.index_xxfw4').offset().top;
      	var topss = $(document).scrollTop() + 600;

      	if(topss > top3) {
      		$('.shang').addClass('shang1');
      		$('.xia').addClass('xia1');
      	} else {
      		$('.shang').removeClass('shang1');
      		$('.xia').removeClass('xia1');

      	}

      }, 100)

      /*nage logo*/

      var arr1 = ['img/index/a1.jpg', 'img/index/a2.jpg', 'img/index/a3.jpg', 'img/index/a4.jpg', 'img/index/a5.jpg', 'img/index/a6.jpg', 'img/index/a7.jpg', 'img/index/a8.jpg']
      var arr2 = ['img/index/a9.jpg', 'img/index/a10.jpg', 'img/index/a11.jpg', 'img/index/a12.jpg', 'img/index/a13.jpg', 'img/index/a14.jpg', 'img/index/a15.jpg', 'img/index/a16.jpg']
      var arr3 = ['img/index/a17.jpg', 'img/index/a18.jpg', 'img/index/a19.png', 'img/index/a20.jpg', 'img/index/a21.jpg', 'img/index/a22.jpg', 'img/index/a23.jpg', 'img/index/a24.jpg']
      var arr4 = ['img/index/a25.jpg', 'img/index/a26.jpg', 'img/index/a27.jpg', 'img/index/a28.jpg', 'img/index/a29.jpg', 'img/index/a30.jpg', 'img/index/a31.jpg', 'img/index/a32.jpg']
      var arr5 = ['img/index/a33.jpg', 'img/index/a34.jpg', 'img/index/a35.jpg', 'img/index/a36.jpg', 'img/index/a37.jpg', 'img/index/a38.jpg', 'img/index/a39.jpg', 'img/index/a40.jpg']

      var arr6 = ['img/index/HOME_V23_03.jpg', 'img/index/HOME_V23_05.jpg', 'img/index/HOME_V23_07.jpg', 'img/index/HOME_V23_09.jpg', 'img/index/HOME_V23_11.jpg', 'img/index/HOME_V23_13.jpg', 'img/index/HOME_V23_15.jpg',
      	'img/index/HOME_V23_17.jpg'
      ]
      var arr7 = ['img/index/HOME_V23_27.jpg', 'img/index/HOME_V23_28.jpg', 'img/index/HOME_V23_29.jpg', 'img/index/HOME_V23_30.jpg', 'img/index/HOME_V23_31.jpg', 'img/index/HOME_V23_32.jpg', 'img/index/HOME_V23_33.jpg',
      	'img/index/HOME_V23_34.jpg'
      ]
      var arr8 = ['img/index/HOME_V23_43.jpg', 'img/index/HOME_V23_44.jpg', 'img/index/HOME_V23_45.jpg', 'img/index/HOME_V23_46.jpg', 'img/index/HOME_V23_47.jpg', 'img/index/HOME_V23_48.jpg', 'img/index/HOME_V23_49.jpg',
      	'img/index/HOME_V23_50.jpg'
      ]
      var arr9 = ['img/index/HOME_V23_59.jpg', 'img/index/HOME_V23_60.jpg', 'img/index/HOME_V23_61.jpg', 'img/index/HOME_V23_62.jpg', 'img/index/HOME_V23_63.jpg', 'img/index/HOME_V23_64.jpg', 'img/index/HOME_V23_65.jpg',
      	'img/index/HOME_V23_66.jpg'
      ]
      var arr10 = ['img/index/HOME_V23_75.jpg', 'img/index/HOME_V23_76.jpg', 'img/index/HOME_V23_77.jpg', 'img/index/HOME_V23_78.jpg', 'img/index/HOME_V23_79.jpg', 'img/index/HOME_V23_80.jpg', 'img/index/HOME_V23_81.jpg',
      	'img/index/HOME_V23_menu_44_05.jpg'
      ]

      $('.diyi li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr1[index]);
      }, function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr6[index]);
      })

      $('.dier li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr2[index]);
      }, function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr7[index]);
      })

      $('.disan li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr3[index]);
      }, function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr8[index]);
      })

      $('.dsi li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr4[index]);
      }, function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr9[index]);
      })

      $('.dwu li').hover(function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr5[index]);
      }, function() {
      	var index = $(this).index();
      	$(this).find('img').attr('src', arr10[index]);
      })

      /*换图片*/