$(function () {
  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    if (sct > 0) {
      $(".header, .to_top").addClass("on");
    } else {
      $(".header, .to_top").removeClass("on");
    }
  });

  $(".la_chg span").on("click", function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("on");
  });

  $(".main_slide").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: false,
    fade: true,
    arrows: false,
  });

  $(".main_visual .arrows .left").on("click", function () {
    $(".main_slide").slick("slickPrev");
  });
  $(".main_visual .arrows .right").on("click", function () {
    $(".main_slide").slick("slickNext");
  });

  // 공지사항 대관공고 탭
  $(".tab_link li").on("click", function (event) {
    event.preventDefault();

    let idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_content .con").eq(idx).addClass("on").siblings().removeClass("on");
  });

  $(".banner_slide").slick({
    arrows: false,
  });

  $(".main_notice .banner_arrows .left").on("click", function () {
    $(".banner_slide").slick("slickPrev");
  });
  $(".main_notice .banner_arrows .right").on("click", function () {
    $(".banner_slide").slick("slickNext");
  });

  $(".movie_slide").on("init afterChange", function (e, s, c) {
    $(".main_movie .itm").eq(c).addClass("on").siblings().removeClass("on");
  });

  $(".movie_slide").slick({
    arrows: false,
    variableWidth: true,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".main_movie .arrow_next .next").on("click", function () {
    $(".movie_slide").slick("slickNext");
  });

  $(".family_link span").on("click", function () {
    $(this).toggleClass("on");
    $(this).next().toggleClass("on");
  });

  $(".to_top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  $(window).on("scroll", function () {
    let sct = $(window).scrollTop();
    sct > 1000 ? $(".to_top").addClass("on") : $(".to_top").removeClass("on");
  });
});
