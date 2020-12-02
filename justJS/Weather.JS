var fetch = require("node-fetch");

let key = "097bfc28629c9a82fec6c2dde09e35e5"
let lon = -97.060992
let lat = 32.708018;
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${key}`;

fetch(url)
    .then(response => response.json())
    .then(function (data) {
        // for (let day of data.daily) {
        //     console.log("Temp: " + Math.floor((day.temp.max-273)) + " wind will be: " + day.wind_speed + " " + day.weather[0].description);
        // }
        for (let hour of data.hourly) {
            let date = new Date(hour.dt*1000 - 21600*1000);
            let fullDateAndTime = date.toUTCString().substring(0,25)
            
            // console.log("Temp: " + Math.floor((hour.temp))  + " " + hour.weather[0].description + " " + fullDateAndTime)
            console.log(`The temp for  ${fullDateAndTime}  will have a humidity of ${hour.humidity}, a cloud cover percent of ${hour.clouds}%, and the visibility of ${hour.visibility}. The temp for today is ${KtoF(hour.temp)}°F 
             it currently feels like ${KtoF(hour.feels_like)}°F, with a wind speed of ${hour.wind_speed}. Have a wonderful day!` + "\n") 
        }
    })
    function KtoF (temp) {
        let f = (temp - 273) * 9 / 5 + 32;
        return Math.floor(f);
    }













    // this command needs to be executed in your TERMINAL window
//  npm install node-fetch