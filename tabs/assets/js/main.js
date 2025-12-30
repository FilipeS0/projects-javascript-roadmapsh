// Preciso deixar o primeiro open como default
// ao clickar em um ele tem que pegar classe open e retirar de outro elemento que tenha

const tabs = document.querySelectorAll(".tab");
const buttons = document.querySelectorAll(".butons");

function setActiveTab(index) {
    tabs.forEach((tab) => tab.classList.remove("open"));
    buttons.forEach((button) => button.classList.remove("active"));

    tabs[index]?.classList.add("open");
    buttons[index]?.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => setActiveTab(0));

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        setActiveTab(index);
    });
});
