var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("topmenu").style.marginTop = "-13vw";
  } else {
    document.getElementById("topmenu").style.marginTop = "-4vw";
  }
  prevScrollpos = currentScrollPos;
}

// if (window.pageYOffset > 200)