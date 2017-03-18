$('.cj_mainl>div').not(".cj_mainl1").click(function(){
	
	var index = $(this).index() -1;
	$('.cj_jiao').css('display','none');
	$(this).find('.cj_jiao').css('display','block');
	$('.cj_neirong').css("display","none").eq(index).css("display","block");
})

$(document).scroll(function(){
	
	var tt = $(this).scrollTop();
	if (tt>200) {
		$('.cj_neirong img').addClass('dyidew');
	}else{
		$('.cj_neirong img').removeClass('dyidew');
	}
	
})
