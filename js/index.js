function startClock(){
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("second");

    var date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();

}

var set_Interval = setInterval(startClock, 1000)