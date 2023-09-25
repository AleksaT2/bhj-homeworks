const cookie = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
let k = 1;
function cookieClicker() {
    cookie.width += 20*k;
    cookie.height += 20*k;
    clicker__counter.textContent = String( +clicker__counter.textContent + 1);
    k *= -1;
}

cookie.onclick = cookieClicker;