const Event = '11:13:50 26 May 2021 UT';

function countdown() {
    const EventDate = new Date(Event);
    const currentDate = new Date();

    const totalSeconds = (EventDate - currentDate) / 1000;

    const years = Math.floor(totalSeconds/3600/24/365);
    const days = Math.floor(totalSeconds / 3600 / 24)%365;
    const hours = Math.floor(totalSeconds/3600) %24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds)%60;

    document.getElementById("years").innerHTML = years;
    document.getElementById("days").innerHTML = formatTime(days);
    if (days<=10) {
        document.getElementById("days").innerHTML = days;
    }
    document.getElementById("hours").innerHTML = formatTime(hours);
    if (hours<=10) {
        document.getElementById("hours").innerHTML = hours;
    }
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    if (minutes<=10) {
        document.getElementById("minutes").innerHTML = minutes;
    }
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    if(totalSeconds <=0) {
        document.getElementById("years").innerHTML = '0';
        document.getElementById("days").innerHTML = '0';
        document.getElementById("hours").innerHTML = '0';
        document.getElementById("minutes").innerHTML = '0';
        document.getElementById("seconds").innerHTML = '0';
    }

}

setInterval(countdown, 1000);


countdown();