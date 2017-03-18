
	

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
   
			
	$(".xinfuright ul li:not(.resource)").each(function  (index, el) {
	
		 $(el).attr('xuHao',index);
	
		/*定义一个数组控制每个一级菜单的状态*/
	
		var arr = [0,0,0,0,0,0];
	
		$(".xinfuright ul li:not(.resource)").click(function  () {
			$('.tumb').css({
				visibility:"visible",
				opacity:"0.8"
			});
					

			var i=$(this).attr('xuHao');
			/*状态为1代表已经点击之后的状态*/
			arr[i] = !arr[i];
			
			/*进行初始化*/
			
			for(var s=0;s<arr.length;s++){
				
				if(s==i){
					continue;
					
				}
				arr[s]=0;
			}
			if(arr[i]==1){
				
				if(!$('.xiacd').is(":animated")){
					$('.xiacd>.xl').eq(i).show().siblings().hide();
					$('.xiacd').stop().slideDown();					
					$(".xinfuright ul li:not(.resource)").removeClass('border');
					$(this).addClass('border');
					
				}
				
				
			}else{
				
				$('.xiacd').stop().slideUp();
				$(this).removeClass('border');
				$('.tumb').css({
					visibility:"hidden",
					opacity:"0"
				});
			}

		})
	})
	
	$('.tumb').click(function(){
		$('.xiacd').slideUp();
		$('.tumb').css({
			visibility:"hidden",
			opacity:"0"
		});
		$(".xinfuright ul li:not(.resource)").removeClass('border');
	})
	
	/*添加手机端二级菜单*/
	
	$('.onelist').click(function(event) {
				
				
		if($(this).parent().hasClass('current')){

			$(this).parent().removeClass('current');
			
	
		}else{
	
			
			$(this).parent().addClass('current');
			$(this).parent().siblings().removeClass('current');
		}
	
	});
	
