
const apiKey = "25968d60fa4e14e6cd1c2f8d8680fc63";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){

    
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        var data = await response.json();
        console.log(data);

        if(response.status == 404){
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
        else{

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.windy').innerHTML = data.wind.speed + "km/hr";  

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "Cloudy weather.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "Clear Sunny.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "rain.png";
        }

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }

}

searchBtn.addEventListener('click', () => {
    const city = searchBox.value;
    checkWeather(city);
});

checkWeather();
