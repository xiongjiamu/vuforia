/**
 * Created by yangyin on 2015-9-25.
 */

/* 导航当前选项 开始*/
function navCur(attr,attrCur){
  $(attr).click(function(){
    $(this).addClass(attrCur).siblings().removeClass(attrCur);
  });
}
/* 导航当前选项 结束*/

/* 移动端显示隐藏导航 开始*/
function navMShow(){
  $('.nav_icon').click(function(){
    $('.mobile_navBox').toggleClass('mobile_NBShow');
    $('.mobile_nav').toggleClass('mobile_NShow');
  });
  $('.mobile_navBox').click(function () {
    $(this).removeClass('mobile_NBShow');
    $('.mobile_nav').removeClass('mobile_NShow');
  });
}
/* 移动端显示隐藏导航 结束*/

/* 顶部定位跟随  开始*/
function navTopH(){
  $(document).scroll(function(){
    var LPTopH = $(document).scrollTop() ||  $(window).scrollTop();
    if(LPTopH>1){
      $('.nav_all').addClass('navAll_fixed');
    }else{
      $('.nav_all').removeClass('navAll_fixed');
    };
  });
}
/* 顶部定位跟随  结束*/

/* tabs 开始  */
function tabs(class01,eve,class02){
  $(class01).on(eve,function(){
    $(this).addClass('tabTit_active').siblings('li').removeClass('tabTit_active');
    var num = $(this).index();
    $(class02).eq(num).addClass('tabCon_active').siblings().removeClass('tabCon_active');
  })
}
/* tabs 结束  */