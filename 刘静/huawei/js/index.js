//轮播
$(function() {
	//banner
	var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal', // 水平切换选项
		loop: true, // 循环模式选项
		autoplay: true,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			bulletClass: 'my-bullet',
			bulletActiveClass: 'my-bullet-active'
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		// 如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
	//展会
	var mySwiper2 = new Swiper('.swiper-container2', {
		direction: 'horizontal', // 水平切换选项
		loop: true, // 循环模式选项
		autoplay: true,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			bulletClass: 'my-bullet',
			bulletActiveClass: 'my-bullet-active'
		},
		// 如果需要前进后退按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		// 如果需要滚动条
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
});
//top显示
(function() {
	var topLeftBtn = document.getElementsByClassName("top-links-btn")[0];
	var topLanBtn = document.getElementsByClassName("top-language-btn")[0];
	var icon1 = topLeftBtn.getElementsByClassName("icon-xiajiantou")[0];
	var icon2 = topLanBtn.getElementsByClassName("icon-xiajiantou")[0];
	var dropdown = document.getElementsByClassName("dropdown");
	dropdown[0].style.display ="none";
	dropdown[1].style.display ="none";
	topLeftBtn.onclick = function(e) {
		dropdown[0].style.display == "none";
		if (icon1.className == "iconfont icon-xiajiantou" && dropdown[0].style.display == "none") {
			icon1.className = "iconfont icon-shangjiantou";
			for (var i = 0; i < dropdown.length; i++) {
				dropdown[i].style.display = "none";
				icon2.className = "iconfont icon-xiajiantou";
			}
			dropdown[0].style.display = "block";
		} else {
			icon1.className = "iconfont icon-xiajiantou";
			for (var i = 0; i < dropdown.length; i++) {
				dropdown[i].style.display = "none";
			}
		}
	};
	topLanBtn.onclick = function() {
		if (icon2.className == "iconfont icon-xiajiantou" && dropdown[1].style.display == "none") {
			icon2.className = "iconfont icon-shangjiantou";
			for (var i = 0; i < dropdown.length; i++) {
				dropdown[i].style.display = "none";
				icon1.className = "iconfont icon-xiajiantou"
			}
			dropdown[1].style.display = "block";
		} else {
			icon2.className = "iconfont icon-xiajiantou";
			for (var i = 0; i < dropdown.length; i++) {
				dropdown[i].style.display = "none";
			}
		}
	};
	//获得Scroll
	function getScroll() {
	  return {
	    left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0,
	    top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
	  };
	}
	var scrollTop=0,topValue=getScroll().top;
	var navMove=document.getElementById("nav");
	window.onscroll=function(e){  
		scrollTop = getScroll().top;
		if(scrollTop<=28&&scrollTop<=topValue){
			navMove.style.position="relative";
		}else if(scrollTop<=topValue){
			console.log("向上");
			navMove.style.position="fixed";
			navMove.style.top=0+"px";
		}else{
			console.log("向xia");
			navMove.style.position="relative";
		}  
		//时时让两个值相等
		setTimeout(function(){
			topValue=scrollTop;
		},0);         
	}; 
	
	var headLi=document.getElementById("service-head");
	var liObj=headLi.getElementsByTagName("li");
	var conObj=document.getElementsByClassName("service-type-con");
	var index=0;
	for (var i = 0; i < liObj.length; i++) {
		//设置index
		liObj[i].setAttribute("index",i);
		conObj[i].setAttribute("index",i);
		//li注册事件
		liObj[i].onclick=function(){
			//获取当前index
			index=this.getAttribute("index");
			//其他li和con去掉选中样式
			for (var t = 0; t < liObj.length; t++) {
		        liObj[t].className="";
				conObj[t].style.display="none";
			}
			//当前li和con加选中样式
			this.className="current";
			conObj[index].style.display="block";
		}
	}
	
	var navCon=document.getElementById("nav-con");
	var navliObj=navCon.children;
	var ddObj=navCon.getElementsByClassName("nav-dropdown");
	var indexNum=0;
	for (var k = 0; k < navliObj.length; k++) {
		//设置index
		navliObj[k].setAttribute("indexNum",k);
		ddObj[k].setAttribute("indexNum",k);
		//ul注册事件
		navliObj[k].onmouseover=function(){
			//获取当前index
			indexNum=this.getAttribute("indexNum");
			//其他ul和dd去掉选中样式
			for (var t = 0; t < navliObj.length; t++) {
			    navliObj[t].className="";
				ddObj[t].style.display="none";
			}
			//当前ul和dd加选中样式
			var icon=this.getElementsByClassName("icon-xiajiantou")[0];
			icon.className="iconfont icon-shangjiantou";
			ddObj[indexNum].style.display="block";
		}
		navliObj[k].onmouseout=function(){
			//获取当前index
			indexNum=this.getAttribute("indexNum");
			//当前ul和dd去掉选中样式
			var icon=this.getElementsByClassName("icon-shangjiantou")[0];
			icon.className="iconfont icon-xiajiantou";
			ddObj[indexNum].style.display="none";
		}
	}
}());
