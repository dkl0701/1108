function setRem() {
    // 设计师给的宽度和设备屏幕宽度
    var ui_w = 640;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
    // 最外层盒子
    var box = document.getElementsByClassName('box')[0];
    var num = (client_w) > (ui_w) ? (ui_w) : (client_w);
    box.style.width = num + 'px';
    box.style.margin = '0 auto';
    (client_w)>640?640:(client_w);
    document.documentElement.style='center';
}
// 调用函数
window.onresize=setRem;


