'use strict';

$(document).ready(function(){
  // 네비게이션 제어
  $('.header-wrap').mouseover(function(){
    $('.header-wrap').addClass('on');
  });
  $('.header-wrap').mouseout(function(){
    $('.header-wrap').removeClass('on');
    $(this).find('.lnb').css('display','none');
  });
  $('.gnb li').mouseover(function(){
    // $(this).find('.lnb').stop().slideDown(300);
  });
  $('.gnb').mouseout(function(){
    $('.header-wrap').removeClass('on');
    // $(this).find('.lnb').stop().slideUp(300);

  });


});

