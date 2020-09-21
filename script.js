const daysEl = document.getElementById("dias");
const hoursEl = document.getElementById("horas");
const minsEl = document.getElementById("minutos");
const secondsEl = document.getElementById("segundos");

const cuarentenaDate = "01 Jan 2020";

function countup() {
  const comienzoDate = new Date(cuarentenaDate);
  const currentDate = new Date();

  const totalSeconds = (currentDate - comienzoDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML = formatTime(mins);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

// llamada a la funcion
countup();

setInterval(countup, 1000);
