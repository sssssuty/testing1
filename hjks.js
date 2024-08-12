function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "FRONTEND"){
      window.open("https://www.sutingyu.com/frontend/index.html", "_self");
    }
    if (passcode == "DESIGN24"){
      window.open("https://www.sutingyu.com/design/index.html", "_self");
    }
    if (passcode == "SELFF"){
      window.open("www.google.com", "_self");
    }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }