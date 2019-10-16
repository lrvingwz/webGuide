//获取元素
var container=my$("container");
var gameCon=my$("game-con");//环境背景
var startCon=my$("start-con");//游戏显示背景
var planes=my$("planes");//存放飞机的游戏元素
var endBoard=my$("end-board");//结束页面
var suspendBoard=my$("suspend-board");//暂停页面
var goOnBtn=my$("goOn");//继续页面
var reStartBtn=document.getElementsByClassName("reStart");//重新开始按钮
var startBtn=my$("start");//开始按钮
var stopBtn=my$("stop");//回到主页按钮
var showScores=my$("score");//分数显示
var enScore=my$("endScore");//结束分数
var audio=my$("audio");//音效
var totalScore=0;//得分情况

//背景移动
var bgMove=0;
function moveBg(){
	bgMove+=0.4;
	gameCon.style.backgroundPositionY=bgMove+"px";
	if(bgMove>568){
		bgMove=0;
	}
}
//音效的构造函数

//飞机的构造函数
function Plane(width,height,flyImg,boomImg,placeX,placeY,deadEndTime,speed,score,bloodVolume){
	this.planeObj=null;//飞机对象
	this.width=width;//宽度
	this.height=height;//高度
	this.boomImg=boomImg;//飞机爆炸图片
	this.flyImg=flyImg;//飞机飞行图片
	this.placeX=placeX||0;//飞机X坐标
	this.placeY=placeY||0;//飞机Y坐标
	this.deadEndTime=deadEndTime;//飞机死亡时间
	this.deadTime=0;//飞机死亡计算
	this.speed=speed||1;//飞机速度
	this.score=score||0;//飞机得分
	this.bloodVolume=bloodVolume||1;//敌机血量
	this.planeDie=false;//飞机是否毁灭
	this.init();//创建实例对象时立即初始化
}

//初始化
Plane.prototype.init=function(){
	this.planeObj=document.createElement("div");
	planes.appendChild(this.planeObj);
	this.planeObj.style.width=this.width+"px";
	this.planeObj.style.height=this.height+"px";
	this.planeObj.style.backgroundImage="url("+this.flyImg+")";
	this.planeObj.style.position="absolute";
	this.planeObj.style.left=this.placeX+"px";
	this.planeObj.style.top=this.placeY+"px";
};

//高分使敌机加速
Plane.prototype.move=function(){
	if(totalScore<=500){
		this.planeObj.style.top=this.planeObj.offsetTop+this.speed+"px";
	}else{
		this.planeObj.style.top=this.planeObj.offsetTop+this.speed+2+"px";
	}
};

//实例化创建飞机
var planeUser=new Plane(66,80,"./image/my.gif","./image/bz.gif",127, 440);
//设置planeObj的id属性为myPlane
planeUser.planeObj.setAttribute("id","myPlane");
var myPlane=my$("myPlane");

//飞机跟随鼠标移动
function planeMove(e){
	//获取飞机本身宽高的一般，方便鼠标指向飞机中间
	var width=planeUser.width/2;
	var height=planeUser.height/2;
	myPlane.style.cursor = "pointer";
	var bgLeft=container.offsetLeft;
	var left=evt.getClientX(e)-bgLeft-width;//获取鼠标client的兼容代码
	var top=evt.getClientY(e)-height;
	if(left<-33){
			left=-33;
		}else if(left>285){
			left=287;
		}
		if(top<0){
			top=0;
		}else if(top>528){
			top=528;
		}
		myPlane.style.left = left + "px";
		myPlane.style.top = top + "px";	

}
//为函数注册移动事件
//document.onmousemove=planeMove;
document.addEventListener("mousemove", planeMove);

//子弹对象构造函数
function Bullet(pageX,pageY,width,height,img){
	this.bulletObj=null;//子弹对象
	this.pageX=pageX||0;//子弹横坐标
	this.pageY=pageY||0;//子弹纵坐标
	this.width=width;//子弹宽度
	this.height=height;//子弹高度
	this.img=img;//子弹背景图
	this.bulletStrike=1;//子弹射击
	this.init();//初始化时立即调用子弹init方法
}

//子弹初始化
Bullet.prototype.init=function(){
	//创建一个div存放子弹
	this.bulletObj=document.createElement("div");
	planes.appendChild(this.bulletObj);
	this.bulletObj.style.width=this.width+"px";
	this.bulletObj.style.height=this.height+"px";
	this.bulletObj.style.position="absolute";
	this.bulletObj.style.backgroundImage="url("+this.img+")";
	this.bulletObj.style.left=this.pageX+"px";
	this.bulletObj.style.top=this.pageY+"px";
};

