const winCounter = document.getElementById("dead");
const loseCounter = document.getElementById("lost");

function killMoll() {
    if (this.className.includes('hole_has-mole')) {
        winCounter.textContent = +winCounter.textContent + 1;
        if (winCounter.textContent == "10") {
            alert("Вы победили!")
            winCounter.textContent = 0;
            loseCounter.textContent = 0;
        }
    }
    else {
        loseCounter.textContent = +loseCounter.textContent + 1;
        if (loseCounter.textContent == "5") {
            alert("Вы проиграли :(")
            winCounter.textContent = 0;
            loseCounter.textContent = 0;
        }
    }
}

for (let i = 1; i < 10; ++i) {
    document.getElementById(`hole${i}`).onclick = killMoll;
}