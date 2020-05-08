function initDoc() {
  oDoc = document.getElementById("textBox");
  sDefTxt = oDoc.innerHTML;
  if (document.compForm.switchMode.checked) { setDocMode(true); }
}

function formatDoc(sCmd, sValue) {
  if (validateMode()) { document.execCommand(sCmd, false, sValue); oDoc.focus(); }
}

function validateMode() {
  if (!document.compForm.switchMode.checked) { return true ; }
  alert("Uncheck \"Show HTML\".");
  oDoc.focus();
  return false;
}

function setDocMode(bToSource) {
  var oContent;
  if (bToSource) {
    oContent = document.createTextNode(oDoc.innerHTML);
    oDoc.innerHTML = "";
    var oPre = document.createElement("pre");
    oDoc.contentEditable = false;
    oPre.id = "sourceText";
    oPre.contentEditable = true;
    oPre.appendChild(oContent);
    oDoc.appendChild(oPre);
    document.execCommand("defaultParagraphSeparator", false, "div");
  } else {
    if (document.all) {
      oDoc.innerHTML = oDoc.innerText;
    } else {
      oContent = document.createRange();
      oContent.selectNodeContents(oDoc.firstChild);
      oDoc.innerHTML = oContent.toString();
    }
    oDoc.contentEditable = true;
  }
  oDoc.focus();
}



function myFunction(){
 var element = document.getElementById("bird");
 var element2 = document.getElementById("branch");
 var element3 = document.getElementById("branch2");
 var desiredPosition = 500;
 if(window.pageYOffset >= desiredPosition){
     element.style += "position: fixed; right: -25vw; top: -6vw;";
     element2.style += "position: fixed; left: -55vw; top: -5vw; width: 80vw";
     element3.style += "position: fixed; left: -37vw; top: 35vw; width: 60vw;";
   }
 else {
    element.style += "position: fixed; right: -5vw; top: -6vw;";
    element2.style += "position: fixed; left: -40vw; top: -5vw; width: 80vw";
    element3.style += "position: fixed; left: -20vw; top: 35vw; width: 60vw;";
  }
}
