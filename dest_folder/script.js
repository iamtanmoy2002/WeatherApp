const apiKey = "de351214f88049ea70c32d6ba6f575d3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector("#searchBox");
const searchBtn=document.querySelector("#searchButton");
const weatherIcon = document.querySelector("#temp_icon");
const humidityIcon = document.querySelector("#humidityIcon");
const WindIcon = document.querySelector("#WindIcon");



async function checkWeather(city){
    const response=await fetch(apiUrl + city + "&appid=" + apiKey);  //fetching data from the API
    var data = await response.json();   //converting the response to JSON format

    console.log(data);

    document.querySelector( "#cityName" ).innerHTML = data.name;
    document.querySelector( "#temp" ).innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector( "#Humidity" ).innerHTML = data.main.humidity+"%";
    document.querySelector( "#WindSpeed" ).innerHTML = data.wind.speed+ "km/s";

    
    if(data.weather[0].main==="Clouds")
    {
        weatherIcon.innerHTML=`<i class="ri-cloud-line"></i>`;
    }
    else if(data.weather[0].main==="Clear"){
        weatherIcon.innerHTML=`<i class="ri-sun-line"></i>`;

    }else if(data.weather[0].main==="Rain"){
        weatherIcon.innerHTML=`<i class="ri-rainy-line"></i>`;

    }else if(data.weather[0].main==="Drizzle"){
        weatherIcon.innerHTML=`<i class="ri-drizzle-line"></i>`;

    }
    else if(data.weather[0].main==="Mist"){
        weatherIcon.innerHTML=`<i class="ri-mist-line"></i>`;

    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

  

