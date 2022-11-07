let searchBtn = document.getElementById('search-btn');
let searchBox = document.getElementById('city-search');
let cityName = document.getElementById('city-name');
let currentConditions = document.getElementById('current-conditions');
let currentIcon = document.getElementById('current-icon');
let currentMain = document.getElementById('current-main');
let currentDesc = document.getElementById('current-desc');
let currentHumidity = document.getElementById('current-humid');
let currentTemperature = document.getElementById('current-temp');
let currentWindSpeed = document.getElementById('current-wind');
let cityList = [];


// Function for searching the weather and api
function weatherSearch(city) {
    let apiKey = "864118318ed70a271edc09feffa72f3d";
    let forecast = 'https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=864118318ed70a271edc09feffa72f3d';
    

    // Fetching the current weather
    fetch(forecast)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        // Loading weather data to the browser for current weather
        cityName.innerHTML = data.city.name;
        currentIcon.src = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png"; // add weather image to the container
        currentIcon.style.display = "block"; // display icon once search is clicked
        currentMain.innerHTML = data.list[0].weather[0].main;
        currentDesc.innerHTML = "<strong>Current Weather:</strong> " + data.list[0].weather[0].description;
        currentHumidity.innerHTML = "<strong>Current Humidity:</strong> " + data.list[0].main.humidity;
        currentTemperature.innerHTML = "<strong>Current Temperature:</strong> " + data.list[0].main.temp + "°";
        
        console.log(data);
        // Loop for the forecast dates 
        for(i = 1; i <= 5; i++) {

            // forecast api does forecasts every 3 hours.  This variable will select 1 forecast from the array for once a day.
            let listEl = i * 8 - 1;
            //convert the unix date to the day of the week variable to be input to innerHTML to load forecasted days
            let dateDay = getDayName(data.list[listEl].dt);
            document.getElementById('forecast-icon' + i.toString()).src = "http://openweathermap.org/img/w/" + data.list[listEl].weather[0].icon + ".png"; // add weather image to the container
            document.getElementById('forecast-icon' + i.toString()).style.display = "block"; // display icon once search is clicked
            document.getElementById('forecast-date' + i.toString()).innerHTML = dateDay;
            document.getElementById('forecast-main' + i.toString()).innerHTML = data.list[listEl].weather[0].main;
            document.getElementById('forecast-desc' + i.toString()).innerHTML =  data.list[listEl].weather[0].description;
            document.getElementById('forecast-humid' + i.toString()).innerHTML = "Humidity: " + data.list[listEl].main.humidity;
            document.getElementById('forecast-humid' + i.toString()).innerHTML = "Temp: " + data.list[listEl].main.temp + "°";
    
        }
    cityList.unshift(data.city.name);
    console.log(cityList)
    localStorage.setItem('weatherCities', JSON.stringify(cityList))
    loadCities();


    })

    // logging any errors to the console
    .catch(console.error);  

    }



// Function to call the weatherSeach function to get a value for the search box
function buttonClick() {
    weatherSearch(searchBox.value);
}

// Event listener to call the function buttonClick to get the required data
searchBtn.addEventListener('click', buttonClick);

// Convert unix date from Weather API toDay of the week to display on forecast cards
function getDayName(unixDate) {
    const dayNames  = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayNum = new Date(unixDate * 1000).getDay()
    
        return dayNames[dayNum];
    }


function loadCities() {

    for(i = 0; i <= 5; i++) {
        if(cityList[i]) {
            document.getElementById('btn' + i.toString()).textContent = cityList[i];
            document.getElementById('btn' + i.toString()).style.display = 'block';
           
        }   
        else {
            document.getElementById('btn' + i.toString()).style.display = 'none';
        }
    }    
}


function buttonClickHistory(e) {
    let cityName = e.innerHTML;    
    weatherSearch(cityName);
}

function reloadToCityList() {
    let cityTextList = localStorage.getItem('weatherCities');
    cityList = JSON.parse(cityTextList);
    loadCities();

}
console.log(reloadToCityList);
window.onload = reloadToCityList();
