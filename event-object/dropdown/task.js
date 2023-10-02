const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownList = document.getElementsByClassName('dropdown__item');
const dropdownListBtn = document.querySelector('.dropdown__list');


dropdownBtn.onclick = function() {
    if (dropdownListBtn.classList.contains("dropdown__list_active")) {
        dropdownListBtn.classList.remove("dropdown__list_active");
    }
    else {
        dropdownListBtn.classList.add("dropdown__list_active");
    }
}

for (let i = 0; i < dropdownList.length; ++i) {
    dropdownList[i].onclick = function() {
        dropdownBtn.textContent = dropdownList[i].textContent;
        dropdownListBtn.classList.remove("dropdown__list_active");
        return false;
    }
}
