/**
 * Created by 76567 on 2019-08-07.
 */
//下载二维码
var appdl = cn$("appdl")[0];
var dQRcode = appdl.getElementsByClassName("QRcode")[0];
//Select Region 登陆 注册 消息通知 获取变量
var cover = my$("cover");
var logIn = my$("login");
var signUp = my$("sign-up");
var noyify = my$("noyify");
var agreement = my$("agreement");
var srBtn = my$("select-region");
var sr = my$("sr");
var srRegion = sr.getElementsByClassName("region")[0];
var popupCloses = cn$("popup-close");
var srLis = [//设置sr列表
    {"name": "Hong Kong", "href": "https://www.mi.com/hk/"},
    {"name": "Taiwan", "href": "https://www.mi.com/tw/"},
    {"name": "Singapore", "href": "https://www.mi.com/sg/"},
    {"name": "Malaysia", "href": "https://www.mi.com/my/"},
    {"name": "Philippines", "href": "https://www.mi.com/ph/"},
    {"name": "India", "href": "https://www.mi.com/in/"},
    {"name": "Indonesia", "href": "https://www.mi.com/id/"},
    {"name": "Global Home", "href": "https://www.mi.com/global/"},
    {"name": "MENA", "href": "https://www.mi.com/mena/"},
    {"name": "Poland", "href": "https://www.mi.com/pl/"},
    {"name": "Ukraine", "href": "https://www.mi.com/ua/"},
    {"name": "Russia", "href": "https://www.mi.com/ru/"},
    {"name": "Vietnam", "href": "https://www.mi.com/vn/"},
    {"name": "Mexico", "href": "https://www.mi.com/mx/"},
    {"name": "Korea", "href": "https://www.mi.com/kr/"},
    {"name": "Egypt", "href": "https://www.mi.com/eg/"},
    {"name": "Thailand", "href": "https://www.mi.com/th/"},
    {"name": "Spain", "href": "https://www.mi.com/es/"},
    {"name": "United States", "href": "https://www.mi.com/us/"},
    {"name": "Italy", "href": "https://www.mi.com/it/"},
    {"name": "France", "href": "https://www.mi.com/fr/index.html"},
    {"name": "Bangladesh", "href": "https://www.mi.com/bd/"},
    {"name": "United Kingdom", "href": "https://www.mi.com/uk/"},
    {"name": "Chile", "href": "https://www.mi.com/cl/"},
    {"name": "Nepal", "href": "https://www.mi.com/np/"},
    {"name": "Sri Lanka", "href": "https://www.mi.com/lk/"},
    {"name": "Turkey", "href": "https://www.mi.com/tr/"},
    {"name": "Netherlands", "href": "https://www.mi.com/nl/"},
    {"name": "Brazil", "href": "https://www.mi.com/br/"}
];
//购物车按钮相关变量
var cart = cn$("cart")[0];
var cartContent = cn$("cart-content")[0];
//推荐列表相关变量
var hNavList = cn$("nav-list")[0];
var hNavlis = [];
var cabinet = my$("cabinet");
var cLis = cabinet.getElementsByTagName("li");
var cItems = [];
var cItemsObjs = [
    [
        {"sign": "none", "img": 0, "price": 1799, "types": true, "name": "小米CC9", "href": "https://www.mi.com/micc9/"},
        {
            "sign": "none",
            "img": 1,
            "price": 1299,
            "types": true,
            "name": "小米CC9e",
            "href": "https://www.mi.com/micc9e/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 2599,
            "types": false,
            "name": "小米CC9 美图定制版",
            "href": "https://www.mi.com/xiaomicc9mt/"
        },
        {"sign": "none", "img": 3, "price": 2599, "types": true, "name": "小米9", "href": "https://www.mi.com/mi9/"},
        {
            "sign": "none",
            "img": 4,
            "price": 1799,
            "types": false,
            "name": "小米8 屏幕指纹版",
            "href": "https://www.mi.com/mi8ud/"
        },
        {
            "sign": "none",
            "img": 5,
            "price": 2599,
            "types": false,
            "name": "小米MIX3",
            "href": "https://item.mi.com/10000123.html"
        }
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 2299,
            "types": true,
            "name": "Redmi K20 Pro",
            "href": "https://www.mi.com/redmik20pro/"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 1999,
            "types": true,
            "name": "Redmi K20",
            "href": "https://www.mi.com/redmik20/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 1399,
            "types": false,
            "name": "Redmi Note 7 Pro",
            "href": "https://www.mi.com/redminote7pro/"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 499,
            "types": true,
            "name": "Redmi 7A",
            "href": "https://www.mi.com/redmi7a/"
        },
        {
            "sign": "none",
            "img": 4,
            "price": 999,
            "types": true,
            "name": "Redmi Note7",
            "href": "https://www.mi.com/redminote7/"
        },
        {"sign": "none", "img": 5, "price": 699, "types": true, "name": "Redmi 7", "href": "https://www.mi.com/redmi7/"}
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 6999,
            "types": false,
            "name": "小米壁画电视 65英寸",
            "href": "https://www.mi.com/arttv/"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 1999,
            "types": false,
            "name": "小米全面屏电视E55A",
            "href": "https://www.mi.com/mitvall-screen/e55a/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 699,
            "types": false,
            "name": "小米电视4A 32英寸",
            "href": "https://www.mi.com/mitv4A/32/"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 1899,
            "types": false,
            "name": "小米电视4A 55英寸",
            "href": "https://www.mi.com/mitv4A/55/"
        },
        {
            "sign": "none",
            "img": 4,
            "price": 2799,
            "types": false,
            "name": "小米电视4A 65英寸",
            "href": "https://www.mi.com/mitv4A/65"
        },
        {
            "sign": "none",
            "img": 5,
            "price": "小米电视",
            "types": false,
            "name": "查看全部",
            "href": "https://www.mi.com/a/h/9819.html"
        }
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 3999,
            "types": true,
            "name": "RedmiBook 14 独显版",
            "href": "https://item.mi.com/10000153.html"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 3399,
            "types": true,
            "name": "小米笔记本Air 12.5",
            "href": "https://item.mi.com/10000145.html"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 4999,
            "types": true,
            "name": "小米笔记本 Air 13.3\"",
            "href": "https://item.mi.com/10000142.html"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 3999,
            "types": true,
            "name": "小米笔记本 15.6\"",
            "href": "https://item.mi.com/10000141.html"
        },
        {
            "sign": "none",
            "img": 4,
            "price": 5599,
            "types": true,
            "name": "小米笔记本Pro 15.6\"",
            "href": "https://item.mi.com/10000144.html"
        },
        {
            "sign": "none",
            "img": 5,
            "price": 5499,
            "types": true,
            "name": "小米游戏本",
            "href": "https://item.mi.com/10000113.html"
        }
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 2299,
            "types": false,
            "name": "米家互联网空调C1 (一级能效)",
            "href": "https://www.mi.com/airconditionc1/v1c1/"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 2199,
            "types": false,
            "name": "米家互联网空调 (一级能效)",
            "href": "https://www.mi.com/airenergy/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 699,
            "types": false,
            "name": "Redmi全自动波轮洗衣机1A",
            "href": "https://item.mi.com/9509.html"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 1899,
            "types": false,
            "name": "米家互联网洗烘一体机10kg",
            "href": "https://www.mi.com/washer-dryer-10/"
        },
        {"sign": "none", "img": 4, "price": 1999, "types": false, "name": "小米净水器", "href": "https://www.mi.com/water2"},
        {
            "sign": "none",
            "img": 5,
            "price": 1699,
            "types": false,
            "name": "米家扫地机器人",
            "href": "https://www.mi.com/roomrobot/"
        }
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 99,
            "types": false,
            "name": "小米路由器 Mesh",
            "href": "https://www.mi.com/mesh/"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 149,
            "types": false,
            "name": "小米路由器4A 千兆版",
            "href": "https://www.mi.com/miwifi4ac/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 59,
            "types": false,
            "name": "小米路由器 4C",
            "href": "https://item.mi.com/8645.html"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 99,
            "types": false,
            "name": "小米路由器 4A",
            "href": "https://www.mi.com/miwifi4a/"
        },
        {
            "sign": "none",
            "img": 4,
            "price": 399,
            "types": true,
            "name": "小米路由器 HD/Pro",
            "href": "https://www.mi.com/miwifihd/"
        },
        {
            "sign": "none",
            "img": 5,
            "price": "小米路由版",
            "types": false,
            "name": "查看全部",
            "href": "https://www.mi.com/a/h/8363.html"
        }
    ],
    [
        {
            "sign": "none",
            "img": 0,
            "price": 199,
            "types": false,
            "name": "小米米家智能摄像机云台版",
            "href": "https://www.mi.com/camera-360/"
        },
        {
            "sign": "none",
            "img": 1,
            "price": 499,
            "types": true,
            "name": "小米小爱老师",
            "href": "https://www.mi.com/aiteacher-wifi/"
        },
        {
            "sign": "none",
            "img": 2,
            "price": 1299,
            "types": true,
            "name": "小米米家智能门锁",
            "href": "https://www.mi.com/mj-smartlock/"
        },
        {
            "sign": "none",
            "img": 3,
            "price": 249,
            "types": false,
            "name": "小米小爱触屏音箱",
            "href": "https://www.mi.com/aispeaker-touch/"
        },
        {
            "sign": "none",
            "img": 4,
            "price": 179,
            "types": false,
            "name": "小爱万能遥控版",
            "href": "https://www.mi.com/aispeaker-control/"
        },
        {
            "sign": "none",
            "img": 5,
            "price": "智能硬件",
            "types": false,
            "name": "查看全部",
            "href": "https://www.mi.com/p/3469.html?client_id=180100041086&masid=17409.0245"
        }
    ]
];
for (var i = 0; i < 7; i++) {
    hNavlis.push(hNavList.getElementsByTagName("li")[i]);
}
for (i = 0; i < cLis.length; i++) {
    if (cLis[i].className != "sep") {
        cItems.push(cLis[i]);
    }
}
//搜索框部分变量
var search = cn$("search")[0];
var searchCon = my$("search-con");
var searchBtn = my$("search-btn");
var hotSearch = cn$("hot-search")[0];
var searchList = search.getElementsByClassName("text-options")[0];
var lexicon = ["小米", "小米9", "小米9 SE",
    "Redmi K20 pro", "Redmi K20", "Redmi Note 7 Pro",
    "Redmi note 7", "小米电视机4c", "电视32英寸", "笔记本pro",
    "小爱音箱", "净水器"];
