/**
 * Created by BAIRU on 2019/7/20.
 */

var secNavs=cn$("sec-nav");

//给每个nav的li添加鼠标事件
for(var i=0;i<secNavs.length;i++){
    var par=secNavs[i].parentNode;
    addEventListener(par,"mouseover",snHeight);
    addEventListener(secNavs[i],"mouseover",snHeight);
    addEventListener(par,"mouseout",reHeight);
    addEventListener(secNavs[i],"mouseout",reHeight);
}
//进入时高度增加
function snHeight(){
    var secNav=this.getElementsByTagName("ul")[0];
    var target=secNav.children.length*50;
    secNav.style.display="block";
    deformation1(secNav,"height",target);
}
//离开时高度减小
function reHeight(){
    var secNav=this.getElementsByTagName("ul")[0];
    var target=0;
    deformation1(secNav,"height",target);
}


