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

/////////////////////////////////////////////////////////////
// VERSION
/////////////////////////////////////////////////////////////
$.getJSON('https://api.github.com/repos/inwardmovement/inwardmovement.github.io/git/refs/heads/source', function(data) {
  var version = document.getElementById('repo-version');
  version.innerHTML = data.object.sha.substr(0, 7);
});
