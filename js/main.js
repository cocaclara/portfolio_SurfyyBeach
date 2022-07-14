<<<<<<< Updated upstream
"use strict";

$(document).ready(function () {
  // // 색션1 - 이미지슬라이드
  $(".slider").bxSlider({
    auto: true,
    speed: 500,
    pause: 3500,
    auto: true, // 자동 슬라이드
    autoControls: false, // 시작, 정지버튼 노출 여부
    controls: false, // prev/next 버튼 노출 여부
    pager: false, // 블릿버튼
  });

  // 스크롤에 의한 슬라이드(섹션2 & 섹션4)
  $(window).scroll(function () {
    var $top = $(this).scrollTop(),
      $s1 = $(".sec1").height(),
      $s2 = $(".sec2").height(),
      $s3 = $(".sec3").height(),
      $s4 = $(".sec4").height();

    //섹션2 - img & .text
    if ($top >= ($s1 * 2) / 5) {
      // 섹션2 img 조절
      $(".sec2 img").css({ opacity: 1, top: "50%" });
    } else {
      $(".sec2 img").css({ opacity: 0, top: "40%" });
    }

    if ($top >= ($s1 * 9) / 10) {
      // 섹션2 .text 조절
      $(".sec2 .text").css({ opacity: 1, bottom: "95px" });
    } else {
      $(".sec2 .text").css({ opacity: 0, bottom: "180px" });
    }

    //섹션4 - .coach & .surf
    if ($top >= $s1 + $s2 + $s3) {
      // 섹션2 img 조절
      $(".sec4 .coach").css({ right: 0 });
    }

    if ($top >= $s1 + $s2 + $s3 + $s4 / 2) {
      // 섹션2 .text 조절
      $(".sec4 .surf").css({ right: 0 });
    }
  });
});
=======
"use strict";

$(document).ready(function () {
  //
  
  // 색션1 - 이미지슬라이드
  $(".slider").bxSlider({
    auto: true,
    speed: 500,
    pause: 3500,
    auto: true, // 자동 슬라이드
    autoControls: false, // 시작, 정지버튼 노출 여부
    controls: false, // prev/next 버튼 노출 여부
    pager: false, // 블릿버튼
  });

  // 스크롤에 의한 슬라이드(섹션2 & 섹션4)
  $(window).scroll(function () {
    var $top = $(this).scrollTop(),
      $s1 = $(".sec1").height(),
      $s2 = $(".sec2").height(),
      $s3 = $(".sec3").height(),
      $s4 = $(".sec4").height();

    //섹션2 - img & .text
    if ($top >= ($s1 * 2) / 5) {
      // 섹션2 img 조절
      $(".sec2 img").css({ opacity: 1, top: "50%" });
    } else {
      $(".sec2 img").css({ opacity: 0, top: "40%" });
    }

    if ($top >= ($s1 * 9) / 10) {
      // 섹션2 .text 조절
      $(".sec2 .text").css({ opacity: 1, bottom: "95px" });
    } else {
      $(".sec2 .text").css({ opacity: 0, bottom: "180px" });
    }

    //섹션4 - .coach & .surf
    if ($top >= $s1 + $s2 + $s3) {
      // 섹션2 img 조절
      $(".sec4 .coach").css({ right: 0 });
    }

    if ($top >= $s1 + $s2 + $s3 + $s4 / 2) {
      // 섹션2 .text 조절
      $(".sec4 .surf").css({ right: 0 });
    }
  });
});
>>>>>>> Stashed changes
