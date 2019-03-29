//找元素
var tt = document.querySelectorAll('.content>.goods1>.left>p>button');
//定义一个日期对象(2017,6,21,11,0,0)
var temp = new Date(2017, 7, 21, 11, 0, 0);

function restTime() {
	//获取当前的日期
	var dd = new Date();
	//计算出剩余时间,此处为所有剩余的秒数
	var rt = (temp.getTime() - dd.getTime()) / 1000;
	//将剩余的所有秒数分解出为对应的小时数/分钟数/秒数
	var hh = Math.floor(rt / 3600); //此处取整得到小时数
	//具体分析4832秒得出剩出分钟数
	var mm = Math.floor((rt % 3600) / 60);
	//获取剩出的秒数
	var ss = Math.floor((rt % 3600) % 60);
	//转换为两位数显示
	hh = hh >= 10 ? hh : '0' + hh;
	mm = mm >= 10 ? mm : '0' + mm;
	ss = ss >= 10 ? ss : '0' + ss;
	//分别输出剩余多少小时/分钟/秒
	tt[0].innerHTML = hh;
	tt[1].innerHTML = mm;
	tt[2].innerHTML = ss;
}
//restTime();
setInterval(restTime, 1000);
////goods1实现多图无缝轮播效果////
var xx = ['img/g1.jpg', 'img/g2.jpg', 'img/g3.jpg', 'img/g4.jpg', 'img/g5.jpg', 'img/g6.jpg', 'img/g7.jpg', 'img/g8.jpg', 'img/g9.jpg', 'img/g10.jpg'];
var goods = [
	['服饰鞋包', 168],
	['手机数码', 688],
	['家居百货', 380],
	['美容护理', 68],
	['活色生鲜', 118],
	['国产食品', 76],
	['进口食品', 86],
	['酒水饮料', 88],
	['厨卫清洁', 56],
	['母婴护理', 116]
];
//此元素有动画效果
var gds1Div = document.querySelector('.content>.goods1>.right>div');

