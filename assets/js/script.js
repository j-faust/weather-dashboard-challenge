let weatherUrlApi = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=864118318ed70a271edc09feffa72f3d';
let searchBtn = document.getElementById('search-btn');
let searchBox = document.getElementById('city-search');
let currentWeatherBox = document.getElementById('current-weather');
let forecastWeatherBox = document.getElementById('forecast-weather');


// Function for searching the weather and api
function weatherSearch(city) {
    let apiKey = "864118318ed70a271edc09feffa72f3d";
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=864118318ed70a271edc09feffa72f3d';
    let forecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=864118318ed70a271edc09feffa72f3d';

    // Fetching the current weather
    fetch(url)
    .then(function(response) {
        console.log(response.status);
        return response.json();
    })
    .then(function(data) {
        console.log(data)
    })

    // fetching the forecast weather
    fetch(forecast)
        .then(function(response){
            console.log(response.status)
            return response.json();
        })
        .then(function(data){
            console.log(data)
    })
}

// Function to call the weatherSeach function to get a value for the search box
function buttonClick() {
    weatherSearch(searchBox.value);
}

// Event listener to call the function buttonClick to get the required data
searchBtn.addEventListener('click', buttonClick);
