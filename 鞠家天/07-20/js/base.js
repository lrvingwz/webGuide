/**
 * Created by BAIRU on 2019/7/20.
 */

var secNavs=cn$("sec-nav");

//��ÿ��nav��li�������¼�
for(var i=0;i<secNavs.length;i++){
    var par=secNavs[i].parentNode;
    addEventListener(par,"mouseover",snHeight);
    addEventListener(secNavs[i],"mouseover",snHeight);
    addEventListener(par,"mouseout",reHeight);
    addEventListener(secNavs[i],"mouseout",reHeight);
}
//����ʱ�߶�����
function snHeight(){
    var secNav=this.getElementsByTagName("ul")[0];
    var target=secNav.children.length*50;
    secNav.style.display="block";
    deformation1(secNav,"height",target);
}
//�뿪ʱ�߶ȼ�С
function reHeight(){
    var secNav=this.getElementsByTagName("ul")[0];
    var target=0;
    deformation1(secNav,"height",target);
}


