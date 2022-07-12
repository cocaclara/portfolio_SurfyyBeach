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
    var currentTop = $(this).scrollTop();
    if( Math.abs(lastScrollTop - currentTop) <= delta )
    return; // 스크롤값을 받아서 리턴한다.

    if( currentTop > lastScrollTop && lastScrollTop > 0 ){ // 스크롤을 내렸을때 
      $('.header-wrap').slideUp();
    }else{  // 스크롤을 올렸을때
      $('.header-wrap').slideDown();
    }
    lastScrollTop = currentTop;
  });
});

