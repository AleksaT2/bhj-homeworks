const hasTooltipsList = document.getElementsByClassName("has-tooltip");


for (tooltip of hasTooltipsList) {
    let element = document.createElement("div");
    element.classList.add("tooltip");
    element.textContent = tooltip.title;
    tooltip.appendChild(element);
}

const tooltipsList = document.getElementsByClassName("tooltip");

for (let i = 0; i < hasTooltipsList.length; ++i) {
    hasTooltipsList[i].addEventListener("click",  (event) => {
        event.preventDefault();
        if (tooltipsList[i].classList.contains("tooltip_active")) {
            tooltipsList[i].classList.remove("tooltip_active");
        }
        else {
            tooltipsList[i].classList.add("tooltip_active");
        }
    })
}

