	$(document).ready(function(){
	
	var curIndex = 0;

	var pageNum = $('.page').length - 1;
	
	touch.on('.main','swipeup',function(){
		if (curIndex<pageNum) {
			$('.page').eq(curIndex).addClass('pageUp');
			$('.page').eq(curIndex).find('.dh').addClass('hide');
			curIndex = curIndex + 1;
			$('.page').eq(curIndex).removeClass('pageDown');  
           
        	$('.page').eq(curIndex).find('.dh').removeClass('hide');
		}
			
		});

	touch.on('.main','swipedown',function(){
		if (curIndex>0) {
			$('.page').eq(curIndex).addClass('pageDown');
			$('.page').eq(curIndex).find('.dh').addClass('hide');
			curIndex = curIndex - 1;
			$('.page').eq(curIndex).removeClass('pageUp');  
           
        	$('.page').eq(curIndex).find('.dh').removeClass('hide');
		}
			
		});
	})



