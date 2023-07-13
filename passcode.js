function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "FACEBOOK"){
      window.open("https://www.sutingyu.com/facebook/index.html", "_self");
    }
    if (passcode == "CMU"){
      window.open("https://www.sutingyu.com/cmu/index.html", "_self");
    }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }