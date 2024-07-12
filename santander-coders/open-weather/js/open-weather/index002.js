var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saudacao, PI } from "./ex.js";
saudacao();
console.log(PI);
const fieldForm = document.querySelector("#container-form");
const inputLocation = document.querySelector("#ilocation");
const fieldWeather = document.querySelector("#container-weather");
fieldForm === null || fieldForm === void 0 ? void 0 : fieldForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!inputLocation || !fieldWeather)
        return;
    const location = inputLocation.value;
    if (location.length < 3) {
        alert("O campo precisa ter pelo menos 3 letras!!!");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6b1c43b0b154dc2763eef8a652ff6ee&lang=pt_br&units=metric`);
        const dataWeather = yield response.json();
        console.log(dataWeather);
        const storageWeather = {
            city: dataWeather.name,
            tem: Math.round(dataWeather.main.temp),
            icon: `https://openweathermap.org/img/wn/${dataWeather.weather[0].icon}@2x.png`,
            desc: dataWeather.weather[0].description,
        };
        fieldWeather.innerHTML =
            `
            <div id="city-temp">
                <h2 class="weather-infos">${storageWeather.city} </h2>
                <span id="span-weather">${storageWeather.tem}°C</span>
                <h2 class="weather-infos"> ${storageWeather.desc} </h2>
            </div>
            <img id="weather-image" src="${storageWeather.icon}" alt="">
        `;
        if (storageWeather.desc === "céu limpo") {
            document.body.style.backgroundImage = `url()`;
        }
        inputLocation.value = "";
    }
    catch (err) {
        console.log("Error", err);
    }
}));
