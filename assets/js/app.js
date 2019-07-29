// TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// MENU RECUEILS FIX
$('#recueils-collapse')
  .on('show.bs.collapse', function () {
    this.style.display = "contents";
})
  .on('hide.bs.collapse', function () {
    this.style.display = "none";
  })
