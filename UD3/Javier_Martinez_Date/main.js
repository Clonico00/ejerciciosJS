/*
1. Realiza un cronómetro que empiece cuando hagas clic en un
botón, tenga otro botón para pausa/seguir y otro para reiniciarlo a
cero.
*/
let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = 0;
let minutes = 0;
let interval;

function startTimer() {
  interval = setInterval(function () {
    seconds++;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (seconds > 59) {
      seconds = "00";
      minutes++;
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
    }
    timer.innerHTML = minutes + ":" + seconds;
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  seconds = "00";
  minutes = "0";
  timer.innerHTML = minutes + ":" + seconds;
}
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

/*2. Crea un funcion que sea un temporizador,una cuenta atras, donde al usuario se le pida el número de
    minutos y segundos, a traves de un input
*/
let timer2 = document.getElementById("timer2");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let temporizador = document.getElementById("temporizador");
let interval2;

function startTimer2() {
  interval2 = setInterval(function () {
    segundos.value--;
    if (segundos.value < 10) {
      segundos.value = "0" + segundos.value;
    }
    if (segundos.value < 0) {
      segundos.value = "59";
      minutos.value--;
      if (minutos.value < 10) {
        minutos.value = "0" + minutos.value;
      }
    }
    timer2.innerHTML = minutos.value + ":" + segundos.value;
  }, 1000);
}
temporizador.addEventListener("click", startTimer2);





