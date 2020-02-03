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
        $(".inputbar").css({"display": "none"});
    }

    if (filter =="GOOGLE"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
    }

    if (filter =="DROPBOX"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
    }

    if (filter =="ANDWALSH"){
        console.log(filter);
        $(".inputbar").css({"display": "none"});
    }
}
