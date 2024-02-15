let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  document.getElementById('start').disabled = true;
  document.getElementById('pause').disabled = false;
}

function pauseTimer() {
  clearInterval(timer);
  document.getElementById('start').disabled = false;
  document.getElementById('pause').disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
  document.getElementById('start').disabled = false;
  document.getElementById('pause').disabled = true;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hoursDisplay = String(hours).padStart(2, '0');
  const minutesDisplay = String(minutes).padStart(2, '0');
  const secondsDisplay = String(seconds).padStart(2, '0');
  document.getElementById('hours').textContent = hoursDisplay;
  document.getElementById('minutes').textContent = minutesDisplay;
  document.getElementById('seconds').textContent = secondsDisplay;
}


setInterval(function () {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  document.getElementById('clockTime').textContent = hours + ":" + minutes + ":" + seconds;
}, 1000);

function setAlarm() {
  const alarmTime = document.getElementById('alarmTime').value;
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const alarm = new Date();
  alarm.setHours(alarmTime.substr(0, 2));
  alarm.setMinutes(alarmTime.substr(3, 2));

  if (alarm.getHours() < hours || (alarm.getHours() === hours && alarm.getMinutes() < minutes)) {
    alarm.setDate(alarm.getDate() + 1);
  }

  const timeToAlarm = alarm - now;

  setTimeout(() => {
    document.getElementById('alarmSound').play();
    alert('Vaqt tugadi!');
  }, timeToAlarm);
}


