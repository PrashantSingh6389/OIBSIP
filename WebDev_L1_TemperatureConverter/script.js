function convertTemperature() {

    let temperature = document.getElementById("temperature").value;

    let unit = document.getElementById("unit").value;

    let result = document.getElementById("result");

    let error = document.getElementById("error");

    result.innerHTML = "";
    error.innerHTML = "";

    // Check empty input
    if (temperature === "") {

        error.innerHTML = "Please enter a temperature.";

        return;

    }

    // Convert string to number
    temperature = parseFloat(temperature);

    // Check invalid number
    if (isNaN(temperature)) {

        error.innerHTML = "Please enter a valid number.";

        return;

    }

    let celsius;
    let fahrenheit;
    let kelvin;

    // Celsius
    if (unit === "celsius") {

        if (temperature < -273.15) {

            error.innerHTML =
                "Temperature cannot be below Absolute Zero (-273.15°C).";

            return;

        }

        celsius = temperature;
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;

    }

    // Fahrenheit
    else if (unit === "fahrenheit") {

        if (temperature < -459.67) {

            error.innerHTML =
                "Temperature cannot be below Absolute Zero (-459.67°F).";

            return;

        }

        fahrenheit = temperature;
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    // Kelvin
    else {

        if (temperature < 0) {

            error.innerHTML =
                "Temperature cannot be below Absolute Zero (0 Kelvin).";

            return;

        }

        kelvin = temperature;
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    result.innerHTML =

        "<strong>Celsius:</strong> "
        + celsius.toFixed(2) + " °C <br><br>"

        + "<strong>Fahrenheit:</strong> "
        + fahrenheit.toFixed(2) + " °F <br><br>"

        + "<strong>Kelvin:</strong> "
        + kelvin.toFixed(2) + " K";

}