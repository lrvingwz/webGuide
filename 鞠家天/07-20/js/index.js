/**
 * Created by BAIRU on 2019/7/22.
 */
var posBox=cn$("poster-box")[0];
var posBtnsBox=cn$("poster-btns")[0];
var conLeft=my$("control-left");
var conright=my$("control-right");
var news=my$("news");
var articleBox=news.getElementsByTagName("ul")[0];
var conLeft2 =my$("conleft2");
var conRight2 =my$("conright2");

(function(){
    var index=0;
    f1();
    addEventListener(posBox,"mouseover",function(){
        clearInterval(posBox.timeId2);
    });
    addEventListener(posBox,"mouseout",function(){
        posBox.timeId2=setInterval(f1,3000);
    });
    addEventListener(conLeft,"click",leftBtn);
    addEventListener(conright,"click",rightBtn);
    addEventListener(conLeft,"mouseover",function(){
        clearInterval(posBox.timeId2);
    });
    addEventListener(conright,"mouseover",function(){
        clearInterval(posBox.timeId2);
    });
    for(var i=0;i<posBtnsBox.children.length;i++){
        var btn=posBtnsBox.children[i];
        btn.setAttribute("index",i);
        addEventListener(btn,"click",btns);
    }
    //×Ô¶¯ÂÖ²¥
    posBox.timeId2=setInterval(f1,3000);
    //×óÓÒÇÐ»»
    function leftBtn(){
        if(index==0){
            posBox.style.left="-5760px";
            index=1;
            f1();
        }else{
            index-=2;
            f1();
        }
    }
    function rightBtn(){
        f1();
    }
    //µãÇÐ»»
    function btns(){
        if(this.getAttribute("index")==0){
            index=2;
            f1();
        }else{
            index=this.getAttribute("index")-1;
            f1();
        }
    }
    //Ö´ÐÐº¯Êý
    function f1(){
        var posBtns=posBtnsBox.children;
        var target2;
        if(index<3){
            index++;
            target2=index*(-1920);
            deformation1(posBox,"left",target2);
        }else{
            index=0;
            posBox.style.left=0;
            index++;
            target2=index*(-1920);
            deformation1(posBox,"left",target2);
        }
        if(index==3||index==0){
            for(var i=0;i<posBtns.length;i++){
                posBtns[i].style.backgroundColor="white";
            }
            posBtns[0].style.backgroundColor="orange";
        }else{
            for(var i=0;i<posBtns.length;i++){
                posBtns[i].style.backgroundColor="white";
            }
            posBtns[index].style.backgroundColor="orange";
        }
        //console.log(target);
    }

}());
(function (){
    var articleFater=articleBox.children;
    articleBox.style.width=articleFater.length*1200+"px";
    articleBox.style.height="500px";
    var index2=0;
    f2();
    addEventListener(articleBox,"mouseover",function(){
        clearInterval(articleBox.timeId2);
    });
    addEventListener(articleBox,"mouseout",function(){
        articleBox.timeId2=setInterval(f2,3000);
    });
    addEventListener(conLeft2,"click",leftBtn2);
    addEventListener(conRight2,"click",rightBtn2);
    addEventListener(conLeft2,"mouseover",function(){
        clearInterval(articleBox.timeId2);
    });
    addEventListener(conRight2,"mouseover",function(){
        clearInterval(articleBox.timeId2);
    });
    //×Ô¶¯ÂÖ²¥
    articleBox.timeId2=setInterval(f2,3000);
    //×óÓÒÇÐ»»
    function leftBtn2(){
        if(index2==0){
            index2=articleFater.length-2;
            f2();
        }else{
            index2-=2;
            f2();
        }
    }
    function rightBtn2(){
        f2();
    }
    //Ö´ÐÐº¯Êý
    function f2(){
        var target2;
        if(index2<articleFater.length-1){
            index2++;
            target2=index2*(-1200);
            deformation1(articleBox,"left",target2);
        }else{
            index2=0;
            articleBox.style.left=0;
            index2++;
            target2=index2*(-1200);
            deformation1(articleBox,"left",target2);
        }
    }
}());



function deformation1(ele,attr,target,fn){
    var flag=false;
    clearInterval(ele.timeId);
    ele.timeId=setInterval(function(){
        var current=parseInt(getStyle(ele,attr));
        var step=(target-current)/10;
        step=step>0?Math.ceil(step):Math.floor(step);
        current+=step;
        ele.style[attr]=current+"px";
        if(current==target){
            clearInterval(ele.timeId);
            flag=true;
        }
    },5);
    if(flag){
        if(fn){
            fn();
        }
    }
}