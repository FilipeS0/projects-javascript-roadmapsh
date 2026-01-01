const paragraph = document.querySelectorAll(".text");
const accordionButton = document.querySelectorAll(".buttons");

function accordion(index) {
    paragraph[index].classList.toggle("open");
    accordionButton[index].classList.toggle("active");
}

accordionButton.forEach((acc, index) => {
    acc.addEventListener("click", () => {
        accordion(index);
    });
});
