(()=>{"use strict";console.log("Hello World!!!"),console.log(3.1415);const e=document.querySelector("#container-form"),n=document.querySelector("#ilocation"),t=document.querySelector("#container-weather");null==e||e.addEventListener("submit",(e=>{return o=void 0,c=void 0,a=function*(){if(e.preventDefault(),!n||!t)return;const o=n.value;if(o.length<3)alert("O campo precisa ter pelo menos 3 letras!!!");else try{const e=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=c6b1c43b0b154dc2763eef8a652ff6ee&lang=pt_br&units=metric`),c=yield e.json();console.log(c);const r={city:c.name,tem:Math.round(c.main.temp),icon:`https://openweathermap.org/img/wn/${c.weather[0].icon}@2x.png`,desc:c.weather[0].description};t.innerHTML=`\n            <div id="city-temp">\n                <h2 class="weather-infos">${r.city} </h2>\n                <span id="span-weather">${r.tem}°C</span>\n                <h2 class="weather-infos"> ${r.desc} </h2>\n            </div>\n            <img id="weather-image" src="${r.icon}" alt="">\n        `,"céu limpo"===r.desc&&(document.body.style.backgroundImage="url()"),n.value=""}catch(e){console.log("Error",e)}},new((r=void 0)||(r=Promise))((function(e,n){function t(e){try{l(a.next(e))}catch(e){n(e)}}function i(e){try{l(a.throw(e))}catch(e){n(e)}}function l(n){var o;n.done?e(n.value):(o=n.value,o instanceof r?o:new r((function(e){e(o)}))).then(t,i)}l((a=a.apply(o,c||[])).next())}));var o,c,r,a}))})();