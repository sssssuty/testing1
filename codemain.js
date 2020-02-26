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
    }

    if (filter =="MOMA"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "MoMA creative team";
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".inputbar").css({"display": "none"});
        $(".end").css({"display": "block"});

        $("#displacement").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        // $("#jinhe").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
    }

    if (filter =="GOOGLE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Google creative team";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});

        $("#lacma").css({"display": "grid"});
        $("#nad").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        // $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="DROPBOX"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Dropbox digital product team";
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

    if (filter =="ADOBE"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Adobe design team";
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

    if (filter =="CHANEL"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Chanel";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});

        $("#mswho").css({"display": "grid"});
        $("#Amantes").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        // $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="PROPHET"){
        console.log(filter);
        document.getElementById("companyname").innerHTML = "Chanel";
        $(".inputbar").css({"display": "none"});
        // $("#fnamecopy1").css({"display": "block"});
        // $("#fnamecopy2").css({"display": "block"});
        $(".end").css({"display": "block"});

        $("#mswho").css({"display": "grid"});
        $("#Amantes").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
        $("#nad").css({"display": "grid"});
        $("#theheaven").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        // $("#displacement").css({"display": "grid"});
        // $("#jinhe").css({"display": "grid"});
    }
}
