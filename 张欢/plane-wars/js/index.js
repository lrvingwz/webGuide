//获取元素
//获取整个大div
var container = document.getElementById("container");
//获取整个游戏页面
var gameCon = document.getElementById("game-con"); 
//获取游戏开始页面
var startCon = document.getElementById("start-con"); 
//获取游戏飞机
var planes = document.getElementById("planes");
//获取游戏结束后显示分数的div
var endBoard = document.getElementById("end-board"); 
//获取暂停的div
var suspendBoard = document.getElementById("suspend-board");
//获取“点击开始”按钮
var startBtn = document.getElementById("start"); 
//获取“继续”按钮
var goOnBtn = document.getElementById("goOn");
//获取 “重新开始”/“再来一局”按钮
var reStartBtn = document.getElementsByClassName("reStart");
//获取“停止”按钮 
var stopBtn = document.getElementById("stop"); 
//获取展示游戏过程中的分数的div
var showScores = document.getElementById("score"); 
//获取游戏结束了的分数
var endScore = document.getElementById("endScore");
//分数具体值
var totalScore = 0;

//背景移动函数
var bPY = 0;
function bgMove() {
	bPY += 0.4;
	gameCon.style.backgroundPositionY = bPY + "px";
	if (bPY > 568) {
		bPY = 0;
	}
}
//产生随机数函数
function getRandom(min, max){
    return parseInt(Math.random()*(max - min) + min);
}

//创建飞机对象
(function(){
	//飞机的构造函数
	function Plane(width, height, flyImg, boomImg, x, y, deadEndTime, speed, score, bloodVolume) {
		this.planeObj = null; //飞机对象
		this.width = width; //飞机宽度
		this.height = height; //飞机高度
		this.boomImg = boomImg; //飞机爆炸图片
		this.flyImg = flyImg; //飞机飞行图片
		this.x = x || 0; //飞机X坐标
		this.y = y || 0; //飞机Y坐标
		this.deadEndTime = deadEndTime; //飞机死亡时间
		this.deadCount = 0; //飞机死亡次数
		this.speed = speed || 1; //飞机速度；
		this.score = score || 0; //击落飞机获得的分数；
		this.bloodVolume = bloodVolume || 1; //血量
		this.planeDie = false;//记录飞机是否死亡
		this.init(); //创建实例对象时立即初始化
	}

	Plane.prototype.init = function() {
		this.planeObj = document.createElement("div");
		planes.appendChild(this.planeObj);
		this.planeObj.style.width = this.width + "px";
		this.planeObj.style.height = this.height + "px";
		this.planeObj.style.backgroundImage = "url(" + this.flyImg + ")";
		this.planeObj.style.position = "absolute";
		this.planeObj.style.left = this.x + "px";
		this.planeObj.style.top = this.y + "px";
	}

	Plane.prototype.move = function() {
		//高分加速
		if (totalScore <= 300) {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + "px";
		} else if (totalScore > 300 && totalScore <= 800) {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + 1 + "px";
		} else if (totalScore > 800 && totalScore <= 1600) {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + 2 + "px";
		} else if (totalScore > 1600 && totalScore <= 3000) {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + 3 + "px";
		} else if (totalScore > 3000 && totalScore <= 5000) {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + 4 + "px";
		} else {
			this.planeObj.style.top = this.planeObj.offsetTop + this.speed + 5 + "px";
		}
	}
	window.Plane = Plane;//暴露给window，成为全局对象，以便外面调用
}());


//创建游戏飞机
var planeUser = new Plane(66, 80, "image/plane.gif", "image/plane-destory.gif", 127, 440);
planeUser.planeObj.setAttribute("id", "myPlane");
var myPlane = document.getElementById("myPlane");
console.log(planeUser.planeObj);
//游戏飞机跟随鼠标移动
function planeMove(e) {
	var width = planeUser.width / 2;
	var height = planeUser.height / 2;
	var bgLeft = container.offsetLeft;
	var bgTop = container.offsetTop;
	myPlane.style.cursor = "pointer";
	var left = evt.getClientX(e) - bgLeft - width;//获取鼠标client的兼容代码在后面
	var top = evt.getClientY(e) - bgTop - height;
	if (left < -planeUser.width / 2) {
		left = -planeUser.width / 2;
	} else if (left > (container.offsetWidth - planeUser.width / 2)) {
		left = container.offsetWidth - planeUser.width / 2;
	}
	if (top < 0) {
		top = 0;
	} else if (top > container.offsetHeight - planeUser.height / 2) {
		top = container.offsetHeight - planeUser.height / 2;
	}
	myPlane.style.left = left + "px";
	myPlane.style.top = top + "px";
}
document.addEventListener("mousemove", planeMove);

