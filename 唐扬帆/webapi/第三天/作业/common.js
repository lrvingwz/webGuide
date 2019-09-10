function my$(id){
	return document.getElementById(id);
}

//设置标签中的文本内容，应该使用textContent属性，谷歌，火狐支持IE8不支持
//设置标签中的文本内容，应该使用innerText属性，谷歌，火狐(以前低版本的不支持)，IE8都支持

//设置任意的标签中间的任意文本内容
function setInnerText(element,text){
	//判断是否支持这个属性
	if(typeof element.textContent=="undefind"){//不支持
		element.innerText=text;
	}else{//支持
		element.textContent=text;
	}
}

//获取任意标签中间的文本内容
function getInnerText(element){
	if(typeof element.textContent=="undefind"){//不支持
		return element.innerText;
	}else{//支持
		return element.textContent;
	}
}



//为任意的元素，绑定任意的事件，任意的元素，任意的事件，事件处理函数
function addEventListener(element,type,fn){
	if(element.addEventListener){
		element.addEventListener(type,fn,false);
	}else if(element.attachEvent){
		element.attachEvent("on"+type,fn);
	}else{
		element["on"+type]=fn;
	}
}


//此位置，按钮点击事件的处理函数
function onmouseoverHandle(){
	this.style.backgroundColor="blue";
}
function onmouseoutHandle(){
	this.style.backgroundColor="";
}