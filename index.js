const container = document.querySelector('.container');
const searchBtn = document.querySelector('.search button');
const weather = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const notFound = document.querySelector('.notfound');

searchBtn.addEventListener('click', () => {
    const APIKey = "Enter API Key here";
    const city = document.querySelector('.search input').value;

    if (city === "") return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())
    .then(json => {

        if (json.cod === '404') {
            container.style.height = '400px';
            weather.style.display = 'none';
            weatherDetails.style.display = 'none';

            notFound.style.display = 'block';
            notFound.classList.add('fadeIn');
            return;
        }

        notFound.style.display = 'none';
        notFound.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const feelsLike = document.querySelector('.weather-box .feels-like');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear': image.src = 'img/clear.png'; break;
            case 'Rain': image.src = 'img/rain.png'; break;
            case 'Snow': image.src = 'img/snow.png'; break;
            case 'Clouds': image.src = 'img/cloud.png'; break;
            case 'Haze': image.src = 'img/haze.png'; break;
            default: image.src = '';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        feelsLike.innerHTML = `<span>Feels like: </span>${parseInt(json.main.feels_like)}<span>°C</span>`;
        description.innerHTML = json.weather[0].description;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weather.style.display = 'block';
        weatherDetails.style.display = 'flex';

        weather.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');

        container.style.height = '590px';
    });
});
