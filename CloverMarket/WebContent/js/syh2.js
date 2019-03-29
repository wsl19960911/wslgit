/////////jquery方式来设置前端动态效果/////
var gcimg = ['pngj/guochan1.jpg', 'pngj/guochan2.jpg', 'pngj/guochan3.jpg']
//二维数组
var gcinfo = [
	['1号粮仓 民生汇聚', '精选粮油 超级秒杀'],
	['1元秒杀', '你的王者奥'],
	['来两份', '满88减50']
];
var gcindex = 0;
//上一个
$(".goods9_left_four>.left_arrow").click(function() {
	gcindex--;
	changeImg();
	if(gcindex < 0) {
		gcindex = gcimg.length - 1;
	}
	$('.goods9_lunbo>.lunbo_title1').html(gcinfo[gcindex][0]);
	$('.goods9_lunbo>.lunbo_title2').html(gcinfo[gcindex][1]);
	//淡出淡入
	$('.goods9_lunbo>.lunbo_img').fadeOut(function() {
		$('.goods9_lunbo>.lunbo_img').attr("src", gcimg[gcindex]);
		//60毫秒的淡入操作
		$(this).fadeIn(60);
	});
	//改变商品序号
	$('.goods9_left_num1').html(gcindex + 1);
});
//下一个
$(".goods9_left_four>.right_arrow").click(function() {
	nextArrow();
})
/////////实现轮播图交换的效果///////////////
function changeImg() {
	//顶部图层
	$('.goods9_lunbo').css({
		'z-index': '1',
		'transform': 'scale(0.9)'
	}).animate({
		left: 5,
		bottom: 10
	}, 100, function() {
		$(this).css({
			'z-index': '3',
			'transform': 'scale(1)'
		}).animate({
			left: 0,
			bottom: 0
		}, 300);
	});
	//底部图层
	$('.goods9_lunbo2').css({
		'z-index': '3',
		'transform': 'scale(1.1)'
	}).animate({
		left: 30,
		top: 60
	}, 150, function() {
		$(this).css({
			'z-index': '1',
			'transform': 'scale(1)'
		}).animate({
			left: 20,
			top: 10
		}, 200);
	});
}
///////写一个函实现下一个轮播/////////
function nextArrow() {
	changeImg();
	gcindex++;
	if(gcindex > gcimg.length - 1) {
		gcindex = 0;
	}
	$('.goods9_lunbo>.lunbo_title1').html(gcinfo[gcindex][0]);
	$('.goods9_lunbo>.lunbo_title2').html(gcinfo[gcindex][1]);
	//淡出淡入
	$('.goods9_lunbo>.lunbo_img').fadeOut(function() {
		$('.goods9_lunbo>.lunbo_img').attr("src", gcimg[gcindex]);
		$(this).fadeIn(60);
	});
	//改变商品序号
	$('.goods9_left_num1').html(gcindex + 1);
}
////////自动轮播/////////
//自动轮播标识
var sitfg = setInterval(nextArrow, 2000);
//暂停/重新轮播
$('.goods9_lunbo').mouseover(function() {
	clearInterval(sitfg);
});
$('.goods9_lunbo').mouseleave(function() {
	sitfg = setInterval(nextArrow, 2000);
});
$('.left_arrow').mouseover(function() {
	clearInterval(sitfg);
});
$('.left_arrow').mouseleave(function() {
	sitfg = setInterval(nextArrow, 2000);
});
$('.right_arrow').mouseover(function() {
	clearInterval(sitfg);
});
$('.right_arrow').mouseleave(function() {
	sitfg = setInterval(nextArrow, 2000);
});
////////////左边浮动导航栏的操作///////////////
//窗口滚动事件
$(window).scroll(function() {
    if(window.pageYOffset>500){
    	$('.jump').fadeIn();
    	$('.jump>a').css({'background':'white','color':'black'});
    	if(window.pageYOffset>500&&window.pageYOffset<1200){
    		$('.jump>a').eq(0).css({'background':'#ED363A','color':'white'});
    	}else if(window.pageYOffset>=1200&&window.pageYOffset<1800){
    		$('.jump>a').eq(1).css({'background':'#BE6E3B','color':'white'});
    	}else if(window.pageYOffset>=1800&&window.pageYOffset<2300){
    		$('.jump>a').eq(2).css({'background':'#F8A463','color':'white'});
    	}else if(window.pageYOffset>=2300){
    		$('.jump>a').eq(3).css({'background':'#6900B3','color':'white'});
    	}
    }else{
    	$('.jump').fadeOut();
    }
});
$('.jump>a').click(function() {
	/////在jquery中通过index()函数能够获取对象的索引号
	var cc = ['#ED363A', '#BE6E3B', '#F8A463', '#6900B3'];
	var temp = $(this).index();
	//先将所有元素初始化样式
	$('.jump>a').css({
		'background': 'white',
		'color': 'black'
	});
	//再将当前元素重设样式
	$(this).css({
		'background': cc[temp],
		'color': 'white'
	});
});
///////实现右边导航的特效/////
$('.nav_right_one').mouseover(function(){
	$('.one_center').show().animate({width:'100px',left:'-100px'},100);
});
$('.nav_right_one').mouseleave(function(){
	$('.one_center').animate({width:'0px',left:'0px'},100,function(){
		$('.one_center').hide();
	});
});

