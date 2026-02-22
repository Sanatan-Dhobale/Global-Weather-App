const apiKey = "aadfc6338844a710500c46d9a6e2abe5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// search.value = "Nagpur";

async function checkWeather(city) {



    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " KM/h";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "assets/clouds.png"
    } else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "assets/clear.png"
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "assets/rain.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "assets/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "assets/mist.png"
    }

}

checkWeather("Nagpur");


btn.addEventListener("click", () => {
    checkWeather(search.value);
})

