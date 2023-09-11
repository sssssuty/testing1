function myFunction() {
    var fname = document.getElementById("fname").value;
    var passcode = fname.toUpperCase();
    if (passcode == "CISCO"){
      window.open("https://www.sutingyu.com/cisco/index.html", "_self");
    }
    if (passcode == "FIGMA"){
      window.open("https://www.sutingyu.com/figma/index.html", "_self");
    }
    if (passcode == "IBM"){
      window.open("https://www.sutingyu.com/ibm/index.html", "_self");
    }
    if (passcode == "EVERYTHING"){
      window.open("https://www.sutingyu.com/allprojects/index.html", "_self");
    }
    if (passcode == "PWC"){
      window.open("https://www.sutingyu.com/pwc/index.html", "_self");
    }
    if (passcode == "PEPSICO"){
      window.open("https://www.sutingyu.com/pepsico/index.html", "_self");
    }
    if (passcode == "WALMART"){
      window.open("https://www.sutingyu.com/walmart/index.html", "_self");
    }
    if (passcode == "CZI"){
      window.open("https://www.sutingyu.com/chanzuckerberginitiative/index.html", "_self");
    }
    if (passcode == "OKTA"){
      window.open("https://www.sutingyu.com/okta/index.html", "_self");
    }
    else{
      document.getElementById("noti").style.display = "inline-block";
    }
  }