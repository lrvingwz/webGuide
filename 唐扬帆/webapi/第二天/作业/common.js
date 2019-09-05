function my$(id){
	return document.getElementById(id);
}

//设置任意的标签中间的任意文本内容
function setInnerText(element,text){
	if(typeof element.textContent=="undefined"){//不支持
		element.innerText=text;
	}else{//支持
		element.textContent=text;
	}
};

//获取任意的标签中间的文本内容
function getInnerText(){
	if(typeof element.textContent=="undefined"){//不支持
		return element.innerText;
	}else{//支持
		return element.textContent;
	}
};