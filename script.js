const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Replace 'YOUR_API_KEY' with your actual API key from a weather API provider
    const apiKey = "YOUR_API_KEY";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const weatherDescription = data.weather[0].description;
            weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Weather: ${weatherDescription}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            weatherInfo.innerHTML = "Error fetching weather data";
        });
});
