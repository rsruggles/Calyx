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
var dataMdl;
function mdlToggle(dataModal) {
  // Prevent Firing twice
  if (canToggle === true) {
    $(dataModal).toggle();
    $("#mdlCurtain").fadeToggle("fast", "linear");
  } else {
    canToggle = true;
  }
}
$(".mdlOpen").click(function() {
  dataMdl = "#" + $(this).data("modal");
  mdlToggle(dataMdl);
});
$("#mdlCurtain").click(function() {
  mdlToggle(dataMdl);
});
$(".mdlClose").click(function() {
  mdlToggle(dataMdl);
  canToggle = false;
});
$(".mdlContainer").click(function() {
  canToggle = false;
});