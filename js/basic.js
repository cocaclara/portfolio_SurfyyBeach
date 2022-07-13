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
      $('.header-wrap').hide().removeClass('on');
    }else if( currentTop <= delta ){  // 스크롤이 최상단일 때,
      $('.header-wrap').removeClass('on');
    }
    else{  // 스크롤을 올렸을때
      $('.header-wrap').addClass('on').show();
      // 스크롤 올렸을 때, 네비게이션 제어
      $('.gnb li').mouseover(function(){
        $('.header-wrap').addClass('on');
        $(this).find('.lnb').stop().slideDown();
      });
      $('.gnb').mouseout(function(){
        $('.header-wrap').addClass('on');
        $(this).find('.lnb').stop().slideUp(200);
      });
    }
    lastScrollTop = currentTop;

    // 섹션1 지날 때, 탑버튼 생성
    if( currentTop >= 300 ){
      $('.top').fadeIn();
    }else{
      $('.top').fadeOut();
    }
  });
  // 탑버튼 클릭 시, 최상단으로 이동
  $('.top').click(function(){
    $('html,body').animate({scrollTop:0},500);
    return false;
  });
});

