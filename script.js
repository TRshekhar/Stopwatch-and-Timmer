function stopwatch() {
    document.getElementById("timmer").style.display = "none";
    document.getElementById("stopwatch").style.display = "flex";
}

function timmer() {
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timmer").style.display = "flex";
}

let stopwatchInterval;
let elapsedTime = 0;

function updateTime() {
    elapsedTime += 10;
    let date = new Date(elapsedTime);
    let minutes = String(date.getUTCMinutes()).padStart(2, '0');
    let seconds = String(date.getUTCSeconds()).padStart(2, '0');
    let milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
    document.querySelector('.stopwatch').textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
    document.getElementById("start_btn_of_stopwatch").style.display = "none";
    document.getElementById("stop_btn_of_stopwatch").style.display = "flex";
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(updateTime, 10);
    }
}

function stop() {
    document.getElementById("start_btn_of_stopwatch").style.display = "flex";
    document.getElementById("stop_btn_of_stopwatch").style.display = "none";
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
}

function reset() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    elapsedTime = 0;
    document.querySelector('.stopwatch').textContent = "00:00:00";
    document.getElementById("start_btn_of_stopwatch").style.display = "flex";
    document.getElementById("stop_btn_of_stopwatch").style.display = "none";
}

// Timmer start


function start_timmer(){
    let minutes = parseInt(document.getElementById('minute').value);
    let seconds = parseInt(document.getElementById('second').value);
    let totalTime = minutes * 60 + seconds;

    let display = document.getElementById('display');

    if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
        alert('Please enter valid minutes and seconds.');
        return;
    }
    else{
        document.getElementById("form").style.display="none";
        document.getElementById("display").style.display="flex";
        document.getElementById("stop_btn_of_timmer").style.display="flex";
        document.getElementById("reset_btn_of_timmer").style.display="flex";
    }

    const timerInterval = setInterval(function () {
        let displayMinutes = Math.floor(totalTime / 60);
        let displaySeconds = totalTime % 60;

        if (displaySeconds < 10) displaySeconds = '0' + displaySeconds;
        if (displayMinutes < 10) displayMinutes = '0' + displayMinutes;

        display.innerHTML = displayMinutes + ':' + displaySeconds;
        if (totalTime < 0) {
            clearInterval(timerInterval);
            alert('Time is up!');
            display.innerHTML="00:00"
        }
        totalTime--;


    }, 1000);
    window.globalFunction = timerInterval;

}
function killInterval() {
    clearInterval(globalFunction); // Stops the interval
    console.log("Interval killed");
}
  
  function reset_timmer(){
    setTimeout(killInterval, 10);
    document.getElementById("form").style.display="inline";
    document.getElementById("display").style.display="none";
    document.getElementById("stop_btn_of_timmer").style.display="none";
    document.getElementById("reset_btn_of_timmer").style.display="none";
}