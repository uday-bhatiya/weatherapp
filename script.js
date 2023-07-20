const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const notFound = document.querySelector('.not-found');
const weatherBody = document.querySelector('.weather-body');



async function chechWeather(city) {
    const APIKEY = "ef639ca78395d4bc61b1b9ff4175d9f9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`;

    const weatherData = await fetch(`${url}`).then(response => response.json());

    if(weatherData.cod === '404') {
        notFound.style.display = "flex";
        weatherBody.style.display = "none";
        return;
    }
    else {
        notFound.style.display = "none";
        weatherBody.style.display = "flex";
        temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}<sup>°C</sup>`;
        description.innerHTML = `${weatherData.weather[0].description}`;
        humidity.innerHTML = `${weatherData.main.humidity}%`;
        windSpeed.innerHTML = `${weatherData.wind.speed} km/h`;
    
        switch(weatherData.weather[0].main) {
    
            case 'Clouds' :
                weatherImg.src = "img/cloud.png";
                break;
            case 'Clear' :
                weatherImg.src = "img/clear.png";
                break;
            case 'Rain' :
                weatherImg.src = "img/rain.png";
                break;
            case 'Mist' :
                weatherImg.src = "img/mist.png";
                break;
            case 'Snow' :
                weatherImg.src = "img/snow.png";
                break;
        
        }
    }
   
   
}

searchBtn.addEventListener('click', () => {
    chechWeather(inputBox.value);
})







    

    