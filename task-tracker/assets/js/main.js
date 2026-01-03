class Task {
    constructor(description, status = false) {
        this.description = description;
        this.status = status;
    }
}

const todoInput = document.getElementById("add");
const btnAdd = document.querySelector(".input button");
const toDoList = document.querySelector(".todo-lists");
let deleteToDo;
let checkToDo;

let tasksList = [];

function renderTasks() {
    // It will update the list all the time
    toDoList.innerHTML = "";
    tasksList.forEach((toDo, index) => {
        toDoList.innerHTML += `<div class="todo" data-index="${index}">
        <input ${
            toDo.status ? "checked" : ""
        } type="checkbox" name="task" id="HTML${index}" />
        <label class="check ${
            toDo.status ? "marked" : ""
        }" for="HTML${index}">${toDo.description}</label>
        <button class="del"><span class="delete"></span></button>
        </div>`;
    });
    deleteToDo = document.querySelectorAll(".del");
    checkToDo = document.querySelectorAll(".check");
}

function createToDo(task) {
    tasksList.push(task);
    renderTasks();
}

function removeToDo(index) {
    const arrayToReturn = [];
    tasksList.forEach((item) => {
        if (item !== tasksList[index]) {
            arrayToReturn.push(item);
        }
    });
    tasksList = arrayToReturn;
    renderTasks();
}

function todoCompleted(index) {
    tasksList[index].status = !tasksList[index].status;
    renderTasks();
}

btnAdd.addEventListener("click", () => {
    const newTask = new Task(todoInput.value.trim());
    createToDo(newTask);
    todoInput.value = "";
});

toDoList.addEventListener("click", (event) => {
    const todoElement = event.target.closest(".todo");
    if (!todoElement) return;

    const index = Number(todoElement.dataset.index);
    if (event.target.closest(".del")) {
        removeToDo(index);
    }

    if (event.target.classList.contains("check")) {
        todoCompleted(index);
    }
});
