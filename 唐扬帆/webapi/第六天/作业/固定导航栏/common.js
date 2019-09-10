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
      //先清理定时器
      clearInterval(element.timeId);
      //定时器的id值存储到对象的一个属性中（一定要是对象的点属性中，因为点属性只
      //开辟一个空间，里面的值都在那一个点属性中开始和清理，不然左右移动会冲突）
      //（普通变量每次赋值都会重新开辟空间，空间中的定时器虽然停止了，但是里面的内容还会继续）
      element.timeId = setInterval(function () {
        //获取元素的当前的位置,数字类型
        var current = element.offsetLeft;
        //每次移动的距离
        var step = 10;
        //判断当前距离是否大于目标距离
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
      }, 20);
    }

  //动画函数（变速）
   function animate1(element,target){
    //清理定时器
    clearInterval(element.timeId);
    element.timeId=setInterval(function(){
      //获取当前元素的位置
      var current=element.offsetLeft;
      //移动的步数
      var step=(target-current)/10;
      //走整数向上取整，走负数向下取整
      step=step>0?Math.ceil(step):Math.floor(step);
      current+=step;
      element.style.left=current+"px";
      if(current==target){
        //清理定时器
        clearInterval(element.timeId);
      }
      //测试代码
      console.log("目标位置："+target+",当前位置："+current+",移动步数："+step);
    },20)
   };


//获取页面向上或者向左卷曲出去的距离的值
   function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }
