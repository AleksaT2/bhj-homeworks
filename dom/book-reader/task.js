const sizeList = document.getElementsByClassName("font-size");
const book = document.getElementById("book");

const textList = Array.from(document.querySelector(".book__control_color").children);
textList.shift();

const backgroundList = Array.from(document.querySelector(".book__control_background").children);
backgroundList.shift();



function deleteSize(list, className, param) {
    for (let j = 0; j < list.length; j++) {
        if (list[j].classList.contains(className)) {
            list[j].classList.remove(className);
            if (param == "size") {
                book.classList.remove(`book_fs-${list[j].dataset.size}`);
            }
            if (param =="textColor") {
                book.classList.remove(`book_color-${list[j].dataset.textColor}`);
            }
            if (param =="bgColor") {
                book.classList.remove(`book_bg-${list[j].dataset.bgColor}`);
            }
        }
    } 
}

for (let i = 0; i < sizeList.length; i++) {
    sizeList[i].onclick = function() {
        deleteSize(sizeList, "font-size_active", "size");
        sizeList[i].classList.add("font-size_active");
        book.classList.add(`book_fs-${sizeList[i].dataset.size}`);
        return false;
    }
}

for (let i = 0; i < textList.length; i++) {
    textList[i].onclick = function() {
        deleteSize(textList, "color_active", "textColor");
        textList[i].classList.add("color_active");
        book.classList.add(`book_color-${textList[i].dataset.textColor}`);
        return false;
    }
}

for (let i = 0; i < backgroundList.length; i++) {
    backgroundList[i].onclick = function() {
        deleteSize(backgroundList, "color_active", "bgColor");
        backgroundList[i].classList.add("color_active");
        book.classList.add(`book_bg-${backgroundList[i].dataset.bgColor}`);
        return false;
    }
}

