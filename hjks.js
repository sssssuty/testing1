function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "LOYALTY"){
      window.open("https://www.sutingyu.com/work/loyalty/index.html", "_self");
    }
    if (passcode == "DESIGN24"){
      window.open("https://www.sutingyu.com/work/productdesign/index.html", "_self");
    }
    if (passcode == "DESIGNWORK"){
      window.open("https://www.sutingyu.com/work/design/index.html", "_self");
    }
    if (passcode == "FINTECH"){
      window.open("https://www.sutingyu.com/work/fintech/index.html", "_self");
    }
    if (passcode == "DESIGNENGINEER"){
      window.open("https://www.sutingyu.com/work/designengineer/index.html", "_self");
    }
    if (passcode == "AMEX"){
      window.open("https://www.sutingyu.com/work/amex/index.html", "_self");
    }
    // if (passcode == "SELFF"){
    //   window.open("www.google.com", "_self");
    // }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }