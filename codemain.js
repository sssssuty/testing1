function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("fname");
    filter = input.value.toUpperCase();
    // console.log(filter);
    if (filter =="ALLWORK"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "ALLWORK";
        $(".inputbar").css({"display": "none"});
        $(".project").css({"display": "grid"});
    }

    if (filter =="THEMET"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "creative team from the MET";
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".inputbar").css({"display": "none"});
        $(".end").css({"display": "block"});

        $("#displacement").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#jinhe").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#janesmith").css({"display": "grid"});
    }

    if (filter =="MOMA"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "MoMA";
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".inputbar").css({"display": "none"});
        $(".end").css({"display": "block"});

        $("#displacement").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#jinhe").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#janesmith").css({"display": "grid"});
        
    }

    if (filter =="GOOGLE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Google Creative Lab";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        $("#fnamecopy2").css({"display": "block"});
        // $("#fnamecopy2").setAttribute("href", "files/TingyuSu_Resume.pdf");
        $(".end").css({"display": "block"});
        $("#theheaven").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $(".uiux").css({"display": "grid"});
        $("#displacement").css({"display": "grid"});
    }

    if (filter =="CREATIVELAB5"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Google Creative Lab";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        $("#fnamecopy2").css({"display": "block"});
        // $("#fnamecopy2").setAttribute("href", "files/TingyuSu_Resume.pdf");
        $(".end").css({"display": "block"});
        $("#theheaven").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $(".uiux").css({"display": "grid"});
        $("#displacement").css({"display": "grid"});
    }

    if (filter =="CREATIVELAB"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Google Creative Lab";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        $("#fnamecopy2").css({"display": "block"});
        // $("#fnamecopy2").setAttribute("href", "files/TingyuSu_Resume.pdf");
        $(".end").css({"display": "block"});
        $("#theheaven").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $(".uiux").css({"display": "grid"});
        $("#displacement").css({"display": "grid"});
    }

    if (filter =="DROPBOX"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Dropbox digital product team";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="ADOBE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Adobe design team";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="FACEBOOK"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Facebook digital product team";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});

        $("#lacma").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        // $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="IBM"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "IBM";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});

        $("#lacma").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        // $("#randomcontrol").css({"display": "grid"});
    }

    // if (filter =="CHANEL"){
    //     console.log(filter);
    //     document.getElementById("companyname").innerHTML = "Chanel";
    //     $(".inputbar").css({"display": "none"});
    //     // $("#fnamecopy1").css({"display": "block"});
    //     // $("#fnamecopy2").css({"display": "block"});
    //     $(".end").css({"display": "block"});

    //     $("#mswho").css({"display": "grid"});
    //     $("#Amantes").css({"display": "grid"});
    //     $("#guggenheim").css({"display": "grid"});
    //     $("#lacma").css({"display": "grid"});
    //     $("#proxi").css({"display": "grid"});
    //     // $("#randomcontrol").css({"display": "grid"});
    // }

    if (filter =="PROPHET"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Prophet";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="SUPERUNION"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Superunion";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="STERLING"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Sterling";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="MBOOTH"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "M Booth";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="METHOD"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Method";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }

    if (filter =="RODRIGO"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Rodrigo";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="WORK&CO"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Work&Co";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="BREEL"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "B-Reel";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="VIRTUE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Virtue";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="CODECADEMY"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Codecademy";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="CAPACITY"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Capacity";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="SQUARESPACE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Squarespace";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="FAHRENHEIT212"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Fahrenheit212";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="THEORCHARD"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "The Orchard";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="ARULIDEN"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Aruliden";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="BLUESTATE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Blue State";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="AKQA"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "AKQA";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="DOLBY"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Dolby";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
        $(".theheaven").css({"display": "grid"});      
    }

    if (filter =="SIDLEE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Sid Lee";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }

    if (filter =="SIEGEL+GALE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Siegel+Gale";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="NYTIMES"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "New York Times";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }
    if (filter =="SIEGEL+GALE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Siegel+Gale";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="RGA"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "R/GA";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="UBEREATS"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Uber Eats";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
    }

    if (filter =="ATLANTIC"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Atlantic Theater";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});
        $("#displacement").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#jinhe").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#janesmith").css({"display": "grid"});
    }
    if (filter =="ONEPLUS"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "OnePlus";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".uiux").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="INTERBRAND"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Interbrand";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="WOFFOLINS"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Woff Olins";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="WK"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Wieden+Kennedy";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
        // $("#letterc").css({"display": "block"});
    }
    if (filter =="DAYONE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Day One";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="BARREL"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Barrel";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="THECHARLES"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "The Charles";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="RAPT"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Rapt Studio";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="ARTSY"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Artsy";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="SPARK"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Spark";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="GSG"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "GSG";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
    }
    if (filter =="LAMINGTON"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Lamington";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="VIVALDI"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Vivaldi";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="LIPPINCOTT"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Lippincott";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="FLUENT"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Fluent";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="FANTASY"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Fantasy";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".design").css({"display": "grid"});
        $(".end").css({"display": "block"});
    }
    if (filter =="WWD"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "WWD";
        $(".inputbar").css({"display": "none"});
        $("#fnamecopy1").css({"display": "block"});
        $(".end").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        // $(".design").css({"display": "grid"});
        $("#janesmith").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#Amantes").css({"display": "grid"});
        $("#displacement").css({"display": "grid"});
        $("#guggenheim1").css({"display": "grid"});
        $("#rubin1").css({"display": "grid"});
    }


}
