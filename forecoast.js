
function renderForecast(data){

const forecastContainer=document.getElementById("forecast");

forecastContainer.innerHTML="";

const daily=data.list.filter(item=>item.dt_txt.includes("12:00:00"));

daily.forEach(day=>{

const card=document.createElement("div");

card.className="forecast-card";

const date=new Date(day.dt_txt).toLocaleDateString("en",{weekday:"short"});

card.innerHTML=`
<h4>${date}</h4>
<img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png">
<p>${Math.round(day.main.temp)}°C</p>
`;

forecastContainer.appendChild(card);

});

}