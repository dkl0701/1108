// 轮播图的js 
var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
  }) 
  //自动播放
  var mySwiper = new Swiper('.swiper', {
    autoplay:true,//等同于以下设置
    /*autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      },*/
  });  
//   自适应布局
function setRem(){
    var ui_w=375;
    var client_w=document.documentElement.clientWidth||document.body.clientWidth;
    // console.log(ui_w,client_w);
    var html=document.getElementsByTagName('body')[0];
    // var html=document.documentElement('body')[0];//和上边的获取方式一样
    html.style.fontSize=(client_w/ui_w)*10+'px';
   
}   
// 防抖
var timer=null;
window.onresize=function(){
    clearTimeout(timer);
    timer=setTimeout(setRem,300);
}
// 当页面加载的时候也要调用一下setrem,目的是默认把html 根节点的字体大小 设置为10px
window.onload=setRem;
// setRem();//也是表示你页面加载的时候调用setRem

