$(function(){
	$('.shiyong').click(function(){
				var otop = $('header').height();
				console.log(otop)
				var tops = $('.biaodan').offset().top-otop;
				$('body,html').animate({
					
					scrollTop:tops,
				},0)
			})
})