//大菜单部分变量
var rotator = cn$("rotator")[0];
var rotatorNav = cn$("rotator-nav")[0];
var rotatorLis = rotatorNav.getElementsByTagName("li");
var rotatorNavList = cn$("rotator-navlist")[0];
var rotatorItems = [
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"}
    ],
    [
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"},
        {"img": "sj-mimax3.png", "href": "#", "name": "小米Max 3"},
        {"img": "sj-hsyxsj2.png", "href": "#", "name": "黑鲨游戏手机 2"},
        {"img": "sj-redmik20pro.png", "href": "#", "name": "Redmi K20 Pro"},
        {"img": "sj-micc9.png", "href": "#", "name": "小米CC9"},
        {"img": "sj-micc.png", "href": "#", "name": "小米CC"},
        {"img": "sj-micc9e.png", "href": "#", "name": "小米CC9e"},
        {"img": "sj-mi9.png", "href": "#", "name": "小米9"},
        {"img": "sj-mi9se.png", "href": "#", "name": "小米9 SE"},
        {"img": "sj-mimix3.png", "href": "#", "name": "小米 MIX3"},
        {"img": "sj-mi8qc.png", "href": "#", "name": "小米8 青春版"},
        {"img": "sj-mi8pmzw.png", "href": "#", "name": "小米8 屏幕指纹版"},
        {"img": "sj-mimix2s.png", "href": "#", "name": "小米MIX 2s"}
    ]
];
//轮播图变量
var rImgs = cn$("rotator-imgs");
var rImg = cn$("rotator-imgs0")[0];
var changeLeft = my$("changeleft");
var changeRight = my$("changeright");
var rotatorBtns = rotator.getElementsByClassName("rotator-touch-btns")[0].children;
var rotatorNum = 0;
for (i = 0; i < rImgs.length; i++) {
    rotatorBtns[i].setAttribute("index", i);
    addEventListener(rotatorBtns[i], "click", clickBtns);
}
//轮播图下面的小菜单
var recommendNav=cn$("recommend-nav")[0];
for(i=0;i<recommendNav.children.length;i++){
    addEventListener(recommendNav.children[i],"mouseover",rNMouseover);
    addEventListener(recommendNav.children[i],"mouseout",rNMouseout);
}
function rNMouseover(){
    this.getElementsByTagName("i")[0].style.backgroundPositionY="-26px";
    this.style.color="#fff";
}
function rNMouseout(){
    this.style="";
    this.getElementsByTagName("i")[0].style="";
}
//显示二维码
addEventListener(appdl, "mouseover", visibleQRcode);
addEventListener(appdl, "mouseout", unvisibleQRcode);
addEventListener(dQRcode, "mouseover", visibleQRcode);
addEventListener(dQRcode, "mouseout", unvisibleQRcode);
function visibleQRcode() {
    dQRcode.style.display = "block";
}
function unvisibleQRcode() {
    dQRcode.style.display = "none";
}

