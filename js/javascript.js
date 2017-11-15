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
function mdlToggle () {
  event.stopPropagation();
  $("#mdlCurtain").fadeToggle("slow", "linear");
}
$("#mdlOpen").click(function() {
  mdlToggle();
});
$("#mdlCurtain").click(function() {
  mdlToggle();
});
$(".mdlClose").click(function() {
  mdlToggle();
});