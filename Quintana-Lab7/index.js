const timer = document.getElementById('outputPlace');
const rButton = document.getElementById('rButton');
const sButton = document.getElementById('sButton');

let interval = null;

function stop() {
    if (interval) {
        clearInterval(interval);
        interval = null;
    }
}

function start() {
    if (interval) {
        timer.textContent = 0;
        return;
    }
    timer.textContent = 0;
    interval = setInterval(function () {
        ++timer.textContent;
    }, 1000);
}

rButton.addEventListener('click', start);
sButton.addEventListener('click', stop);