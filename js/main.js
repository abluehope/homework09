$(function () {
  $(".custom_service .la_chg span").on("click", function () {
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
});
