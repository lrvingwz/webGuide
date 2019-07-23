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
