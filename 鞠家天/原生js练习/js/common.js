/**
 * Created by BAIRU on 2019/7/19.
 */
/**
 * ��ȡ����
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
 * ��ȡ��Ԫ��
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
 * ��ȡԪ��ĳcss����ֵ
 * @param ele
 * @param attr
 * @returns {str}
 */
function getStyle(ele,attr){
     return window.getComputedStyle?window.getComputedStyle(ele,null)[attr]:ele.currentStyle[attr];
}
/**
 * ��һ����ֵ���ٱ仯
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
 * �����Լ��ٱ仯
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
 * ����¼�
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
 * ����¼�
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
 * ��ʽ������
 * @param dt ���ڶ���
 * @returns {string} ����ֵ�Ǹ�ʽ�����ַ�������
 */
function getDates(dt) {
    var str = "";//�洢ʱ����ַ���
    //��ȡ��
    var year = dt.getFullYear();
    //��ȡ��
    var month = dt.getMonth() + 1;
    //��ȡ��
    var day = dt.getDate();
    //��ȡСʱ
    var hour = dt.getHours();
    //��ȡ����
    var min = dt.getMinutes();
    //��ȡ��
    var sec = dt.getSeconds();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    str = year + "��" + month + "��" + day + "�� " + hour + ":" + min + ":" + sec;
    return str;
}
/**
 * ����Ԫ�ص��ı�����
 * @param element ����Ԫ��
 * @param text �����ı�����
 */
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
/**
 * ��ȡԪ�ص��ı�����
 * @param element ����Ԫ��
 * @returns {*} ����Ԫ���е��ı�����
 */
function getInnerText(element) {
    if (typeof(element.textContent) == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}
/**
 * ��ȡ����Ԫ���еĵ�һ����Ԫ��
 * @param element ����Ԫ��
 * @returns {*} ����Ԫ���е��Ӽ�Ԫ��
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
     * ��ȡ����Ԫ���е����һ����Ԫ��
     * @param element ����Ԫ��
     * @returns {*} ���һ����Ԫ��
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
     * ��ȡĳ��Ԫ�ص�ǰһ���ֵ�Ԫ��
     * @param element ĳ��Ԫ��
     * @returns {*} ǰһ���ֵ�Ԫ��
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
     * ��ȡĳ��Ԫ�صĺ�һ���ֵ�Ԫ��
     * @param element ĳ��Ԫ��
     * @returns {*} ��һ���ֵ�Ԫ��
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
     * ��ȡĳ��Ԫ�ص������ֵ�Ԫ��
     * @param element ĳ��Ԫ��
     * @returns {Array} �ֵ�Ԫ��
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
 * ���ص�ǰ�������ʲô���͵������
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
        console.log("��֪��ʲô��!");
    }
}
/**
 * ��ȡ����ҳ�����ϻ������������ȥ�ľ����ֵ,���ص��Ƕ���
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function getScroll() {
    return {
        top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0,
        left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft||0
    };
}
