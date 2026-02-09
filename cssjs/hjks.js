function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "THOUGHTFUL"){
      window.open("https://www.sutingyu.com/work/thoughtful/index.html", "_self");
    }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }