function my$(id){
	return document.getElementById(id);
}



//设置标签中的文本内容，应该使用textContent属性，谷歌，火狐支持IE8不支持
//设置标签中的文本内容，应该使用innerText属性，谷歌(以前低版本的不支持)，火狐，IE8都支持

//设置任意的标签中间的任意文本内容
function setInnerText(element,text){
	//判断浏览器是否支持这个属性
	if(typeof element.textContent=="undefined"){//不支持
		element.innerText=text;
	}else{//支持这个属性
		element.textContent=text;
	}
}

//获取任意的标签中间的文本内容
function getInnerText(element){
	if(typeof element.textContent=="undefined"){
		return element.innerText;
	}else{
		return element.textContent;
	}
}



//为任意的元素，绑定任意的事件，任意的元素，事件的类型，事件处理函数
    	function addEventListener(element,type,fn){
    		if(element.addEventListener){
    			element.addEventListener(type,fn,false);
    		}else if(element.attachEvent){
    			element.attachEvent("on"+type,fn);
    		}else{
    			element["on"+type]=fn
    		}
    	}

//获取任意一个父级元素的第一个子级元素
  	function getFirstElementChild(element){
      //原代码  if(typeof element.firstElementChild !="undefind")下面简写
  		if(element.firstElementChild){//---支持
  			return element.firstElementChild;
  		}else{
  			 var node=element.firstChild;//第一个节点
         //感觉有没有node好像都行，因为node.Type是否为1  node都已经存在了
     	 	while (node&&node.nodeType!=1){
        		node=node.nextSibling;
     	 }
      	return node;
  		}
  	};

//获取任意一个父级元素的最后一个子级元素
  	function getLastElementChild(element){
  		if(element.lastElementChild){//---支持
  			return element.lastElementChild;
  		}else{
  			 var node=element.lastChild;//第一个节点
     	 	while (node&&node.nodeType!=1){
        		node=node.previousSibling;
     	 }
      	return node;
  		}
  	};