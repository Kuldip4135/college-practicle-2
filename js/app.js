$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");

    if (value == "all") {
      //show all images
      $(".gallery-img-item").show("1000");
    } else {
      //hide images from inactive section
      $(".gallery-img-item")
        .not("." + value)
        .hide("1000");

      //filter active section images
      $(".gallery-img-item")
        .filter("." + value)
        .show("1000");
    }
  });
  $(".list").click(function () {
    //it will add active class according to section which is active
    $(this).addClass("active").siblings().removeClass("active");
  });
});
