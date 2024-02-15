function startTimer() {
    var timerInput = document.getElementById('timerInput').value;
    var timer = timerInput, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            timer = 0;
            alert('Timer finished!');
        }
    }, 1000);
}

setInterval(function () {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    document.getElementById('clockTime').textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);

function setAlarm() {
    var alarmInput = document.getElementById('alarmTime').value;
    var alarmTime = new Date(alarmInput);

    var now = new Date();
    var timeToAlarm = alarmTime.getTime() - now.getTime();
    if (timeToAlarm >= 0) {
        setTimeout(function () {
            alert('Alarm ringing!');
        }, timeToAlarm);
    }
}

