const apiKey = "9f8ed7dfc530f0bd9bf96ab66f5af862"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const WeatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    if(response.status === 404){
        document.querySelector(".error").innerHTML = "Invalid City name"
    }
    else if(response.status === 200){
        document.querySelector(".error").innerHTML = ""
    }
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
    if (data.weather[0].main == 'Clouds') {
        WeatherIcon.src = "images/clouds.png"
    }
   else if (data.weather[0].main == 'Rain') {
        WeatherIcon.src = "images/rain.png"
    }
   else if (data.weather[0].main == 'Drizzle') {
        WeatherIcon.src = "images/drizzle.png"
    }
   else if (data.weather[0].main == 'Mist') {
        WeatherIcon.src = "images/mist.png"
    }
   else if (data.weather[0].main == 'Clear') {
        WeatherIcon.src = "images/clear.png"
    }
    document.querySelector(".weather").style.display = 'block'
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})