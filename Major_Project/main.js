const api = {
    key: "5a3738403bfdcd6014ac8a65c9d8912c",
    base: "https://api.openweathermap.org/data/2.5/"
}

function setDefaults(){
    console.log(localStorage);

    let defCity = document.querySelector('.location .city');
    let defDate = document.querySelector('.location .date');
    let defTemp = document.querySelector('.current .temp');
    let defWeather_element = document.querySelector('.current .weather');
    let defHilow= document.querySelector('.hi-low');

    defCity.innerText = localStorage.getItem("defaultCity");
    defDate.innerText = localStorage.getItem("defaultDate");
    defTemp.innerText = localStorage.getItem("defaultTemp");
    defWeather_element.innerText = localStorage.getItem("defaultWeather");
    defHilow.innerText = localStorage.getItem("defaultHiLow");
}
setDefaults()


const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13){
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function getResults(cityName) {
    fetch(`${api.base}weather?q=${cityName}&units=imperial&appid=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText =`${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&degF</span>`;

    let weather_element = document.querySelector('.current .weather');
    weather_element.innerText = weather.weather[0].main;

    let hilow= document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_max)}&degF / ${Math.round(weather.main.temp_min)}&degF`;
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