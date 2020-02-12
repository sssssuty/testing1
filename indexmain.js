$( document ).ready(function() {

    var elem = document.getElementById("moving1");
    var num = 0;
    // var num = setInterval(frame, 5);
    // console.log(num);

    setInterval(function(){
        if (num == 0){
        elem.innerHTML = "loves to hear from the team and contribute mine.";
        };

        if (num == 1) {
        elem.innerHTML = "values ideation, process and final execution.";
        };

        if (num == 2) {
        elem.innerHTML = "enjoys storytelling with various formats and mediums.";
        };

        if (num == 3) {
        elem.innerHTML = "wants to know about you and perhaps, work with you :)";
        };

        if (num == 4) {
        elem.innerHTML = "believes design has the power to make a difference.";
        num = -1;
        };



        // console.log(num);
        num++;

    }, 1500);

});
