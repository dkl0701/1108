//   自适应布局

function setRem() {
    var ui_w = 640;

    var client_w = document.documentElement.clientWidth || document.body.clientWidth;

    // console.log(ui_w,client_w);

    var html = document.getElementsByTagName('html')[0];

    // var html=document.documentElement('html')[0];//和上边的获取方式一样

    html.style.fontSize = (client_w / ui_w) * 10 + 'px';

    // 获得最外层盒子
    var box = document.getElementsByClassName("box")[0];
    if (client_w > ui_w) {
        box.style.width = ui_w + "px";
        box.style.margin = "0 auto";
    }
    //搜索区
    var jdHeader = document.getElementsByClassName("jd-header")[0];
    if (client_w > ui_w) {
        // jdHeader.style.left = "50%";
        jdHeader.style.marginLeft = -ui_w/3 + "px"; 
    }
    // banner图  当屏幕的宽超过640的时候主图会覆盖下边的内容  没实现
    // var b=document.getElementsByClassName("banner")[0];
    // if (client_w > ui_w){
    //     b.style.width=client_w;
    //     b.style.transform.scale= 1.5;
    // }
}

// 防抖

var timer = null;

window.onresize = function () {
    clearTimeout(timer);

    timer = setTimeout(setRem, 300);

}

// 当页面加载的时候也要调用一下setRem,目的是默认把html 根节点的字体大小 设置为10px

window.onload = setRem;

// setRem();//也是表示你页面加载的时候调用setRem
