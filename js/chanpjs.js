$('.cj_mainl>div').not(".cj_mainl1").click(function(){
	
	var index = $(this).index() -1;
	$('.cj_jiao').css('display','none');
	$(this).find('.cj_jiao').css('display','block');
	$('.cj_neirong').css("display","none").eq(index).css("display","block");
})
