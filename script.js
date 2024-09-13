const timerE1 = document.getElementById('timer');
const startButtonE1 = document.getElementById("start")
const stopButtonE1 = document.getElementById("stop")
const resetButtonE1 = document.getElementById("reset")

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startTimer() {
   startTime = Date.now() - elapsedTime;

   timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerE1.textContent = formatTime(elapsedTime);
   }, 10);


startButtonE1.disabled = true;
stopButtonE1.disabled = false;
}

function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +  


        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +  
        

        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + "." +  

        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}

function stopTimer() {
    clearInterval(timerInterval);
    startButtonE1.disabled = false;
    stopButtonE1.disabled = true;

}
function resetTimer(){
    clearInterval(timerInterval);

    elapsedTime = 0;
    timerE1.textContent = "00:00:00"
    startButtonE1.disabled = false;
    stopButtonE1.disabled = true;
}



startButtonE1.addEventListener("click",startTimer)
stopButtonE1.addEventListener("click",stopTimer)
resetButtonE1.addEventListener("click",resetTimer)