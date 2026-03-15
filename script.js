const loader=document.getElementById("loader");

async function fetchWeather(city){

try{

loader.style.display="block";

const res=await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
const data=await res.json();

if(data.cod!==200) throw new Error("City not found");

renderCurrentWeather(data);

const forecastRes=await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);

const forecastData=await forecastRes.json();

renderForecast(forecastData);

changeBackground(data.weather[0].main);

}catch(err){

alert(err.message);

}

loader.style.display="none";

}

document.getElementById("searchBtn").onclick=()=>{

const city=document.getElementById("searchInput").value;

fetchWeather(city);

};

function changeBackground(weather){

const body=document.body;

if(weather==="Clear")
body.style.background="linear-gradient(#fceabb,#f8b500)";

else if(weather==="Rain")
body.style.background="linear-gradient(#4b79a1,#283e51)";

else if(weather==="Snow")
body.style.background="linear-gradient(#e6dada,#274046)";

else
body.style.background="linear-gradient(#6dd5fa,#2980b9)";

}

function getLocationWeather(){

navigator.geolocation.getCurrentPosition(async(pos)=>{

const lat=pos.coords.latitude;
const lon=pos.coords.longitude;

const res=await fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

const data=await res.json();

renderCurrentWeather(data);

});

}

getLocationWeather();


const toggle=document.getElementById("modeToggle");

toggle.onclick=()=>{

document.body.classList.toggle("dark");

localStorage.setItem("mode",document.body.classList.contains("dark"));

};

if(localStorage.getItem("mode")==="true")
document.body.classList.add("dark");