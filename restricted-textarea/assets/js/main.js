const text = document.getElementById("text");
const counter = document.getElementById("counter");
const container = document.querySelector(".text-container");
const pCounter = document.querySelector(".counter");
const MAX = 250;

text.addEventListener("input", () => {
    let contador = text.value;
    counter.innerHTML = contador.length;

    if (contador.length >= MAX) {
        container.classList.add("container-full");
        text.classList.add("text-full");
        pCounter.classList.add("text-full");
    } else {
        container.classList.remove("container-full");
        text.classList.remove("text-full");
        pCounter.classList.remove("text-full");
    }
});
