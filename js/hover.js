// require('[js/jquery-1.8.3.js]',function(){
	$("#index_nav li").mouseover(function(event) {
			$('#index_nav .index_nav_hover').css('display','block');
	});
	$(".index_nav_hover").mouseleave(function(event) {
			$('.index_nav_hover').css({'display':'none'});
	});
//  });


$('.list_01').mouseover(function(event) {
	var iIndex = $(this).index();
	$(this).css('border','2px solid #d8d4d5');
	$('.xiang').eq(iIndex).css('display','block');
	$('.collect').eq(iIndex).css('display','block');	
	$('.last').eq(iIndex).css('display','block');	
});
$('.list_01').mouseleave(function(event) {
	$('.list_01').css('border','2px solid #fff');
	$('.list_01 .xiang').css('display','none');
	$('.list_01 .collect').css('display','none');	
	$('.list_01 .last').css('display','none');	
});


// /、购物车里的全选和反选
jQuery.fn.extend({
	//既做全选，也做全不选
	checkAll:function(isChecked){
		this.each(function(){
			this.checked = isChecked;
		});
	},
	unChecked:function(){
		this.each(function(){
			this.checked = !this.checked;
		});
	}
	
});
$(function(){
	$("#btnall").click(function(){
		$("td :checkbox").checkAll($("#btnall").attr("checked"));	
	});
	
	$("#btn").click(function(){
		$("td :checkbox").unChecked();	
	});
});


//购物车里点击删除second_delect
$('.second_delect').click(function(){
	$('.first_tr').css('display','none');
	var oa=$('.product_add').html(0);
	var ob=$('.pay').html(0);
});

$('.kong').click(function(){
	$('.first_tr').css('display','none');
	var oa=$('.product_add').html(0);
	var ob=$('.pay').html(0);
});


//订单页的我的珠宝箱
$('.zhubaoxaign').click(function(){
	var oadd = $('.zhu_add').innerHTML;
	oadd  += 1;
});

//每个页面中的登录注册
$('.index_top_li').click(function(){
	location.href='login.html';
});
$('.index_top_2').click(function(){
	location.href='enroll.html';
});
$("ValTop").bind('click',function(){
	var s=$('add_p').html();
	s++;
	$('add_p').html()=s;
})


//点击首页跳转首页
$('.first-page').click(function(){
	location.href='index.html';
});

//点击图片跳转至列表页
$('.first-pic').click(function(){
	location.href='list.html';
});
