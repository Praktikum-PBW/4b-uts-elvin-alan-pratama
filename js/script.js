var items = $("a");
items.on("click", function () {
  items.removeClass("nav-visited");
  $(this).toggleClass("nav-visited");
});
