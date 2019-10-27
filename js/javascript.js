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
    // Disable Scrolling
    $('html body').css('overflow-y', 'hidden');
  } else {
    canToggle = true;
  }
}
function hideModal() {
  mdlToggle(dataMdl);
  canToggle = false;
  // Enable Scrolling
  $('html body').css('overflow-y', 'auto');
}
$(".mdlOpen").click(function() {
  dataMdl = "#" + $(this).data("modal");
  mdlToggle(dataMdl);
});
$("#mdlCurtain").click(function() {
  hideModal();
});
$(".mdlClose").click(function() {
  hideModal();
});
$(".mdlContainer").click(function() {
  hideModal();
});