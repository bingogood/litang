$(document).ready(function()
			{
				$('.main li').hover(function(e){
					
					if(!$('.tips').is(":animated")){
										
					$(this).find(".tips").fadeIn("fast");
					}
				
				},function(){
					$('.main li').find(".tips").css("display","none");
				});
				  
				$('li').mousemove(function(e)
					{
					   var top = e.pageY+5;
					   var left = e.pageX+5;
					   $(this).find(".tips").css(
					   	{
						    'top' : top + 'px',
						    'left': left+ 'px'
					  	});
				  	});
				  
		  
	 		});