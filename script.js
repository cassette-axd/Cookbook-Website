function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    let period = 'AM';
    let clock = document.querySelector('.container');

    if (hrs > 12) {
        period = 'PM';
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
    if ((hrs >= 6 && period == 'PM') || (hrs >= 0 && period == 'AM')) {
        document.body.style.backgroundImage = "url('summer_night.jpeg')";
        clock.style.color = 'white';
    }
    else if ((hrs >= 6 && period == 'AM') || (hrs >= 0 && period == 'PM')) {
        document.body.style.backgroundImage = "url('summer_day.jpg')";
        clock.style.color = 'white';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
    document.getElementById('sessions').innerHTML = period;

    

}
setInterval(displayTime, 10);