/**
 * Created by 76567 on 2019-08-07.
 */
var appdl=cn$("appdl")[0];
var dQRcode=appdl.getElementsByClassName("QRcode")[0];
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