function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("fname");
    filter = input.value.toUpperCase();
    // console.log(filter);
    if (filter =="ALLWORK"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
        $(".project").css({"display": "grid"});
    }

    if (filter =="THEMET"){
        console.log(filter);
        $("#displacement").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
    }

    if (filter =="MOMA"){
        console.log(filter);
        $("#displacement").css({"display": "grid"});
        $("#lacma").css({"display": "grid"});
        $("#guggenheim").css({"display": "grid"});
        $("#rubin").css({"display": "grid"});
        $("#mswho").css({"display": "grid"});
        $("#proxi").css({"display": "grid"});
    }

    if (filter =="GOOGLE"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
        $("#lacma").css({"display": "grid"});
        $("#nad").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="DROPBOX"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
        $("#lacma").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="ADOBE"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
        $("#lacma").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        $("#randomcontrol").css({"display": "grid"});
    }

    if (filter =="FACEBOOK"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
        $("#lacma").css({"display": "grid"});
        $("#experienceyelp").css({"display": "grid"});
        $("#wulala").css({"display": "grid"});
        $("#letterc").css({"display": "grid"});
        $("#randomcontrol").css({"display": "grid"});
    }
}