//创建子弹对象
(function(){
	//子弹对象构造函数
	function Bullet(x, y, width, height, img) {
		this.bulletObj = null; //子弹对象，以便用这个对象使用其他的方法
		this.x = x || 0; //子弹横坐标
		this.y = y || 0; //子弹纵坐标
		this.width = width; //子弹宽度
		this.height = height; //子弹高度
		this.img = img; //子弹背景图
		this.bulletStrike = 1; //子弹的攻击力
		this.init(); //初始化时立即调用子弹init方法；
	}
	Bullet.prototype.init = function() {
		this.bulletObj = document.createElement("div");
		planes.appendChild(this.bulletObj);
		this.bulletObj.style.width = this.width + "px";
		this.bulletObj.style.height = this.height + "px";
		this.bulletObj.style.position = "absolute";
		this.bulletObj.style.backgroundImage = "url(" + this.img + ")";
		this.bulletObj.style.left = this.x + "px";
		this.bulletObj.style.top = this.y + "px";
		console.log("init被调用了");
	}
	Bullet.prototype.move = function() {
		this.bulletObj.style.top = this.bulletObj.offsetTop - 20 + "px"; //top=top-20
		console.log("move被调用了");
	}
	window.Bullet = Bullet;
}());


var bullets = []; //子弹数组
var enemies = []; //敌机数组
var bInitTime = 0; //创建子弹对象间隔时间
var eInitTime = 0; //创建敌机对象间隔时间


