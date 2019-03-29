///////登录注册/////////
$(function(){
	//主页登录注册按钮
	var btnLogin = $("#login");
	var btnRegister = $("#reg");
	var modalWrap = $(".modal-wrap");
	var loginReg = $(".login-reg");
	///////////以下为自定义的模态窗口///////////////
	btnLogin.click(function() {
		modalWrap.show();
		//默认登录窗口展示
		$(".login-btn").css("color", "red");
		$(".reg-btn").css("color", "#555");
		$(".login").show();
		$(".reg").hide();
	});
	btnRegister.click(function() {
		modalWrap.show();
		//单击注册时,重置样式
		$(".reg-btn").css("color", "red");
		$(".login-btn").css("color", "#555");
		$(".reg").show();
		$(".login").hide();
	});
	//要运用事件代理实现在子元素外单击关闭的效果
	modalWrap.click(function(ev){
		var t = $(event.target);
		//console.log(t.attr("class"));
		//判断是否是最外层父元素的类名即可搞定
		if(t.hasClass("modal-wrap")){
			modalWrap.hide();
		}	
	});
	
	//模态窗口,注意html元素的属性有两种,在标签中的属性,在样式中的属性
	//attr("标签上的属性")
	var loginBtn = $(".login-btn");
	var regBtn = $(".reg-btn");
	//登录界面,默认
	var login = $(".login-reg>.login");
	//注册界面
	var reg = $(".login-reg>.reg");
	loginBtn.css("color", "red");
	//登录,切换按钮则同时切换不同方式
	loginBtn.click(function() {
		$(this).css("color", "red");
		regBtn.css("color", "#555");
		login.show();
		reg.hide();
	});
	loginBtn.css("color", "red");
	//注册,切换按钮则同时切换不同方式
	regBtn.click(function() {
		$(this).css("color", "red");
		loginBtn.css("color", "#555");
		reg.show();
		login.hide();
	});
	//关闭按钮
	var close = $(".wrap-btn>.close");
	close.click(function(){
		modalWrap.hide();
	});
	//其他登录方式
	var qqImg = $(".qq>img");
	var wxImg = $(".wx>img");
	qqImg.mouseover(function() {
		//此处不要用this,因为切换到注册时图片会保留
		qqImg.attr("src", "/icon/qq-light.png");
	});
	qqImg.mouseleave(function() {
		qqImg.attr("src", "/icon/qq-grey.png");
	});
	wxImg.mouseover(function() {
		//此处不要用this,因为切换到注册时图片会保留
		wxImg.attr("src", "/icon/wx-light.png");
	});
	wxImg.mouseleave(function() {
		wxImg.attr("src", "/icon/wx-grey.png");
	});
})
/////////以下为其它样式//////////////
var w = window;
$(w).scroll(function() {
	if(w.pageYOffset > 300) {
		$("#top_search").slideDown(200);
	} else {
		$("#top_search").slideUp(200);
	}
});

/////////js的方式找元素////////
var main = document.querySelector('.top>.main');
var btnClose = document.querySelector('.top>.main>span');
//var top
btnClose.onclick = function() {
	//将元素隐藏
	main.style.height = '0px';
	//this代表当前对象
	//btnClose.style.display='none';
	this.style.display = 'none';
}
////实现单击下拉效果/////
//使用事件代理找到当前对象,再运用js的包含函数contains判断对象中是否包含某些元素即可搞定所要的效果
var city = document.querySelector(".left>.city");
var cityMenu = document.querySelector(".left>.city>.menu");
///////找到body元素实现单击事件,此处要玩事件代理/////
var bd = document.body;
bd.onclick = function(ev) { //实现不同的点击效果
	//通过事件代理对象target找到当前对象oo
	var oo = ev.target || ev.srcElement || event.target;
	//通过事件代理对象找到类名,此处不需要这样了;用下面更简单的判断,方便准确
	//var str = tar.className.toString();
	if(city.contains(oo)) { //通过类名判断不方便了!/zqy/.test(str)
		city.style.backgroundColor = "white";
		//显示边框有颜色,防止乱动
		city.style.borderLeft = "1px solid grey";
		city.style.borderRight = "1px solid grey";
		cityMenu.style.display = 'block';
	} else {
		cityMenu.style.display = 'none';
		city.style.backgroundColor = "#F4F4F4";
		//先设置边框颜色透明,防止乱动
		city.style.borderLeft = "1px solid transparent";
		city.style.borderRight = "1px solid transparent";
	}
}
/////////////实现轮播图效果1//////////////
var jhMain = document.querySelector(".jiahua");
var ad = ["img/ad1.jpg", "img/ad2.jpg", "img/ad3.jpg", "img/ad4.jpg", "img/ad5.jpg", "img/ad6.jpg", "img/ad7.jpg", "img/ad8.jpg", "img/ad9.jpg"];
//小雨滴效果
var rain = document.querySelectorAll("#rain1>button");
jhMain.style.background = "url(" + ad[0] + ") no-repeat";
jhMain.style.backgroundSize = 'cover';
rain[0].style.backgroundColor = 'red';
var adIndex = 0;

function dispAd() {
	adIndex++;
	if(adIndex > ad.length - 1) {
		adIndex = 0;
	}
	jhMain.style.background = "url(" + ad[adIndex] + ") no-repeat";
	jhMain.style.backgroundSize = 'cover';
	//实现小雨滴轮播
	for(var i = 0; i < rain.length; i++) {
		rain[i].style.backgroundColor = '#ccc';
	}
	rain[adIndex].style.backgroundColor = 'red';
}
var sitfg = setInterval(dispAd, 2000);
//最好找到轮播中间的div添加事件
var jhmid = document.querySelector(".jiahua>.mid");
jhmid.onmouseover = function() {
	//停止定时器
	clearInterval(sitfg);
}
jhmid.onmouseleave = function() {
	sitfg = setInterval(dispAd, 2000);
}
///实现注册
$(".reg-ok").ajax({
	type:"post",
	url:"reg",
	data:{"username":$("#username").val(),"password":$("#checkcode").val()},
	success:function(data){
		
	}
	
	
	
});

