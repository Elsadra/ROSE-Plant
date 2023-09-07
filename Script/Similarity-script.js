$(document).ready(function () {
  let menu_hamburger = $(".menu-hamburger");
  let sub_menu = $(".sub-menu");
  let line_one = $(".line-one");
  let line_two = $(".line-two");
  let line_tree = $(".line-tree");
  let slider_menu = $(".slider-menu");

  var isOpen = false;
  menu_hamburger.click(function () {
    if (!isOpen) {
      isOpen = true;
      line_one.addClass("line-one-click").removeClass("line-one");
      line_two.addClass("line-two-click").removeClass("line-two");
      line_tree.addClass("line-tree-click").removeClass("line-tree");
      sub_menu.css({
        position: "fixed",
        right: "0",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "65%",
        transition: ".4s",
      });
    } else {
      isOpen = false;
      line_one.addClass("line-one").removeClass("line-one-click");
      line_two.addClass("line-two").removeClass("line-two-click");
      line_tree.addClass("line-tree").removeClass("line-tree-click");
      sub_menu.css({
        position: "fixed",
        right: "-65%",
        transition: ".4s",
      });
      slider_menu.css({
        position: "fixed",
        right: "-35%",
        transition: ".4s",
      });
    }
  });
});