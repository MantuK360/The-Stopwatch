// golobal variable
// const time_el = document.querySelector('.watch .time');
let seconds = 00;
let tens = 00;
let min = 00;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMin = document.querySelector('.min');
let start_btn = document.querySelector('.start');
let stop_btn = document.querySelector('.stop');
let reset_btn = document.querySelector('.reset');

let interval;
start_btn.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
})
stop_btn.addEventListener('click', () => {
    clearInterval(interval);
})
reset_btn.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    min = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMin.innerHTML = min;
})


function startTimer() {
    tens++;
    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        getTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;

    }
    if (seconds > 9) {
        getSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        min++;
        getMin.innerHTML = '0' + min;
        seconds = 0;
        getTens.innerHTML = '0' + 0;

    }

}