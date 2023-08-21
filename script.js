function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();
    var secs = dateTime.getSeconds();
    let period = 'AM';
    var month = dateTime.getMonth() + 1;
    var day = dateTime.getDate();
    var year = dateTime.getFullYear();

    // this is in case i want to change the color or style of the clock later
    let clock = document.querySelector('.container');
    clock.style.color = 'white';

    // change period if past 12
    if (hrs > 12) {
        period = 'PM';
        hrs = hrs - 12;
    }

    // change 0 to 12 for format/presentation
    if (hrs == 0) {
        hrs = 12;
    }

    // fix format of single digits on date/time
    if (hrs < 10) {
        hrs = "0"+ hrs;
    }

    if (mins < 10) {
        mins = "0"+ mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }

    if (day < 10) {
        day = "0" + day;
    }

    // check night
    if (hrs >= 6 && period == 'PM') {
        document.body.style.backgroundImage = "url('summer_night.jpeg')";
    }
    else if ((hrs >= 0 && hrs < 6) && period == 'AM') {
        document.body.style.backgroundImage = "url('summer_night.jpeg')";
    }
    else {
        document.body.style.backgroundImage = "url('summer_day.jpg')";
    }

    // change the month to word format
    const months = ["error", "Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
    if (month > 12 || month <= 0) {
        month = 0;
    }
    var index = month;
    month = months[index];
    day = day + ", ";

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;
    document.getElementById('sessions').innerHTML = period;
    document.getElementById('month').innerHTML = month;
    document.getElementById('day').innerHTML = day;
    document.getElementById('year').innerHTML = year;

}
setInterval(displayTime, 10);