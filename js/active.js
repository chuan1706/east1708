// $('.active_content_list').children('.list_01').mouseover(function(event) {
// 	var iIndex = $(this).index();
// 	$(this).css('border','2px solid #d8d4d5');
// 	$('.xiang').eq(iIndex-1).css('display','block');
// 	$('.collect').eq(iIndex-1).css('display','block');	
// 	$('.last').eq(iIndex).css('display','block');	/
// });


$('.active_content_list .list_01').mouseover(function(event) {
	var iIndex = $(this).index();
	$(this).css('border','2px solid #d8d4d5');
	$('.xiang').eq(iIndex-1).css('display','block');
	$('.collect').eq(iIndex-1).css('display','block');	
	$('.last').eq(iIndex-1).css('display','block');	
});
$('.active_content_list .list_01').mouseleave(function(event) {
	$('.list_01').css('border','2px solid #fff');
	$('.list_01 .xiang').css('display','none');
	$('.list_01 .collect').css('display','none');	
	$('.list_01 .last').css('display','none');	
});