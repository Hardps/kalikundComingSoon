$(window).on("load", function () {
  "use strict";

  setTimeout(function () {
    $(".loader").addClass("fade-dark");
    $(".loader__logo").removeClass("slideInDown").addClass("flipOutY");
    $(".loader__caption").removeClass("slideInUp").addClass("fadeOutDown");
  }, 1000);

  setTimeout(function () {
    $(".loader").addClass("loaded");
  }, 1700);

  setTimeout(function () {
    $("#main").addClass("loaded");
  }, 1900);
});
