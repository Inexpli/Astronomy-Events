const Event = '18:00:00 13 Apr 2029 EST';

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
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("minutes").innerHTML = formatTime(minutes);
    document.getElementById("seconds").innerHTML = formatTime(seconds);
    
    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}

setInterval(countdown, 1000);


countdown();