/////////////////////////////////////////////////////////////
// MODAL
/////////////////////////////////////////////////////////////
$('#modalDonation')
  .on('show.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "inherit";
  })
  .on('hide.bs.modal', function (e) {
    document.querySelector("html").style.overflow = "initial";
  })
