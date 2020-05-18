function myFunctionEnlargeSmall(elmnt,clr, nam) {
    elmnt.style.height = clr;
    document.getElementById(nam).style.animationName = "animationOne";
}
// function myFunctionEnlargeBig(elmnt,clr) {
//     elmnt.style.height = clr;
// }
function myFunctionEnlargeBig(clr) {
  window.open(clr);
}

function myFunctionShrink(elmnt,clr) {
    // console.log("haha");
    elmnt.style.height = clr;
    // document.getElementById('photo1').style.animationName = "animationTwo";
    // document.getElementById('photo2').style.animationName = "animationTwo";
    // document.getElementById('photo3').style.animationName = "animationTwo";
    // document.getElementById('photo4').style.animationName = "animationTwo";
    // document.getElementById('photo5').style.animationName = "animationTwo";
    // document.getElementById('photo6').style.animationName = "animationTwo";
    // document.getElementById('photo7').style.animationName = "animationTwo";
    // document.getElementById('photo8').style.animationName = "animationTwo";
    document.getElementById('photo9').style.animationName = "animationTwo";
    document.getElementById('photo10').style.animationName = "animationTwo";
    document.getElementById('photo11').style.animationName = "animationTwo";
    document.getElementById('photo12').style.animationName = "animationTwo";
    document.getElementById('photo13').style.animationName = "animationTwo";
    document.getElementById('photo14').style.animationName = "animationTwo";
    // document.getElementById('photo15').style.animationName = "animationTwo";
    // document.getElementById('photo16').style.animationName = "animationTwo";
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML ="NYC " + h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topmenu").style.marginTop = "-4vw";
  } else {
    document.getElementById("topmenu").style.marginTop = "-10.5vw";
  }
  prevScrollpos = currentScrollPos;
}
