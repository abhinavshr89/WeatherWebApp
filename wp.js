const API_KEY = `3f326f29e505fec19ce2cdca85b8b01a`;
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather"); // Fix the typo here

const getWeather = async (city) => {
  console.log(`Fetch weather for city: ${city}`);
  const apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(apiURL);
  const data = await response.json();
  console.log(data);
  if(data.cod =="404"){
    weather.innerHTML=`<h2> City not found </h2>`;
    return ;
  }
  weather.innerHTML=`<div">        
  <h2>${data.main.temp} °C</h2>
  <h4>${data.weather[0].main}</h4>
</div>
  `;
};

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
  //event.preventDefault -> overwrite the default behaviour
});