//生成SR选项 点击显示sr/agreement
addEventListener(srBtn, "click", clickSR);
addEventListener(logIn, "click", visibleAgreement);
addEventListener(signUp, "click", visibleAgreement);
addEventListener(noyify, "click", visibleAgreement);
function creatLis1() {
    for (var i = 0; i < srLis.length; i++) {
        var m = document.createElement("li");
        var n = document.createElement("a");
        n.innerHTML = srLis[i]["name"];
        n.href = srLis[i]["href"];
        m.appendChild(n);
        srRegion.appendChild(m);
    }
}
creatLis1();
function clickSR() {
    animate1(sr, {"top": 0, "opacity": 1});
    cover.style.display = "block";
    animate1(cover, {"opacity": 0.4});
}
function visibleAgreement() {
    animate1(agreement, {"top": 0, "opacity": 1});
    cover.style.display = "block";
    animate1(cover, {"opacity": 0.4});
}
//关闭弹出的窗口 鼠标移入改变样式
for (var i = 0; i < popupCloses.length; i++) {
    addEventListener(popupCloses[i], "click", clickPopupClose);
    addEventListener(popupCloses[i], "mouseover", function () {
        this.style.backgroundColor = "#e53935";
        this.style.color = "#fff";
    });
    addEventListener(popupCloses[i], "mouseout", function () {
        this.style = "";
    });
}
function clickPopupClose() {
    animate1(cover, {"opacity": 0}, function () {
        cover.style.display = "none";
    });
    animate1(this.parentNode.parentNode, {"top": -565, "opacity": 0});
    this.style = "";
}
//鼠标移入改变购物车样式
addEventListener(cart, "mouseover", function () {
    this.style.backgroundColor = "#fff";
    this.children[0].style.color = "rgb(255,127,0)";
    cartContent.style.display = "block";
    animate1(cartContent, {"height": 100});
});
addEventListener(cartContent, "mouseover", function () {
    cart.style.backgroundColor = "#fff";
    cart.children[0].style.color = "rgb(255,127,0)";
    cartContent.style.display = "block";
    animate1(cartContent, {"height": 100});
});
addEventListener(cart, "mouseout", function () {
    this.style = "";
    this.children[0].style = "";
    animate1(cartContent, {"height": 0}, function () {
        cartContent.style = "";
    });
});
addEventListener(cartContent, "mouseout", function () {
    cart.style = "";
    cart.children[0].style = "";
    animate1(cartContent, {"height": 0}, function () {
        cartContent.style = "";
    });
});
//推荐栏项目创建与显示
for (var i = 0; i < hNavlis.length; i++) {
    hNavlis[i].setAttribute("index", i);
    addEventListener(hNavlis[i], "mouseover", hNavlisMouseOver);
    addEventListener(hNavlis[i], "mouseout", hNavlisMouseOut);
}
function hNavlisMouseOver() {
    creatlis2(this.getAttribute("index"));
    cabinet.style.display = "block";
    animate1(cabinet, {"height": 230});
}
function hNavlisMouseOut() {
    animate1(cabinet, {"height": 0}, function () {
        cabinet.style.display = "none";
    });
}
cabinet.onmouseover = function () {
    cabinet.style.display = "block";
    animate1(cabinet, {"height": 231});
};
cabinet.onmouseout = function () {
    animate1(cabinet, {"height": 0}, function () {
        cabinet.style.display = "none";
    });
};
function creatlis2(num) {
    for (var j = 0; j < cItems.length; j++) {
        var cabinetI = cItems[j].getElementsByTagName("i")[0];
        var cabinetImages = cItems[j].getElementsByTagName("img")[0];
        var cabinetLink = cItems[j].getElementsByTagName("a")[0];
        var cabinetP = cItems[j].getElementsByTagName("p")[0];
        var cabinetPrice = cItems[j].getElementsByTagName("span")[0];
        if (cItemsObjs[num][j]["sign"] != "none") {
            cabinetI.innerText = cItemsObjs[num][j]["sign"];
            cabinetI.style.marginLeft = -(parseInt(cabinetI.offsetWidth) / 2);
        } else {
            cabinetI.style.display = "none";
        }
        cabinetImages.src = "images/cabinet-" + num + "-" + cItemsObjs[num][j]["img"] + ".png";
        cabinetLink.href = cItemsObjs[num][j]["href"];
        cabinetP.innerText = cItemsObjs[num][j]["name"];
        if (isNaN(cItemsObjs[num][j]["price"])) {
            cabinetPrice.innerText = cItemsObjs[num][j]["price"];
            cabinetPrice.style.color = "#333";
        } else {
            if (cItemsObjs[num][j]["types"]) {
                cabinetPrice.innerText = cItemsObjs[num][j]["price"] + "元起";
            } else {
                cabinetPrice.innerText = cItemsObjs[num][j]["price"] + "元";
            }
        }
    }
}
//动态搜索候选项
searchCon.onfocus = function () {
    searchList.style.display = "block";
    this.style.borderColor = "rgb(255,127,0)";
    searchBtn.style.borderColor = "rgb(255,127,0)";
    animate1(hotSearch, {"opacity": 0}, function () {
        hotSearch.display = "none"
    });
};
searchCon.onblur = function () {
    searchList.style.display = "none";
    this.style = "";
    searchBtn.style = "";
    if (searchCon.value.length == 0) {
        hotSearch.style.display = "block";
        animate1(hotSearch, {"opacity": 1});
    }
};
searchCon.onkeyup = searchAction;
function searchAction() {
    var searchText = searchCon.value;
    var eligibleText = lexicon.filter(function (a, b, c) {
        return a.indexOf(searchText) != -1;
    });
    if (eligibleText.length != 0) {
        searchList.style.display = "block";
        searchList.innerHTML = "";
        for (var m = 0; m < eligibleText.length; m++) {
            var newLi = document.createElement("li");
            var newA = document.createElement("a");
            var newI = document.createElement("i");
            var newSpan = document.createElement("span");
            newI.innerHTML = searchText;
            newSpan.innerHTML = eligibleText[m].slice(searchText.length, eligibleText[m].length);
            newA.href = "javascript:void(0);";
            newA.appendChild(newI);
            newA.appendChild(newSpan);
            newLi.appendChild(newA);
            searchList.appendChild(newLi);
        }
    } else {
        searchList.style.display = "none";
    }
}
//大菜单
addEventListener(rotator, "mouseout", mouseoutRotator);
for (var i = 0; i < rotatorLis.length; i++) {
    rotatorLis[i].setAttribute("index", i);
    addEventListener(rotatorLis[i], "mouseover", mouseoverRNL);
}
function mouseoverRNL() {
    rotatorNavList.style.display = "block";
    createLis(this.getAttribute("index"));
}
function mouseoutRotator() {
    rotatorNavList.style.display = "none";
}
function createLis(mm) {
    rotatorNavList.innerHTML = "";
    for (var j = 0; j < rotatorItems[mm].length; j++) {
        var itemObj = rotatorItems[mm][j];
        var newLi = document.createElement("li");
        var newA = document.createElement("a");
        newA.href = itemObj["href"];
        newA.innerHTML = "<img src='images/" + itemObj["img"] + "'/>" + itemObj["name"];
        newLi.appendChild(newA);
        if (j % 6 == 0) {
            var newUl = document.createElement("ul");
            rotatorNavList.appendChild(newUl);
        }
        newUl.appendChild(newLi);
    }
}
//轮播图动作
addEventListener(changeLeft, "click", clickRLeft);
addEventListener(changeRight, "click", changeImg);
window.onload = function rotatorImgAction() {
    var timeId2 = setInterval(changeImg, 3000);
    addEventListener(rotator, "mouseover", clearRotatorTimeId);
    addEventListener(rotator, "mouseout", setRotatorTimeId);
    function clearRotatorTimeId() {
        clearInterval(timeId2);
    }

    function setRotatorTimeId() {
        timeId2 = setInterval(changeImg, 3000);
    }
};
function changeImg() {
    if (rotatorNum < 4) {
        rotatorNum++;
    } else {
        rotatorNum = 0;
    }
    rotator.style.backgroundImage = "url(" + rImgs[rotatorNum].children[0]["src"] + ")";
    rotator.style.backgroundSize = "100% auto";
    rImg.href = rImgs[rotatorNum].href;
    animate1(rImg, {"opacity": 0}, function () {
        rImg.children[0].src = rImgs[rotatorNum].children[0]["src"];
        rImg.style.opacity = 1;
    });
    lightTheBtns(rotatorNum);
}
function lightTheBtns(k) {
    for (var j = 0; j < rotatorBtns.length; j++) {
        rotatorBtns[j].style.borderColor = "rgba(255,255,255,0.2)";
        rotatorBtns[j].style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    rotatorBtns[k].style.borderColor = "rgba(0,0,0,0.4)";
    rotatorBtns[k].style.backgroundColor = "rgba(255,255,255,0.8)";
}
function clickBtns() {
    rotatorNum = (this.getAttribute("index") - 1) < 0 ? 4 : (this.getAttribute("index") - 1);
    changeImg();
}
function clickRLeft() {
    rotatorNum = (rotatorNum - 2) < 0 ? (rotatorBtns.length - Math.abs(rotatorNum - 2)) : (rotatorNum - 2);
    changeImg();
}


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
    }, 10);
}
