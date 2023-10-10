const hasTooltipsList = document.getElementsByClassName("has-tooltip");


for (tooltip of hasTooltipsList) {
    tooltip.insertAdjacentHTML(`afterEnd`, `<div class="tooltip">${tooltip.title}</div>`);
}

const tooltipsList = document.getElementsByClassName("tooltip");

for (let i = 0; i < hasTooltipsList.length; ++i) {
    hasTooltipsList[i].addEventListener("click",  (event) => {
        event.preventDefault();
        let position = hasTooltipsList[i].getBoundingClientRect();
        tooltipsList[i].style = `left: ${position.left}px; top: ${position.bottom + 2}px`;
        tooltipsList[i].classList.toggle("tooltip_active");
    })
}

