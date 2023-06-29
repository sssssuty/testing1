function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "FACEBOOK"){
      window.open("https://www.sutingyu.com/facebook.html", "_self");
    }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }