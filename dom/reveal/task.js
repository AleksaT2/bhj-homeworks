function isVisible(el) {
    let {top, bottom} = el.getBoundingClientRect()
    if (top > window.innerHeight) {
        return false;
    }
    if (bottom < 0) {
        return false;
    }
    return true;
}

const elementList = document.getElementsByClassName("reveal");
let i = 0;

document.addEventListener("scroll", function(){
    if (isVisible(elementList[i])) {
        elementList[i].classList.add("reveal_active");
        if (i < elementList.length - 1) {
            ++i;
        }
    }
})