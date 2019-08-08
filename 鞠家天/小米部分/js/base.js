/**
 * Created by 76567 on 2019-08-07.
 */
    //下载App二维码 获取变量
var appdl=cn$("appdl")[0];
var dQRcode=appdl.getElementsByClassName("QRcode")[0];
    //Select Region 登陆 注册 消息通知 获取变量
var cover=my$("cover");
var logIn=my$("login");
var signUp=my$("sign-up");
var noyify=my$("noyify");
var agreement=my$("agreement");
var srBtn=my$("select-region");
var sr=my$("sr");
var srRegion=sr.getElementsByClassName("region")[0];
var popupCloses=cn$("popup-close");
var srLis=[//设置sr列表
    {"name":"Hong Kong","href":"https://www.mi.com/hk/"},
    {"name":"Taiwan","href":"https://www.mi.com/tw/"},
    {"name":"Singapore","href":"https://www.mi.com/sg/"},
    {"name":"Malaysia","href":"https://www.mi.com/my/"},
    {"name":"Philippines","href":"https://www.mi.com/ph/"},
    {"name":"India","href":"https://www.mi.com/in/"},
    {"name":"Indonesia","href":"https://www.mi.com/id/"},
    {"name":"Global Home","href":"https://www.mi.com/global/"},
    {"name":"MENA","href":"https://www.mi.com/mena/"},
    {"name":"Poland","href":"https://www.mi.com/pl/"},
    {"name":"Ukraine","href":"https://www.mi.com/ua/"},
    {"name":"Russia","href":"https://www.mi.com/ru/"},
    {"name":"Vietnam","href":"https://www.mi.com/vn/"},
    {"name":"Mexico","href":"https://www.mi.com/mx/"},
    {"name":"Korea","href":"https://www.mi.com/kr/"},
    {"name":"Egypt","href":"https://www.mi.com/eg/"},
    {"name":"Thailand","href":"https://www.mi.com/th/"},
    {"name":"Spain","href":"https://www.mi.com/es/"},
    {"name":"United States","href":"https://www.mi.com/us/"},
    {"name":"Italy","href":"https://www.mi.com/it/"},
    {"name":"France","href":"https://www.mi.com/fr/index.html"},
    {"name":"Bangladesh","href":"https://www.mi.com/bd/"},
    {"name":"United Kingdom","href":"https://www.mi.com/uk/"},
    {"name":"Chile","href":"https://www.mi.com/cl/"},
    {"name":"Nepal","href":"https://www.mi.com/np/"},
    {"name":"Sri Lanka","href":"https://www.mi.com/lk/"},
    {"name":"Turkey","href":"https://www.mi.com/tr/"},
    {"name":"Netherlands","href":"https://www.mi.com/nl/"},
    {"name":"Brazil","href":"https://www.mi.com/br/"}
];
//购物车按钮相关变量
var cart=cn$("cart")[0];
var cartContent=cn$("cart-content")[0];
//显示二维码
addEventListener(appdl,"mouseover",visibleQRcode);
addEventListener(appdl,"mouseout",unvisibleQRcode);
addEventListener(dQRcode,"mouseover",visibleQRcode);
addEventListener(dQRcode,"mouseout",unvisibleQRcode);
function visibleQRcode(){
    dQRcode.style.display="block";
}
function unvisibleQRcode(){
    dQRcode.style.display="none";
}

//生成SR选项 点击显示sr/agreement
addEventListener(srBtn,"click",clickSR);
addEventListener(logIn,"click",visibleAgreement);
addEventListener(signUp,"click",visibleAgreement);
addEventListener(noyify,"click",visibleAgreement);
function creatLis1(){
    for(var i=0;i<srLis.length;i++){
        var m=document.createElement("li");
        var n=document.createElement("a");
        n.innerHTML=srLis[i]["name"];
        n.href=srLis[i]["href"];
        m.appendChild(n);
        srRegion.appendChild(m);
    }
}
creatLis1();
function clickSR(){
    animate1(sr,{"top":0,"opacity":1});
    cover.style.display="block";
    animate1(cover,{"opacity":0.4});
}
function visibleAgreement(){
    animate1(agreement,{"top":0,"opacity":1});
    cover.style.display="block";
    animate1(cover,{"opacity":0.4});
}
//关闭弹出的窗口 鼠标移入改变样式
for(var i=0;i<popupCloses.length;i++){
    addEventListener(popupCloses[i],"click",clickPopupClose);
    addEventListener(popupCloses[i],"mouseover",function(){
        this.style.backgroundColor="#e53935";
        this.style.color="#fff";
    });
    addEventListener(popupCloses[i],"mouseout",function(){
        this.style="";
    });
}
function clickPopupClose(){
    animate1(cover,{"opacity":0},function(){
        cover.style.display="none";
    });
    animate1(this.parentNode.parentNode,{"top":-565,"opacity":0});
    this.style="";
}
//鼠标移入改变购物车样式
addEventListener(cart,"mouseover", function () {
    this.style.backgroundColor="#fff";
    this.children[0].style.color="rgb(255,127,0)";
    cartContent.style.display="block";
    animate1(cartContent,{"height":100});
});
addEventListener(cartContent,"mouseover", function () {
    cart.style.backgroundColor="#fff";
    cart.children[0].style.color="rgb(255,127,0)";
    cartContent.style.display="block";
    animate1(cartContent,{"height":100});
});
addEventListener(cart,"mouseout", function () {
    this.style="";
    this.children[0].style="";
    animate1(cartContent,{"height":0}, function () {
        cartContent.style="";
    });
});
addEventListener(cartContent,"mouseout", function () {
    cart.style="";
    cart.children[0].style="";
    animate1(cartContent,{"height":0}, function () {
        cartContent.style="";
    });
});
function animate1(element, json, fn) {
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
    },10);
}