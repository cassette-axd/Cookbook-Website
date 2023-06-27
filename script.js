function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    var sessions = document.getElementById('sessions');

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs < 10) {
        hrs = "0"+ hrs;
    }
    if (mins < 10) {
        mins = "0"+ mins;
    }
    if (secs < 10) {
        secs = "0"+ secs;
    }

    if (hrs >= 12) {
        sessions.innerHTML = 'PM';
    }
    else {
        sessions.innerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;

}
setInterval(displayTime, 10);