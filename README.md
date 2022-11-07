# Weather Dashboard Challenge

## Purpose
The purpose of this Weather Dashboard App is develop an application that can give the weather for multiple location/cities to be able to plan a trip based on that weather outlook.  


## HTML 
* The HTML file utilizes bootstrap layouts including cards, navbar and list classes to give a clean appearance to the user.

* The HTML file also links to the Google Fonts API to import a font to use for the Weather Dashboard. 

* HTML file also includes links to the sources for the Javascript file, CSS, JQUERY CDN and also the Bootstrap CDN.  

* Alt descriptions are also included for the weather images that will display when a search is made for the weather. 


## CSS
* Bootstrap styling used for most layout of the page for the Navbard, Cards and Card list.

* CSS Styling used to select the font loaded from Google Fonts for the webpage

* Adjusted the font size for the container cards for 'Recently Viewed Cities' and 'Current Weather Conditions'.  Navbar also has adjusted font size for 'Weather Dasboard' text at the top of page. 


## Javascript
* Created function for the weather search by city name.  City name will need to be entered for the search.
    * Within this function there is a fetch command that calls to the OpenWeatherMap API service.  
    * After the fetch returns the date, current weather date is loaded into the HTML Card for the Current Weather Conditions.  

    * A 'for loop' is used within the function to grab specific data from the JSON Objects returned by the API.  This is done because the API returns forecast for every 3 hours. This is loaded into the forecast cards while also displaying the day for the forecast. 

    * After the weather information is loaded onto the page, the weather search function will also take the city information and store it to localStorage.  It will then call another function to load it onto the recently viewed list for the cities. 

* A function was also created to convert the unix date given by the API and return a day of the week.

* Function created to load the recently viewed cities into a list to the side and display the button on the list.  The user can then click button and view the weather for the city again.

* A function added for the button click event on recently viewed cities and it will display the weather for the city clicked. 

* Function created to call localStorage to grab recently viewed cities and window.onload used to load recently viewed cities for the user on page load. 

## Links
[GitHub](https://github.com/j-faust/weather-dashboard-challenge)

[Weather Dashboard App](https://j-faust.github.io/weather-dashboard-challenge)

## Screenshots

