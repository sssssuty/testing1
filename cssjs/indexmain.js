$( document ).ready(function() {

    var elem = document.getElementById("moving1");
    var num = 0;

    setInterval(function(){
        if (num == 0){
        elem.innerHTML = "loves to hear from the team and contribute mine.";
        };

        if (num == 1) {
        elem.innerHTML = "values ideation, process and final execution.";
        };

        if (num == 2) {
        elem.innerHTML = "enjoys storytelling with various mediums.";
        };

        if (num == 3) {
        elem.innerHTML = "wants to work with you :)";
        };

        if (num == 4) {
        elem.innerHTML = "believes in the power of design.";
        num = -1;
        };

        num++;

    }, 3000);

});

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