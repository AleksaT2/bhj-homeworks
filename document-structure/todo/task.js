const inputBox = document.getElementById("task__input");
const inputBtn = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
let tasks, deleteBtn;



function addTask() {
    if (inputBox.value) {
        event.preventDefault();
        tasksList.insertAdjacentHTML(`beforeend`, `
            <div class="task">
            <div class="task__title">
                ${inputBox.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
            </div>`);
        inputBox.value = "";
        deleteBtn = document.querySelector("a.task__remove");
        tasks = document.querySelector("div.task");
    }

}

inputBox.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
})

inputBtn.addEventListener("click", addTask);

tasksList.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("task__remove")) {
        event.preventDefault();
        event.target.closest(".task").remove();
    }
});