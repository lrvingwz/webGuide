/**
 * Created by BAIRU on 2019/7/19.
 */
/**
 * 获取对象
 * @param str
 * @returns {Element}
 */
function my$(str) {
    return document.getElementById(str);
}
function tn$(str) {
    return document.getElementsByTagName(str);
}
function cn$(str) {
    return document.getElementsByClassName(str);
}
/**
 * 获取子元素
 * @param element
 * @returns {arr}
 */
function getElementChild(element){
    if(!element.children){
        var elementArr = [];
        var nodeList = element.childNodes;
        for(var i=0;i<nodeList.length;i++){
            if(nodeList[i].nodeType == 1){
                elementArr.push(nodeList[i]);
            }
        }
        return elementArr;
    }
    else{
        return element.children;
    }
}
/**
 * 获取元素某css属性值
 * @param ele
 * @param attr
 * @returns {str}
 */
function getStyle(ele,attr){
     return window.getComputedStyle?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];
}
/**
 * 单一属性值减速变化
 * @param ele
 * @param attr
 * @param target
 */
function deformation(ele,attr,target){
    clearInterval(ele.timeId);
    ele.timeId=setInterval(function(){
        var current=parseInt(getStyle(ele,attr));
        var step=(target-current)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        current+=step;
        ele.style[attr]=current+"px";
        if(current==target){
            clearInterval(ele.timeId);
        }
        console.log(current);
    },20);
}
/**
 * 多属性减速变化
 * @param element
 * @param json
 * @param fn
 */
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr == "opacity") {
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else {
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
    }, 20);
}
/**
 * 添加事件
 * @param ele
 * @param event
 * @param fn
 */
function addEventListener(ele,event,fn){
    if(ele.addEventListener){
        ele.addEventListener(event,fn,false);
    }else if(ele.attachEvent){
        ele.attachEvent("on"+event,fn);
    }else{
        ele["om"+event]=fn;
    }
}
/**
 * 解绑事件
 * @param element
 * @param type
 * @param fn
 */
function removeEventListener(element,type,fn) {
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}
/**
 * 格式化日期
 * @param dt 日期对象
 * @returns {string} 返回值是格式化的字符串日期
 */
function getDates(dt) {
    var str = "";//存储时间的字符串
    //获取年
    var year = dt.getFullYear();
    //获取月
    var month = dt.getMonth() + 1;
    //获取日
    var day = dt.getDate();
    //获取小时
    var hour = dt.getHours();
    //获取分钟
    var min = dt.getMinutes();
    //获取秒
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "年" + month + "月" + day + "日 " + hour + ":" + min + ":" + sec;
    return str;
}
/**
 * 设置元素的文本内容
 * @param element 任意元素
 * @param text 任意文本内容
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
/**
 * 获取元素的文本内容
 * @param element 任意元素
 * @returns {*} 任意元素中的文本内容
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * 获取父级元素中的第一个子元素
 * @param element 父级元素
 * @returns {*} 父级元素中的子级元素
 */
function getFirstElement(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;

    }
}
    /**
     * 获取父级元素中的最后一个子元素
     * @param element 父级元素
     * @returns {*} 最后一个子元素
     */
    function getLastElement(element) {
        if (element.lastElementChild) {
            return element.lastElementChild;
        } else {
            var node = element.lastChild;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    /**
     * 获取某个元素的前一个兄弟元素
     * @param element 某个元素
     * @returns {*} 前一个兄弟元素
     */
    function getPreviousElement(element) {
        if (element.previousElementSibling) {
            return element.previousElementSibling
        } else {
            var node = element.previousSibling;
            while (node && node.nodeType != 1) {
                node = node.previousSibling;
            }
            return node;
        }
    }
    /**
     * 获取某个元素的后一个兄弟元素
     * @param element 某个元素
     * @returns {*} 后一个兄弟元素
     */
    function getNextElement(element) {
        if (element.nextElementSibling) {
            return element.nextElementSibling
        } else {
            var node = element.nextSibling;
            while (node && node.nodeType != 1) {
                node = node.nextSibling;
            }
            return node;
        }
    }
    /**
     * 获取某个元素的所有兄弟元素
     * @param element 某个元素
     * @returns {Array} 兄弟元素
     */
    function getSiblings(element) {
        if (!element)return;
        var elements = [];
        var ele = element.previousSibling;
        while (ele) {
            if (ele.nodeType === 1) {
                elements.push(ele);
            }
            ele = ele.previousSibling;
        }
        ele = element.nextSibling;
        while (ele) {
            if (ele.nodeType === 1) {
                elements.push(ele);

            }
            ele = ele.nextSibling;
        }
        return elements;
    }
/**
 * 返回当前浏览器是什么类型的浏览器
 */
function userBrowser(){
    var browserName=navigator.userAgent.toLowerCase();
    if(/msie/i.test(browserName) && !/opera/.test(browserName)){
        console.log("IE");
    }else if(/firefox/i.test(browserName)){
        console.log("Firefox");
    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){
        console.log("Chrome");
    }else if(/opera/i.test(browserName)){
        console.log("Opera");
    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
        console.log("Safari");
    }else{
        console.log("不知道什么鬼!");
    }
}
/**
 * 获取的是页面向上或者向左卷曲出去的距离的值,返回的是对象
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft||0
    };
}