//所有需要用到定时器的东西都放在这里面，包括背景移动、子弹（的创建和）移动、敌机（的创建和）移动
function start() {
	bgMove(); //背景移动
	bInitTime++;
	
	//创建子弹
	if (bInitTime % 5 == 0) { //间隔时间创建子弹(5次后创建) 不然子弹会连成一线，没有快速移动的感觉
		var newBullet = new Bullet(parseInt(myPlane.offsetLeft + myPlane.offsetWidth / 2) - 3, parseInt(myPlane.offsetTop) - 10, 6, 14, "image/bullet1.png");
		bullets.push(newBullet); //新子弹加入数组中方便操作删除
	}

	//子弹移动
	for (var i = 0; i < bullets.length; i++) {
		bullets[i].move();
		if (bullets[i].bulletObj.offsetTop < 0) { //如果子弹移出界面，删除子弹
			bullets[i].bulletObj.parentNode.removeChild(bullets[i].bulletObj); //删除子弹对象
			bullets.splice(i, 1); //从数组中删除当前索引对应的子弹
		}
	}

	//创建敌机
	if (bInitTime == 20) { //出了几个子弹再创建敌机
		eInitTime++; //敌机计次开始
		if (eInitTime % 5 == 0) { //5次循环创建中敌机
			var mEnemy = new Plane(46, 60, "image/enemy3_fly_1.png", "image/zz.gif", getRandom(0, (container.offsetWidth-46)), -100, 600, getRandom(1, 2),
				50, 6);
			enemies.push(mEnemy);
		} else if (eInitTime % 2 == 0) {//2次循环创建中敌机
			var sEnemy = new Plane(32, 24, "image/enemy1_fly_1.png", "image/xx.gif", getRandom(0, (container.offsetWidth-32)), -100, 360, getRandom(1, 3),
				10, 1);
			enemies.push(sEnemy);
		}
		if (eInitTime == 20) { //20次循环创建大敌机
			var bEnemy = new Plane(110, 164, "image/enemy2_fly_1.png", "image/dd.gif", getRandom(0, (container.offsetWidth-110)), -100, 1200, 1, 100,
				12);
			enemies.push(bEnemy);
			eInitTime = 0;
		}
		bInitTime = 0; //子弹计次归零
	}

	//敌机移动，需要考虑----敌机未被击落时正常下落，超过游戏盒子则删除、被击落死亡后删除
	for (var j = 0; j < enemies.length; j++) {
		if (enemies[j].planeDie == false) {  //敌机未死亡
			enemies[j].move();
		}
		if (enemies[j].planeObj.offsetTop > container.offsetHeight) { //敌机出界删除
			enemies[j].planeObj.parentNode.removeChild(enemies[j].planeObj);
			enemies.splice(j, 1);
		}
		if (enemies[j].planeDie == true) { //敌机死亡以后删除  
			enemies[j].deadCount += 20;
			if (enemies[j].deadCount == enemies[j].deadEndTime) { 
				enemies[j].planeObj.parentNode.removeChild(enemies[j].planeObj);
				enemies.splice(j, 1);
			};
		}
	}

	//碰撞检测
	for (var k = 0; k < bullets.length; k++) {
		for (var t = 0; t < enemies.length; t++) {
			//敌机存活时检测
			if (enemies[t].planeDie == false) {
				//敌机碰撞游戏飞机，游戏结束-----敌机爆炸、游戏飞机也爆炸且不再移动、显示最后得分的div
				if (enemies[t].planeObj.offsetLeft + enemies[t].width >= myPlane.offsetLeft && myPlane.offsetLeft + myPlane.offsetWidth >=
					enemies[t].planeObj.offsetLeft) {     //判断横坐标
					if (enemies[t].planeObj.offsetTop + enemies[t].height >= myPlane.offsetTop + 40 && myPlane.offsetTop - 20 +
						myPlane.offsetHeight >= enemies[t].planeObj.offsetTop) {     //判断纵坐标
						//碰撞后执行		
						clearInterval(bgTimeId);//停止飞机移动
						removeEventListener(document, "mousemove", planeMove);//停止飞机跟鼠标移动
						myPlane.style.backgroundImage = "url('" + planeUser.boomImg + "')"; //游戏飞机爆炸图片
						enemies[t].planeObj.style.backgroundImage = "url('" + enemies[t].boomImg + "')"; //敌机爆炸图片
						enemies[t].planeDie = true; //敌机死亡
						endBoard.style.display = "block";
						endScore.innerHTML=totalScore;
					}
				}
				//子弹碰撞敌机
				if (enemies[t].planeObj.offsetLeft + enemies[t].width >= bullets[k].bulletObj.offsetLeft && bullets[k].bulletObj.offsetLeft +
					bullets[k].bulletObj.offsetWidth >=
					enemies[t].planeObj.offsetLeft) {
					if (enemies[t].planeObj.offsetTop + enemies[t].height >= bullets[k].bulletObj.offsetTop && bullets[k].bulletObj.offsetTop +
						bullets[k].bulletObj.offsetHeight >= enemies[t].planeObj.offsetTop) {
						//碰撞后执行	
						enemies[t].bloodVolume -= bullets[k].bulletStrike; //敌机血量减去子弹攻击力
						if (enemies[t].bloodVolume == 0) { //血量为0 敌机死亡 换图片 改状态 加分数
						    totalScore += enemies[t].score;
							showScores.innerText = totalScore;
							enemies[t].planeObj.style.backgroundImage = "url('" + enemies[t].boomImg + "')"; //敌机爆炸图片
							enemies[t].planeDie = true;
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

//为按钮们绑定的事件的函数

var inTheGame = true;
//暂停事件是循环的 停了开始，开始停止，所以添加到继续按钮上 可以继续游戏
function suspend() {
	if (inTheGame == true) {
		suspendBoard.style.display = "block";
		clearInterval(bgTimeId);//停止飞机移动
		removeEventListener(document, "mousemove", planeMove);//停止飞机跟鼠标移动
		inTheGame = false;
	} else {
		suspendBoard.style.display = "none";
		bgTimeId = setInterval(start, 20);//飞机继续移动
		addEventListener(document, "mousemove", planeMove);//飞机跟鼠标移动
		inTheGame = true;
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
//继续游戏
var bgTimeId;
function begin() {
	startCon.style.display = "none";
	suspendBoard.style.display = "none";
	gameCon.style.display = "block";
	planes.style.display = "block";
	bgTimeId = setInterval(start, 20);//飞机继续移动
	addEventListener(document, "mousemove", planeMove);//飞机跟鼠标移动
}
//重新开始游戏
function reStart() {
	location.reload(true);
}
//为按钮注册点击事件事件
addEventListener(planes, "click", suspend);
addEventListener(goOnBtn, "click", suspend);
addEventListener(startBtn, "click", begin);
addEventListener(stopBtn, "click", stop);
for (var i = 0; i < reStartBtn.length; i++) {
	addEventListener(reStartBtn[i], "click", reStart);
}


////////兼容代码/////////
//鼠标移动获得坐标的兼容代码
var evt = {
	getEvent: function(evt) {
		return window.event || e;
	},
	getClientX: function(evt) {
		return this.getEvent(evt).clientX;
	},
	getClientY: function(evt) {
		return this.getEvent(evt).clientY;
	},
	getScrollLeft: function() {
		return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
	},
	getScrollTop: function() {
		return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	},
	getPageX: function(evt) {
		return this.getEvent(evt).pageX ? this.getEvent(evt).pageX : this.getClientX() + this.getScrollLeft();
	},
	getPageY: function(evt) {
		return this.getEvent(evt).pageY ? this.getEvent(evt).pageY : this.getClientX(evt) + this.getScrollTop();
	}
}

//为任意一个元素绑定事件:元素,事件类型,事件处理函数
function addEventListener(element, type, fn) {
	if (element.addEventListener) { //支持
		element.addEventListener(type, fn, false);
	} else if (element.attachEvent) {
		element.attachEvent("on" + type, fn);
	} else {
		element["on" + type] = fn;
	}
}

//为任意的一个元素解绑某个事件:元素,事件类型,事件处理函数
function removeEventListener(element, type, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(type, fn, false);
	} else if (element.detachEvent) {
		element.detachEvent("on" + type, fn);
	} else {
		element["on" + type] = null;
	}
}