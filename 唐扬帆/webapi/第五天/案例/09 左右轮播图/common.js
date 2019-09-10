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


    	//绑定事件的兼容代码
		function addEventListener(element,type,fn){
			if(element.addEventListener){
				element.addEventListener(type,fn,false);
			}else if(element.attachEvent){
				element.attachEvent("on"+type,fn);
			}else{
				element["on"+type]=fn;
			}
		}

		//解绑事件的兼容代码
		function removeEventListener(element,type,fnName){
			if(element.removeEventListener){
				element.removeEventListener(type,fnName,false);
			}else if(element.detachEvent){
				element.detachEvent("on"+type,fnName);
			}else{
				element["on"+type]=null;
			}
		}
    	
    //动画封装
    //设置任意的一个元素,移动到指定的目标位置
    function animate(element, target) {
      clearInterval(element.timeId);
      //定时器的id值存储到对象的一个属性中
      element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        step = current < target ? step : -step;
        //当前移动到位置
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
          element.style.left = current + "px";
        } else {
          //清理定时器
          clearInterval(element.timeId);
          //直接到达目标
          element.style.left = target + "px";
        }
      }, 2);
    }
