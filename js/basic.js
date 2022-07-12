'use strict';

$(document).ready(function(){
  // 네비게이션 제어
  $('.gnb li').mouseover(function(){
    $('.header-wrap').addClass('on');
    $(this).find('.lnb').stop().slideDown();
  });
  $('.gnb').mouseout(function(){
    $('.header-wrap').removeClass('on');
    $(this).find('.lnb').stop().slideUp(200);
  });
  // 스크롤 내릴 시, 헤더 사라지고 스크롤 올릴 시 생김
  var lastScrollTop = 0,
      delta = 15;
  $(window).scroll(function(){
    
  });

  // 이용안내
  $('ul.guide_list>li').click(function(){
    if($(this).find('.guide_cont').is(':hidden')){
      $('ul.guide_list>li').removeClass('on');
      $(this).addClass('on');
    }else{
      $(this).removeClass('on');
    }
  });
});