function initGds1() {
	for(var i = 0; i < xx.length; i++) {
		var dv = document.createElement('div');
		dv.style.width = '322px';
		dv.style.padding = '0px 4px';
		dv.style.height = '150px';
		//想办法口串接多个元素,可以到css中设置样式
		dv.innerHTML = "<span>"+"<p>" + goods[i][0] + "</p>" + "<p>"+"&yen;" + goods[i][1] + "</p>"+"</span>";
		//dv.innerHTML+="<p>"+"&yen;"+goods[0][1]+"</p>";
		//dv.style.backgroundColor = 'grey';
		var img = document.createElement('img');
		img.src = xx[i];
		dv.appendChild(img);
		gds1Div.appendChild(dv);
	} //for
}
//加载所有轮播的商品
initGds1();
//实现手动位移式轮播效果
var btn = document.querySelectorAll(".content>.goods1>.right>button");
//存储轮播的次数,应该是大于等0
var fg = 0;
btn[0].onclick = function() {
	lunboLeft();
}
btn[1].onclick = function() {
	lunboRight();
}
//实现左轮播
function lunboLeft() {
	--fg;
	if(fg <= 0) {
		fg = 0;
	}
	dispArrow();//方法调用
	gds1Div.style.left = -fg * 990 + 'px';
}
//实现右轮播
function lunboRight() {
	++fg;
	if(fg >= 3) {
		fg = 3;
		}
	dispArrow();//方法调用
	gds1Div.style.left = -fg * 990 + 'px';
}
//隐藏按钮
var dv = document.querySelector(".content>.goods1>.right");
dv.onmousemove = function() {
	dispArrow();//方法调用
}
//多种情况显示按钮箭头
function dispArrow(){
	if(fg <= 0) {
		btn[0].style.display = 'none';
		btn[1].style.display = 'inline-block';
	} else if(fg > 0 && fg < 3) {
		btn[0].style.display = 'inline-block';
		btn[1].style.display = 'inline-block';
	} else {
		btn[0].style.display = 'inline-block';
		btn[1].style.display = 'none';
	}
}
dv.onmouseleave = function() {
	btn[0].style.display = 'none';
	btn[1].style.display = 'none';
}
////////////goods4Lunbo多图无缝轮播图/////////////////
var lunboMain = document.querySelector(".goods4Lunbo>.lunbo_goods>.lunbo_main");
var goods = ['jpeg/sh1.jpg', 'jpeg/sh2.jpg', 'jpeg/sh3.jpg', 'jpeg/sh4.jpg', 'jpeg/sh5.jpg', 'jpeg/sh6.jpg', 'jpeg/sh7.jpg', 'jpeg/sh8.jpg', 'jpeg/sh9.jpg', 'jpeg/sh10.jpg', 'jpeg/sh11.jpg', 'jpeg/sh12.jpg', 'jpeg/sh13.jpg', 'jpeg/sh14.jpg', 'jpeg/sh15.jpg', 'jpeg/sh16.jpg', 'jpeg/sh17.jpg', 'jpeg/sh18.jpg'];
var gdsName = ['零食', '牙膏', '洗发液', '保健', '果汁', '家纺', '毛巾', '相机', '玩具', '手机', '启赋', '百科书', '吉它', '情侣装', '水果', '电动牙刷', '电池', '色油'];
var gdsPrice = ['满20减10', '满36减15', '满50减20', '满68减30', '满38减18', '满100减28', '满30减15', '满300减58', '满36减16', '满600减58', '满88减28', '满38减18', '满200减36', '满118减36', '满28减8', '满18减6', '满20减8', '满58减18'];
var btnLeft = document.querySelector('.goods4Lunbo>.lunbo_goods>.btn_left');
var btnRight = document.querySelector('.goods4Lunbo>.lunbo_goods>.btn_right');
//找到小雨滴
var rains = document.querySelectorAll('.goods4Lunbo>.lunbo_Top>button');
//创建一个对象,初始化为null,过后存储新创建的div元素,存储所有轮播图
var goodsGo = null;
//初始化方法
function init_goods4_lunbo() {
	////第一个小雨滴默认选中
	rains[0].style.backgroundColor = 'white';
	rains[0].style.border = '2px solid red';
	//复制第一组轮播图,用于过渡;同时复制商品名与价格到对应的数组
	for(var i = 0; i < 6; i++) {
		var temp1 = goods[i];
		var temp2 = gdsName[i];
		var temp3 = gdsPrice[i];
		goods.push(temp1);
		gdsName.push(temp2);
		gdsPrice.push(temp3);
	} //for1
	//新建一个子div用于展示所有轮播图共18+6=24张
	goodsGo = document.createElement("div");
	goodsGo.style.height = '190px';
	for(var i = 0; i < goods.length; i++) {
		////动态生成图片元素,p元素;注意使用方式哦/////
		var img = document.createElement('img');
		img.src = goods[i];
		//设置每一张图片宽度,高度自适应
		img.style.width = '100px';
		//创建两个p用于展示商品信息
		var p1 = document.createElement('p');
		p1.innerText = gdsName[i];
		p1.style.color = 'black';
		var p2 = document.createElement('p');
		p2.innerText = gdsPrice[i];
		p2.style.color = 'red';
		//创建超链接标签并设置样式,用于实现页面跳转
		var a = document.createElement('a');
		a.style.display = 'inline-block';
		a.style.width = '180px';
		a.style.height = '190px';
		a.style.textAlign = 'center';
		//添加一个超链接,此处为锚点
		a.href = '#';
		a.appendChild(img);
		a.appendChild(p1);
		a.appendChild(p2);
		goodsGo.appendChild(a);
	} //for2
	//设置总的宽度
	goodsGo.style.width = goods.length * 180 + 'px';
	//追加到父div中,注意这儿是goodGo轮播
	lunboMain.appendChild(goodsGo);
}
//初始化轮播图
init_goods4_lunbo();
//轮播方法的实现
var fg1 = 0; //存小雨滴轮播次数
var times = 0; //存图片轮播的次数
function btn_left() {
	//判断小雨滴的位置
	--fg1;
	if(fg1 < 0) {
		fg1 = rains.length - 1;
	}
	//判断图片的位置
	--times;
	if(times < 0) {
		goodsGo.style.transition = 'none';
		//快速跳到最后一个位置
		goodsGo.style.left = -1080 * 3 + 'px';
		setTimeout(function() {
			times = 2;
			goodsGo.style.transition = '0.5s all';
			var dist = -1080 * times + 'px';
			goodsGo.style.left = dist;
		}, 40);
	} else {
		var dist = -1080 * times + 'px';
		goodsGo.style.left = dist;
	}
	/////以处实现小雨滴效果//////
	for(var i = 0; i < rains.length; i++) {
		rains[i].style.backgroundColor = 'grey';
		rains[i].style.border = '2px solid transparent';
	}
	rains[fg1].style.backgroundColor = 'white';
	rains[fg1].style.border = '2px solid red';
} ////btnleft

function btn_right() {
	//判断小雨滴的位置
	++fg1;
	if(fg1 > rains.length - 1) {
		fg1 = 0;
	}
	//判断图片所在位置
	++times;
	if(times >= 4) {
		goodsGo.style.transition = 'none';
		//快速跳到开始位置
		goodsGo.style.left = '0px';
		setTimeout(function() {
			times = 1;
			goodsGo.style.transition = '0.5s all';
			var dist = -1080 * times + 'px';
			goodsGo.style.left = dist;
		}, 50);
	} else {
		var dist = -1080 * times + 'px';
		goodsGo.style.left = dist;
	}
	/////以处实现小雨滴效果//////
	for(var i = 0; i < rains.length; i++) {
		rains[i].style.backgroundColor = 'grey';
		rains[i].style.border = '2px solid transparent';
	}
	rains[fg1].style.backgroundColor = 'white';
	rains[fg1].style.border = '2px solid red';
} ////btnright
//按钮轮播效
btnLeft.onclick = function() {
	btn_left();
}
btnRight.onclick = function() {
	btn_right();
}
//////实现自动轮播///
var stv = setInterval(btn_right, 2000);
/////停止与恢复轮播///
//找到轮播图的父元素,设置鼠标事件
var lunboGoods = document.querySelector('.goods4Lunbo>.lunbo_goods');
lunboGoods.onmouseover = function() {
	clearInterval(stv); //停止动画
}
lunboGoods.onmouseleave = function() {
	stv = setInterval(btn_right, 2000); //重新开始
}