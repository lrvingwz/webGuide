/**
 * Created by 76567 on 2019-09-15.
 */
$(function () {
    var liNum=5*5*5;
    var numArr1=[];
    for(var i=0;i<liNum;i++){
        numArr1.push(i);
    }
    var tX,tY,tZ;
    tX=400;tY=400;tZ=700;
    var infmtArr=[
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Cs3","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Js", "name":"鞠家天","date":"2019.06.29","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"H",  "name":"鞠家天","date":"2019.06.06","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0},
        {"title":"Abc","name":"鞠家天","date":"2019.09.16","show-t":"你猜猜这是啥玩意儿","href":"demo/demo1","dec":0}
    ];
    var direction=["balabalabalabalabalabalabala"];
    init();
function init(){
    for(var i=0;i<liNum;i++){
        var rNum=Math.floor(Math.random()*infmtArr.length);
        var infmt=infmtArr[rNum];
        var m=rNum%2?2*i+1+"":2*i+"";
        if(m.length<2){
            m="00"+m;
        }
        if(m.length<3){
            m="0"+m;
        }
        var theLi=$('<li></li>');
        theLi.append('<p class="index">'+m+'</p><p class="big">'+infmt["title"]+'</p><p class="small">'+infmt["name"]+'</p><p class="small">'+infmt["date"]+'</p>');
        var x=Math.floor((Math.random()-0.5)*4000);
        var y=Math.floor((Math.random()-0.5)*4000);
        var z=Math.floor((Math.random()-0.5)*4000);
        theLi.css({
            "transform":"translate3d("+x+"px,"+y+"px,"+z+"px)"
        });
        theLi.appendTo("#wrap");
        theLi.attr({"showT":infmt["show-t"],"href":infmt["href"],"dec":infmt["dec"]});

    }
    var timeOut=setTimeout(function () {
        Grid();
        $("#menu").css({
            "transform":"scale(1)",
            "opacity":"1"
        });
        clearTimeout(timeOut);
    },300);
}

    var nowX,lastX,nowY,lastY,deep,minusX,minusY,timer1,timer2;
    var level= 0,vertical=0;
    minusX= 0;
    minusY= 0;
    deep=-1500;
    $(document).mousedown(function (e) {
        if(timer1){
            clearInterval(timer1);
        }
        var e=e||window.event;
        lastX= e.clientX;
        lastY= e.clientY;
        $(this).on("mousemove",function (e) {
            var e=e||window.event;
            nowX= e.clientX;
            nowY= e.clientY;
            minusX=nowX-lastX;
            minusY=nowY-lastY;
            level+=minusX*0.2;
            vertical-=minusY*0.2;
            $("#wrap").css({
                "transform":"translateZ("+deep+"px) rotateX("+vertical+"deg) rotateY("+level+"deg)"
            });
            lastX = nowX; // 存放前一点的x坐标
            lastY = nowY
        })
    }).mouseup(function () {
        $(this).off("mousemove");
        timer1=setInterval(function () {
            if(Math.abs(minusX)<1&&Math.abs(minusY)<1){
                clearInterval(timer1);
            }
            minusX*=0.95;
            minusY*=0.95;
            level+=minusX*0.2;
            vertical-=minusY*0.2;
            $("#wrap").css({
                "transform":"translateZ("+deep+"px) rotateX("+vertical+"deg) rotateY("+level+"deg)"
            });
        },13);
    }).mousewheel(function (a,b) {
        clearInterval(timer2);
        deep+=b*80;
        deep=Math.min(0,deep);
        deep=Math.max(-8000,deep);
        $("#wrap").css({
            "transform":"translateZ("+deep+"px) rotateX("+vertical+"deg) rotateY("+level+"deg)"
        });
        timer2=setInterval(function () {
            b*=0.85;
            if(Math.abs(b)<0.01){
                clearInterval(timer2);
            }
            deep+=b*80;
            deep=Math.min(0,deep);
            deep=Math.max(-8000,deep);
            $("#wrap").css({
                "transform":"translateZ("+deep+"px) rotateX("+vertical+"deg) rotateY("+level+"deg)"
            });
        },13);
    });
    $("#menu li").each(function () {
        $(this).click(function (ev) {
            var index=$(this).index();
            switch (index){
                case 0:
                    Table();
                    break;
                case 1:
                    Sphere();
                    break;
                case 2:
                    Helix();
                    break;
                case 3:
                    Grid();
                    break;
            }
            ev.stopPropagation();
        });
    });
    function Grid(){
        $("#wrap>li").each(function (i) {
            var iX=(i%25%5)*tX;
            var iY=parseInt((i%25)/5)*tY;
            var iZ=parseInt((i/25))*tZ;
            var firstX=-2*tX;
            var firstY=-2*tY;
            var firstZ=-2*tZ;
            $(this).css({
                "transform":"translate3d("+(firstX+iX)+"px,"+(firstY+iY)+"px,"+(firstZ+iZ)+"px)",
            });
        });
    }
    function Helix(){
        var midNum=Math.ceil(liNum/2);
        for(var i=0;i<liNum;i++){
            var rNum=Math.floor(Math.random()*numArr1.length);
            $("#wrap>li:eq("+numArr1[rNum]+")").css({
                "transform": "rotateY(" + (i - midNum) * 10 + "deg) translateZ(" + 800 + "px) translateY(" + 10 * (i - midNum) + "px)"
            });
            numArr1.splice(rNum,1);
        }
        for(var j=0;j<liNum;j++){
            numArr1.push(j);
        }
        //var midNum=Math.ceil(liNum/2);
        //for(var i=0;i<liNum;i++){
        //    $("#wrap>li:eq("+i+")").css({
        //        "transform": "rotateY(" + (i - midNum) * 10 + "deg) translateZ(" + 800 + "px) translateY(" + 10 * (i - midNum) + "px)"
        //    });
        //}
    }
    function Sphere(){
        var arr=[1,4,7,10,13,17,21,17,13,10,7,4,1];
        var index,num;
        $("#wrap li").each(function (j) {
            var sum= 0;
            for(var i=0;i<arr.length;i++){
                sum+=arr[i];
                if(sum>=j+1){
                    index=i;
                    num=arr[i]-(sum-j);
                    break;
                }
            }
            var x=index%2?90+index*180/arr.length:90-index*180/arr.length;
            var y=360/arr[index]*num;
            var z=0;
            if(x>90&&x<270){
                z=180;
            }
            $(this).css({
                "transform": "rotateY(" +y+ "deg) rotateX(" +x+ "deg) rotateZ(" +z+ "deg) translateZ(" + 800+ "px)"
            });
        });
    }
    function Table(){
        var hNum=Math.ceil(liNum/18)+1;
        var tNum=hNum*18;
        var tArr=[];
        var spaceX=150,spaceY=200;
        for(var i=0;i<tNum;i++){
            tArr.push(i);
        }
        var firstX=-(18/2)*spaceX+60;
        var firstY=-(8/2)*spaceY+80;
        for(var j=0;j<tNum;j++){
            if(j>=liNum){
                break;
            }
            var rNum=Math.floor(Math.random()*tArr.length);
            var x=tArr[rNum]%18*spaceX+firstX;
            var y=Math.floor(parseInt(tArr[rNum]/18)*spaceY+firstY);
            $("#wrap li:eq("+j+")").css({
                "transform":"translateX("+x+"px) translateY("+y+"px) translateZ(0px)"
            });
            tArr.splice(rNum,1);
        }
    }

    $("#wrap li").click(function (ev) {
            $("#show").fadeIn(500).css({
                "display":"block",
                "transition": "all 0.5s",
                "transform":"scale(1)"
            });
            $("#show .title").text($(this).attr("showT"));
            $("#show .imgbox img").attr("src",$(this).attr("href")+"/index.png");
            $("#show .compere").text("主持人："+$(this).find("p:eq(2)").text());
            $("#show .dec").text(direction[$(this).attr("dec")]);
            $("#show").attr("hre",$(this).attr("href"));
        ev.stopPropagation();
    });
    $(document).click(function (ev) {
        $("#show").fadeOut(500, function () {
            $(this).css({
                "transform":"scale(1.5) rotateY(0deg)",
                "display":"none"
            });
        }).css({"transform":"scale(0) rotateY(180deg)"});
        ev.stopPropagation();
    });
    $("#show").click(function (ev) {
        var $show=$("#show");
        $("#minwindow").find("iframe").attr("src",$show.attr("hre")+"/index.html");
        $("#body").css({
            "transition":"left 1s",
            "left":"-100%"
        });
        $("#minwindow").css({
            "left":"0",
            "transition":"left 1s"
        });
        ev.stopPropagation();
    });
    $("#back").click(function (ev) {
        $("#show").css({
            "transform":"scale(1.5) rotateY(0deg)",
            "display":"none"
        });
        $("#body").css({
            "left":"0"
        });
        $("#minwindow").css({
            "left":"100%"
        });
        ev.stopPropagation();
    });
});