function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("fname");
    filter = input.value.toUpperCase();
    if (filter =="ALLWORK"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    // if (filter =="BREEL"){
    //     $(".inputbar").css({"display": "none"});
    //     $(".viewmore").css({"visibility": "visible"});
    // }
    if (filter =="BARREL"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="SUPERUNION"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="FRANKLYN"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="VIVALDI"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="THESHED"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    // if (filter =="ARTSY"){
    //     $(".inputbar").css({"display": "none"});
    //     $(".viewmore").css({"visibility": "visible"});
    // }
    if (filter =="ROANDCO"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="APPLE"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="BBDO"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="SOMEODDPILOT"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="BYTE"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="OGILVY"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
    if (filter =="REDANTLER"){
        $(".inputbar").css({"display": "none"});
        $(".viewmore").css({"visibility": "visible"});
    }
}

function myFunctionAll(){
    $(".project").css({"display": "initial"});
    $("button").css({"text-decoration": "none"});
    $("#buttonAll").css({"text-decoration": "underline","text-decoration-style": "wavy"});
}

function myFunctionArt(){
    $(".project").css({"display": "none"});
    $(".art").css({"display": "initial"});
    $("button").css({"text-decoration": "none"});
    $("#buttonArt").css({"text-decoration": "underline","text-decoration-style": "wavy"});
}
function myFunctionBrand(){
    $(".project").css({"display": "none"});
    $(".brand").css({"display": "initial"});
    $("button").css({"text-decoration": "none"});
    $("#buttonBrand").css({"text-decoration": "underline","text-decoration-style": "wavy"});
}
function myFunctionMotion(){
    $(".project").css({"display": "none"});
    $(".motion").css({"display": "initial"});
    $("button").css({"text-decoration": "none"});
    $("#buttonMotion").css({"text-decoration": "underline","text-decoration-style": "wavy"});
}
function myFunctionPrint(){
    $(".project").css({"display": "none"});
    $(".print").css({"display": "initial"});
    $("button").css({"text-decoration": "none"});
    $("#buttonPrint").css({"text-decoration": "underline","text-decoration-style": "wavy"});
}
