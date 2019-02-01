var toggleStatus = 1;
function toggleMenu() {
if (toggleStatus == 1) {
  document.getElementById("ss").style.left = "0px";
  toggleStatus = 0;
} else if (toggleStatus == 0) {
  document.getElementById("ss").style.left = "300rem";
  toggleStatus = 1;
}
}$(document).ready(function() {
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 8000);
    return false;

  }); // click() sc

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END
  $(document).ready(function(){
    $('.slickSlider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1000,
      speed: 300,
      slidesToShow: 2,
      adaptiveHeight: true, adaptiveWidth: true  });
    });
    

}); // ready() END$(document).ready(function(){$(document).ready(function(){
 