$( document ).ready(function(){
    var elem = document.getElementById("moving1");
    var num = 0;
    setInterval(function(){
        if (num == 0){
        elem.innerHTML = "speaks English, Mandarin, Javascript, and Java.";
        };

        if (num == 1) {
        elem.innerHTML = "bridges creative vision and business strategy with execution.";
        };

        if (num == 2) {
        elem.innerHTML = "crafts stories across mediums to inspire and connect.";
        };

        if (num == 3) {
        elem.innerHTML = "thrives on collaboration and building teams.";
        };

        if (num == 4) {
        elem.innerHTML = "directs product design and art direction with vision.";
        num = -1;
        };

        num++;

    }, 2000);

});