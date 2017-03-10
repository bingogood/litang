window.onload = function () {
	
	
	var wid = $(document).width();
	var box = document.querySelectorAll('.body_img');
	if(wid<=700){
		
		$('.body_img').eq(2).addClass('marg-top');
		$('.body_img').removeClass('marg-right');
		$(".body_img:even").addClass('marg-right');
		$('.bottom_img').css('margin-right','0');
		$(".bottom_img:even").addClass('margin-right','4%');

	}else{
		
		$('.body_img').eq(2).removeClass('marg-top');
		$('.body_img').addClass('marg-right');
		$('.box').removeClass('marg-right');
	}
	if(wid<=400){
		
		$('.body_img').eq(1).addClass('marg-top');
	}else{
		
		$('.body_img').eq(1).removeClass('marg-top');
	}

}
window.onresize = function () {
	
	var wid = $(document).width();
	if(wid<=700){
		
		$('.body_img').eq(2).addClass('marg-top');
		$('.body_img').removeClass('marg-right');
		$(".body_img:even").addClass('marg-right');
	}else{
		
		$('.body_img').eq(2).removeClass('marg-top');
		$('.body_img').addClass('marg-right');
		$('.box').removeClass('marg-right');
	}
	if(wid<=400){
		
		$('.body_img').eq(1).addClass('marg-top');
	}else{
		
		$('.body_img').eq(1).removeClass('marg-top');
	}
}
