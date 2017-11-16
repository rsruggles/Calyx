//////////////////
//  NAVIGATION  //
//////////////////
$('.menu-btn').click(function() {
  console.log('toggle navigation');
  $('.menu').slideToggle(200);
});

$(window).resize(function(){
  if ($(window).width() > 680) {
    if ( $('.menu').css('display') == 'none' ){
      $('.menu').show();
    }
  } else {
    $('.menu').hide();
  }
});

////////////////////
//  POP UP MODALS //
////////////////////
var canToggle = true;
function mdlToggle () {
  // Prevent Firing twice
  if (canToggle === true) {
    $("#mdlCurtain").fadeToggle("fast", "linear");
  } else {
    canToggle = true;
  }
}
$("#mdlOpen").click(function() {
  mdlToggle();
});
$("#mdlCurtain").click(function() {
  mdlToggle();
});
$(".mdlClose").click(function() {
  mdlToggle();
  canToggle = false;
});
$(".mdlContainer").click(function() {
  canToggle = false;
});