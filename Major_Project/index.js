const api = {
    key: "5a3738403bfdcd6014ac8a65c9d8912c",
    base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        goHome();
        console.log(searchbox.value);
    }
}

function getResults(cityName) {
    fetch(`${api.base}weather?q=${cityName}&units=imperial&appid=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(sendResults);
}
function sendResults(weather) {
    console.log(weather);
    localStorage.setItem("defaultCity",`${weather.name}, ${weather.sys.country}`);
    
    let now = new Date();
    date = dateBuilder(now);
    
    localStorage.setItem("defaultDate", date);
    localStorage.setItem("defaultTemp",`${Math.round(weather.main.temp)}°F`);
    localStorage.setItem("defaultWeather", weather.weather[0].main);
    localStorage.setItem("defaultHiLow",`${Math.round(weather.main.temp_max)}°F / ${Math.round(weather.main.temp_min)}°F`);

}

function dateBuilder(d) {
    let months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date},  ${year}`;
}

function goHome(){
    document.querySelector('body').style.opacity=0;
    setTimeout(function() {
        window.location.href = "home.html"
    },500);
    document.addEventListener('DOMContentLoaded',function(event){document.querySelector('body').style.opacity = 1});
}

