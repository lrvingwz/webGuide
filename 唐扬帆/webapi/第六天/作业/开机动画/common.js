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
    	

   //动画函数
  function animate(element,json,fn){
    //先清理定时器
    clearInterval(element.timeId);
    //设置定时器
    element.timeId=setInterval(function(){
      var flag=true;//默认全到达目标
      for(var attr in json){
        if(attr=="opacity"){
           //获取元素的当前透明度，放大100倍
          var current=getStyle(element,attr)*100;
          //目标透明度放大100倍
          var target=json[attr]*100;
          var step=(target-current)/10;
          //正数向上取整，负数向下取整
          step=step>0? Math.ceil(step):Math.floor(step);
          //移动后的值
          current+=step;
          //当前的位置
          element.style[attr]=current/100;
        }else if(attr=="zIndex"){
          //判断这个属性是不是zIndex
            element.style[attr]=json[attr];
        }else{
          //获取元素属性的当前值
          var current=parseInt(getStyle(element,attr));//数字形式
          //当前属性对应的目标值
          var target=json[attr];
          //移动的步数
          var step=(target-current)/10;
          //走正数向上取整，走负数向下取整
          step=step>0? Math.ceil(step):Math.floor(step);
          //移动后的值
          current+=step;
          //当前的位置
          element.style[attr]=current+"px";
        }
        //判断是否全部到达目标
        if(current!=target){
          flag=false;
        }
      }
      if(flag){
        //清理定时器
        clearInterval(element.timeId);
        //所有属性全部到达目标后，执行这个函数，还要判断用户是否传入了这个函数
        if(fn){
          fn();
        }
      }

      //测试代码
      console.log("目标:"+target+",当前:"+current+",每次的移动步数:"+step);
    },20);
  }

//获取页面向上或者向左卷曲出去的距离的值
   function getScroll() {
    return {
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft||0,
      top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
  }

//获取样式标签中的属性值
function getStyle(element,attr) {
    //判断浏览器是否支持这个方法
   return window.getComputedStyle? window.getComputedStyle(element,null)[attr]:element.currentStyle[attr]||0;
  }