Bullet.prototype.move=function(){
	this.bulletObj.style.top=this.bulletObj.offsetTop-20+"px";
};

//function oddBullet(pageX, pageY) {
//	Bullet.call(this, pageX, pageY, 6, 14, "image/bullet1.png");
//}

var bullets=[];//子弹数组
var enemies=[];//敌机数组
var bInitTime=0;//创建子弹对象间隔时间
var eInitTime=0;//创建敌机对象间隔时间

function start(){
	moveBg()//背景移动
	bInitTime++;
	
	
	
	//创建子弹
	if(bInitTime%5==0){//间隔时间创建子弹 不然子弹会连成一线
		var newBullet= new Bullet(parseInt(myPlane.offsetLeft)+33,parseInt(myPlane.offsetTop)-10,6,14,"image/bullet1.png");
		bullets.push(newBullet);//子弹加入数组中方便删除
	}

	//子弹移动
	for(var i=0;i<bullets.length;i++){
		bullets[i].move();
		if(bullets[i].bulletObj.offsetTop<0){//如果子弹移出界面，删除子弹
			planes.removeChild(bullets[i].bulletObj);//删除子弹对象
			bullets.splice(i,1);//从数组中删除当前索引对应的子弹
		}
	}
	//创建敌机
	if(bInitTime==20){//射出几发子弹再创建敌机
		eInitTime++;//敌机计次
		if (eInitTime % 5 == 0) { //5次循环创建中敌机
			var mEnemy = new Plane(46, 60, "./image/enemy3_fly_1.png", "./image/zz.gif", random(0, 274), -100, 600, random(1, 2),
				50, 6);
			enemies.push(mEnemy);
		} else if (eInitTime % 2 == 0) {
			var sEnemy = new Plane(32, 24, "./image/enemy1_fly_1.png", "./image/xx.gif", random(0, 288), -100, 360, random(1, 3),
				10, 1);
			enemies.push(sEnemy);
		}
		if (eInitTime == 20) { //20次循环创建大敌机
			var bEnemy = new Plane(110, 164, "./image/enemy2_fly_1.png", "./image/dd.gif", random(0, 210), -100, 1200, 1, 100,
				12);
			enemies.push(bEnemy);
			eInitTime = 0;
		}
		bInitTime = 0; //子弹计次归零
	}

	//敌机移动
	for (var j = 0; j < enemies.length; j++) {
		if (enemies[j].planeDie == false) {
			enemies[j].move();
		}
		if (enemies[j].planeObj.offsetTop > 568) { //敌机出界删除
			planes.removeChild(enemies[j].planeObj);
			enemies.splice(j, 1);
		}
		if (enemies[j].planeDie == true) { //敌机死亡以后删除  
			enemies[j].deadTime += 20;
			if (enemies[j].deadTime == enemies[j].deadEndTime) {
				planes.removeChild(enemies[j].planeObj);
				enemies.splice(j, 1);
			};
		}
	}

	//碰撞检测
	for(var k=0;k<bullets.length;k++){
		for(var t=0;t<enemies.length;t++){
			//敌机存活时检测
			if(enemies[t].planeDie==false){
				//敌机碰撞游戏飞机
				if(enemies[t].planeObj.offsetLeft+enemies[t].width>=myPlane.offsetLeft&&myPlane.offsetLeft+myPlane.offsetWidth>=
					enemies[t].planeObj.offsetLeft){
					if(enemies[t].planeObj.offsetTop+enemies[t].height>=myPlane.offsetTop+40&&myPlane.offsetTop-20+myPlane.offsetHeight>=
						enemies[t].planeObj.offsetTop){
						//碰撞后执行
						clearInterval(bgTimeId);//飞机停止移动
						removeEventListener(document,"mousemove",planeMove)//停止飞机跟随鼠标移动
						myPlane.style.backgroundImage="url("+planeUser.boomImg+")";//飞机爆炸图片
						enemies[t].planeObj.style.backgroundImage="url("+enemies[t].boomImg+")";//敌机爆炸的图片
						enemies[t].planeDie=true;//敌机死亡
						endBoard.style.display="block";//结束页面显示
						endScore.innerHTML=totalScore;//结束时得分
						my$("audio").src="sound/game_over.mp3"
						my$("audio").autoplay="autoplay";
					}
				}
				//子弹碰撞敌机
				if(enemies[t].planeObj.offsetLeft+enemies[t].width>=bullets[k].bulletObj.offsetLeft&&bullets[k].bulletObj.offsetLeft+
					bullets[k].bulletObj.offsetWidth>=enemies[t].planeObj.offsetLeft){
					if(enemies[t].planeObj.offsetTop+enemies[t].height>=bullets[k].bulletObj.offsetTop&&bullets[k].bulletObj.offsetTop+
						bullets[k].bulletObj.offsetHeight>=enemies[t].planeObj.offsetTop){
						//碰撞后执行
						enemies[t].bloodVolume=enemies[t].bloodVolume-bullets[k].bulletStrike;//敌机血量减去子弹攻击力
						if(enemies[t].bloodVolume==0){//血量为0 敌机死亡 换图片 改状态 加分数
							totalScore+=enemies[t].score;
							showScores.innerText=totalScore;
							enemies[t].planeObj.style.backgroundImage="url("+enemies[t].boomImg+")";//敌机爆炸图片
							enemies[t].planeDie=true;
							my$("audio2").src="sound/enemy1_down.mp3"
							my$("audio2").autoplay="autoplay";
						}
						planes.removeChild(bullets[k].bulletObj); //删除子弹对象
						bullets.splice(k, 1);
						break;
					}
				}
			}
		}
	}
}

