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
 TOP BUTTON
************************************************************/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/************************************************************
 TARTEAUCITRON
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
