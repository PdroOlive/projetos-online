const fieldForm = document.querySelector("#container-form");
const inputLocation: HTMLInputElement | null = document.querySelector("#ilocation");
const fieldWeather = document.querySelector("#container-weather");


const renderWeb = () =>
{
    const weatherOnStorage = localStorage.getItem("weather")
    if(!weatherOnStorage) return;

    const arrayWeather = [JSON.parse(weatherOnStorage)]
    arrayWeather.forEach((index) => 
    {
        let stormy = index.id >= 200 && index.id <= 232 ? true : false;
        let rain = index.id >= 500 && index.id <= 531 ? true : false;
        let clear = index.id === 800 ? true : false;
        let clouds = index.id >= 801 && index.id <= 804 ? true : false;

        fieldWeather!.innerHTML = 
        `
            <div id="city-temp">
                <h2 class="weather-infos">${index.city} </h2>
                <span id="span-weather">${index.tem}°C</span>
                <h2 class="weather-infos"> ${index.desc} </h2>
            </div>
            <img id="weather-image" src="${index.icon}" alt="">
        `


        if(stormy && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/stormy-day.jpeg")`;
        }
        else if(stormy && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/stormy-night.jpeg")`;
        }
        else if(rain && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/rain-day.jpeg")`;
        }
        else if(rain && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/rain-night.jpeg")`;
        }
        else if(clouds && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url(./assets/clouds-day.jpeg)`;
        }
        else if(clouds && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url(./assets/clouds-night.jpeg)`;
        }
        else if(clear && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/clear-sky-day.jpg")`;
        }
        else if(clear && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/clear-sky-night.jpg")`;
        }
    })
}

const genericFun = async () =>
{
    if(!inputLocation || !fieldWeather) return;

    const location = inputLocation.value

    if(location.length < 3)
    {    
        alert("O campo precisa ter pelo menos 3 letras!!!");
        return;
    }
    
    try
    {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6b1c43b0b154dc2763eef8a652ff6ee&lang=pt_br&units=metric`);

        const dataWeather = await response.json();
        console.log(dataWeather);

        const storageWeather = 
        {
            city: dataWeather.name,
            tem: Math.round(dataWeather.main.temp),
            icon: `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`,
            desc: dataWeather.weather[0].description,
            id: dataWeather.weather[0].id,
        }

        localStorage.setItem("weather", JSON.stringify(storageWeather))

        let stormy = storageWeather.id >= 200 && storageWeather.id <= 232 ? true : false;
        let rain = storageWeather.id >= 500 && storageWeather.id <= 531 ? true : false;
        let clear = storageWeather.id === 800 ? true : false;
        let clouds = storageWeather.id >= 801 && storageWeather.id <= 804 ? true : false;

        fieldWeather.innerHTML = 
        `
            <div id="city-temp">
                <h2 class="weather-infos">${storageWeather.city} </h2>
                <span id="span-weather">${storageWeather.tem}°C</span>
                <h2 class="weather-infos"> ${storageWeather.desc} </h2>
            </div>
            <img id="weather-image" src="${storageWeather.icon}" alt="">
        `
        inputLocation.value = "";


        if(stormy && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/stormy-day.jpeg")`;
        }
        else if(stormy && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/stormy-night.jpeg")`;
        }
        else if(rain && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/rain-day.jpeg")`;
        }
        else if(rain && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/rain-night.jpeg")`;
        }
        else if(clouds && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url(./assets/clouds-day.jpeg)`;
        }
        else if(clouds && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url(./assets/clouds-night.jpeg)`;
        }
        else if(clear && new Date().getHours() <= 17)
        {
            document.body.style.backgroundImage = `url("./assets/clear-sky-day.jpg")`;
        }
        else if(clear && new Date().getHours() >= 18)
        {
            document.body.style.backgroundImage = `url("./assets/clear-sky-night.jpg")`;
        }
    }
    catch(err)
    {
        console.log("Error", err);
    }
}


fieldForm?.addEventListener("submit", (event) =>
{
    event.preventDefault()
    genericFun()
    
});

window.onload = () =>
{
    renderWeb()
}

// npm install webpack webpack-cli