//为按钮绑定事件
var inTheGame=true;
//暂停事件时循环的，所以添加到继续按钮上，可以继续游戏
function suspend(){
	my$("audio").src="";
	if(inTheGame==true){
		suspendBoard.style.display="block";
		clearInterval(bgTimeId);//停止飞机移动
		removeEventListener(document,"mousemove",planeMove);//停止飞机跟随鼠标移动
		inTheGame=false;
	}else{
		suspendBoard.style.display = "none";
		bgTimeId = setInterval(start, 20);//飞机继续移动
		addEventListener(document, "mousemove", planeMove);//飞机跟鼠标移动
		inTheGame = true;
		my$("audio").src="sound/bullet.mp3";
		my$("audio").autoplay="autoplay";
		my$("audio").loop="loop";
	}
}

//停止游戏
function stop() {
	startCon.style.display = "block";
	gameCon.style.display = "none";
	planes.style.display = "none";
	suspendBoard.style.display = "none";
	clearInterval(bgTimeId);//停止飞机移动
	removeEventListener(document, "mousemove", planeMove);//停止飞机跟鼠标移动
}

//重新开始游戏
function reStart() {
	location.reload(true);//刷新页面以达到重新游戏的过程
}

//按钮事件
addEventListener(planes, "click", suspend);
addEventListener(goOnBtn, "click", suspend);
addEventListener(startBtn, "click", begin);
addEventListener(stopBtn, "click", stop);
for (var i = 0; i < reStartBtn.length; i++) {//这里必须要循环不然无法刷新页面
	addEventListener(reStartBtn[i], "click", reStart);
}




function my$(id){
	return document.getElementById(id);
}



//开始游戏
var bgTimeId;
function begin() {
	startCon.style.display = "none";
	suspendBoard.style.display = "none";
	gameCon.style.display = "block";
	planes.style.display = "block";
	bgTimeId = setInterval(start, 20);//飞机继续移动
	addEventListener(document, "mousemove", planeMove);//飞机跟鼠标移动
	my$("audio").src="sound/bullet.mp3";
	my$("audio").autoplay="autoplay";
	my$("audio").loop="loop";
}
//重新开始游戏


////////兼容代码/////////
//鼠标移动获得坐标的兼容代码
  var evt={
    //window.event和事件参数对象e的兼容
    getEvent:function(e){
      return window.event||e;
    },
    //可视区域的横坐标的兼容代码
    getClientX:function(e){
      return this.getEvent(e).clientX;
    },
    //可视区域的纵坐标的兼容代码
    getClientY:function(e){
      return this.getEvent(e).clientY;
    },
    //页面向左卷曲出去的横坐标
    getScrollLeft:function(){
      return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //页面向上卷曲出去的纵坐标
    getScrollTop:function(){
      return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    },
    //相对于页面的横坐标(pageX或者是clientX+scrollLeft)
    getPageX:function(e){
      return this.getEvent(e).pageX? this.getEvent(e).pageX:this.getClientX(e)+this.getScrollLeft();
    },
    //相对于页面的纵坐标(pageY或者是clientY+scrollTop)
    getPageY:function(e){
      return this.getEvent(e).pageY? this.getEvent(e).pageY:this.getClientY(e)+this.getScrollTop();
    }
  };


//max-min之间的随机数
function random(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

//为任意一个元素绑定事件:元素,事件类型,事件处理函数
function addEventListener(element,type,fn){
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type]=fn;
	}
}

//为任意的一个元素解绑某个事件:元素,事件类型,事件处理函数
function removeEventListener(element,type,fnName){
	if(element.removeEventListener){
		element.removeEventListener(type,fnName,false);
	}else if(element.detachEvent){
		element.detachEvent("on"+type,fnName);
	}else{
		element["on"+type]=null;
	}
}