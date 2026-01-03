class Task {
    constructor(description, status = false) {
        this.description = description;
        this.status = status;
    }
}

const todoInput = document.getElementById("add");
const btnAdd = document.querySelector(".input button");
let tasksList = [];

function renderTasks(callback, task) {
    // It will update the list all the time
    return callback(task);
}

function createToDo(task) {
    const newTask = new Task(task.value.trim());
    return [...tasksList, newTask];
}

function removeToDo(task) {
    const arrayToReturn = [];
    tasksList.forEach((item) => {
        if (item !== task) {
            arrayToReturn.push(item);
        }
    });
    return arrayToReturn;
}

function todoCompleted(task) {
    task.classList.toggle("marked");
    task.status = true;
}

btnAdd.addEventListener("click", createToDo);

btnAdd.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        createToDo();
    }
});
