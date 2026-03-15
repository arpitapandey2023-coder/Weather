function renderCurrentWeather(data){

const container = document.getElementById("currentWeather");

container.innerHTML = `
<h2>${data.name}</h2>
<h1>${Math.round(data.main.temp)}°C</h1>
<p>${data.weather[0].description}</p>

<div class="details">
<p>Humidity: ${data.main.humidity}%</p>
<p>Wind: ${data.wind.speed} m/s</p>
<p>Feels Like: ${data.main.feels_like}°C</p>
<p>Pressure: ${data.main.pressure}</p>
</div>
`;
}