const API_KEY=`efb204a73c2acc447b615ad44124562d`
//const API=`https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${API key}&&units=metric`
//const IMG_URL=`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const form=document.querySelector("form");
const search=document.querySelector("#search");
const weather=document.querySelector("#weather")
const getWeather=async(city)=>{
    weather.innerHTML=`<h2>loading</h2>`
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&&units=metric`
    const response=await fetch(url);
    const data=await response.json()
    console.log(data)
    return showWeather(data)
}
const showWeather=(data)=>{
    if(data.cod=="404"){
        weather.innerHTML=
        `<h4>City Not Found</h4>`
        return;
    }
    weather.innerHTML = `
    <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="" height="80px">
            </div>
            <div>
                <h2>${data.main.temp} °C </h2>
                <h4>${data.weather[0].description}</h4>
            </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)

