/************************************************************
 FIX OPEN MODAL KILLING BODY SCROLLBAR
************************************************************/
$('#modalDonation')
  .on('show.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "inherit";
  })
  .on('hide.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "initial";
  });

/************************************************************
 MAKE TOPBTN SCROLLTOFIXED
************************************************************/
$(document).ready(function() {
  $('#topBtn').scrollToFixed( {
    bottom: 8,
    limit: $('#topBtn').offset().top
  });
});
