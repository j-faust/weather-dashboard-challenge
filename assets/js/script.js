let weatherUrlApi = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=864118318ed70a271edc09feffa72f3d';
let searchBtn = document.getElementById('search-btn');
let searchBox = document.getElementById('city-search');
let cityName = document.getElementById('city-name');
let currentId = document.getElementById('current-id');
let currentConditions = document.getElementById('current-conditions');
let currentIcon = document.getElementById('current-icon');
let currentMain = document.getElementById('current-main');
let currentDesc = document.getElementById('current-desc');
let currentHumidity = document.getElementById('current-humid');
let currentTemperature = document.getElementById('current-temp');
let currentWindSpeed = document.getElementById('current-wind');
let forecastWeatherBox = document.getElementById('forecast-weather');


// Function for searching the weather and api
function weatherSearch(city) {
    let apiKey = "864118318ed70a271edc09feffa72f3d";
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=864118318ed70a271edc09feffa72f3d';
    let forecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=864118318ed70a271edc09feffa72f3d';


    // Fetching the current weather
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        // Loading weather data to the browser for current weather
        cityName.innerHTML = data.name;
        currentIcon.innerHTML = data.weather.icon;
        currentId.innerHTML = data.weather.id;
        currentMain.innerHTML = data.weather.main;
        currentDesc.innerHTML = "<strong>Current Weather:</strong> " + data.weather.description;
        currentHumidity.innerHTML = "<strong>Current Humidity:</strong " + data.main.humidity;
        currentTemperature.innerHTML = "<strong>Current Temperature:</strong> " + data.main.temp;
        currentWindSpeed.innerHTML = "<strong>Current Wind Speed:</strong " + data.wind.speed;
    })

    // logging any errors to the console
    .catch(console.error);  

    // fetching the forecast weather 
    fetch(forecast)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        // Loading weather data to the web browser for forecast weather
        // forecastWeatherBox.innerHTML = data.name;
        // forecastWeatherBox.innerHTML = data.weather.id;
        // forecastWeatherBox.innerHTML = data.weather.main;
        // forecastWeatherBox.innerHTML = data.weather.description;
        // forecastWeatherBox.innerHTML = data.weather.icon;
        // forecastWeatherBox.innerHTML = data.main.humidity;
        // forecastWeatherBox.innerHTML = data.main.temp;
        // forecastWeatherBox.innerHTML = data.wind.speed;
        for(var i = 1; i <= 5; i++){
            let elName = "forecast" + i.toString();
            console.log(elName);
           let day = document.getElementById('forecast' + i.toString()); 
           console.log(day);
           day.textContent = "day" + i.toString();

        }

    })
    // log any error that would occur during fetch to the console
    .catch(console.error);
}



// Function to call the weatherSeach function to get a value for the search box
function buttonClick() {
    weatherSearch(searchBox.value);
}

// Event listener to call the function buttonClick to get the required data
searchBtn.addEventListener('click', buttonClick);




