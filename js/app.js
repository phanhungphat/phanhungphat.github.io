//! nút trở về đầu trang
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 100) {
    $('#back-to-top').fadeIn();
  } else {
    $('#back-to-top').fadeOut();
  }
});
$(document).ready(function () {
  $("#back-to-top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
//! /.nút trở về đầu trang