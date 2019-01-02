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

/************************************************************
 ENABLE TARTEAUCITRON
************************************************************/
tarteaucitron.user.gtagUa = 'UA-114704921-1';
(tarteaucitron.job = tarteaucitron.job || []).push('gtag');

tarteaucitron.init({
  "orientation": "bottom",
  "removeCredit": true,
  "moreInfoLink": false,
  "privacyUrl": "",
  "showAlertSmall": false,
  "adblocker": false,
  "hashtag": "#tarteaucitron",
  "cookieName": "tartaucitron",
  "cookieslist": true,
  "AcceptAllCta": true,
  "highPrivacy": true,
  "handleBrowserDNTRequest": false
});

/************************************************************
 ENABLE BARBA
************************************************************/
Barba.Pjax.start();
