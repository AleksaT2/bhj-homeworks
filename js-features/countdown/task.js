function countDown(){
    let timerStart = document.getElementById("timer");
    timerStart.textContent -= 1;
    if (timerStart.textContent == 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(countDown, 1000);
