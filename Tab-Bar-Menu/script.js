$(function() {
  $(".navigation-tab-item").click(function() {
    $(".navigation-tab-item").removeClass("active");
    $(this).addClass("active");
    $(".navigation-tab-overlay").css({
      left: $(this).prevAll().length * 130 + "px"
    });
  });
});
