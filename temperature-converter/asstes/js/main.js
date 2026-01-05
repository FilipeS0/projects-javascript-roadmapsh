const accordionFrom = document.querySelector(".from button");
const fromList = document.getElementById("fromList");
const accordionTo = document.querySelector(".to button");
const toList = document.getElementById("toList");
const btnSubmit = document.getElementById("send");
const inputDegrees = document.getElementById("degrees");
const fromOptions = document.querySelectorAll("#fromList .deg");
const toOptions = document.querySelectorAll("#toList .deg");
const result = document.querySelector(".result");

function calcCelsiusToKelvin(degrees) {
    return degrees + 273.15;
}

function calcKelvinToCelsius(degrees) {
    return degrees - 273.15;
}

function calcFahToCelsius(degrees) {
    return ((degrees - 32) * 5) / 9;
}

function calcCelsiusToFah(degrees) {
    return (degrees * 9) / 5 + 32;
}

function calcFahToKelvin(degrees) {
    return ((degrees - 32) * 5) / 9 + 273.15;
}

function calcKelvinToFah(degrees) {
    return ((degrees - 273.15) * 9) / 5 + 32;
}

function canConvert(degrees, fromInput, toInput) {
    return degrees && fromInput && toInput;
}

// I have to check if the inputs are filled
function renderButton() {
    const hasDegrees = inputDegrees.value.trim() !== "";
    const fromSelected = accordionFrom.textContent !== "From unit";
    const toSelected = accordionTo.textContent !== "To unit";

    btnSubmit.disabled = !(hasDegrees && fromSelected && toSelected);
}

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
        renderButton();
    });
});

toOptions.forEach((option, index) => {
    option.addEventListener("click", () => {
        accordionTo.textContent = option.textContent;
        toList.classList.toggle("not-displayed");
        renderButton();
    });
});

inputDegrees.addEventListener("input", renderButton);

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
    const degreesValue = parseFloat(inputDegrees.value);
    const fromUnit = accordionFrom.textContent.trim().toLowerCase();
    const toUnit = accordionTo.textContent.trim().toLowerCase();

    if (isNaN(degreesValue)) {
        result.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (fromUnit === toUnit) {
        result.textContent = "As unidades de origem e destino são iguais.";
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "kelvin") {
            result.textContent = ``;
            calcCelsiusToKelvin(degreesValue);
        } else if (toUnit === "fahrenheit") {
            result.textContent = ``;
            calcCelsiusToFah(degreesValue);
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result.textContent = ``;
            calcKelvinToCelsius(degreesValue);
        } else if (toUnit === "fahrenheit") {
            result.textContent = ``;
            calcKelvinToFah(degreesValue);
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result.textContent = ``;
            calcFahToCelsius(degreesValue);
        } else if (toUnit === "kelvin") {
            result.textContent = ``;
            calcFahToKelvin(degreesValue);
        }
    }
});
