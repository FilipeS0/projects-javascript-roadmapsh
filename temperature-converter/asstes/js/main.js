const accordionFrom = document.querySelector(".from button");
const fromList = document.getElementById("fromList");
const accordionTo = document.querySelector(".to button");
const toList = document.getElementById("toList");
const btnSubmit = document.getElementById("send");
const inputDegrees = document.getElementById("degrees");
const fromOptions = document.querySelectorAll("#fromList .deg");
const toOptions = document.querySelectorAll("#toList .deg");

function calcCelsiusToKelvin(calsius, kelvin) {}

function calcKelvinToCelsius(kelvin, celsius) {}

function calcFahToCelsius(fahrenheit, celsius) {}

function calcCelsiusToFah(celsius, fahrenheit) {}

function calcFahToKelvin(fahrenheit, kelvin) {}

function calcKelvinToFah(kelvin, fahrenheit) {}

accordionFrom.addEventListener("click", () => {
    fromList.classList.toggle("not-displayed");
});

accordionTo.addEventListener("click", () => {
    toList.classList.toggle("not-displayed");
});

fromOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        accordionFrom.textContent = option.textContent;
        fromList.classList.toggle("not-displayed");
    });
});

toOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        accordionTo.textContent = option.textContent;
        toList.classList.toggle("not-displayed");
    });
});

document.addEventListener("click", (e) => {
    const clickOutsideListTo =
        !toList.contains(e.target) && !accordionTo.contains(e.target);
    const clickOutsideListFrom =
        !fromList.contains(e.target) && !accordionFrom.contains(e.target);

    if (clickOutsideListFrom && !fromList.classList.contains("not-displayed")) {
        fromList.classList.add("not-displayed");
    }

    if (clickOutsideListTo && !toList.classList.contains("not-displayed")) {
        toList.classList.add("not-displayed");
    }
});

btnSubmit.addEventListener("click", () => {
    if (true) {
    }
});

btnSubmit.addEventListener("keypress", (key) => {
    if (key === "enter") {
    }
});
