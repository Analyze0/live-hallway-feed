const apiKey = '0a5c2d90b6f4fd2083d8718c8cec57f4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=philadelphia,us&appid=4342f44b6779ef65feacf3f8ac5fda5c&units=metric';

async function checkWeather (){
  const response = await fetch(apiUrl);
  var data = await response.json();

  console.log(data);

  document.getElementById('temp').innerHTML = "Temperature: " + Math.round((data.main.temp * 9/5) + 32) + '°F';
  document.getElementById('feelslike').innerHTML = "Feels Like: " + Math.round((data.main.feels_like * 9/5) + 32) + '°F';
  document.getElementById('hightemp').innerHTML = "High Temperature: " + Math.round((data.main.temp_max * 9/5) + 32) + '°F';
  document.getElementById('lowtemp').innerHTML = "Lowest Temperature: " + Math.round((data.main.temp_min * 9/5) + 32) + '°F';
  document.getElementById('weather').innerHTML = "Weather: " + data.weather[0].main;
}

// Run checkWeather() every 5 minutes
setInterval(checkWeather, 5 * 60 * 1000);
checkWeather(); // Run once immediately




// Get current date
function getCurrentDate() {
  return new Date().toLocaleDateString();
}

// Get current time
function getCurrentTime() {
  return new Date().toLocaleTimeString();
}

let currentDate = getCurrentDate();
let currentTime = getCurrentTime();

setInterval(function() {
  let newDate = getCurrentDate();
  let newTime = getCurrentTime();
if (newDate !== currentDate || newTime !== currentTime) {
    currentDate = newDate;
    currentTime = newTime;
    document.querySelector('.time').innerHTML = currentTime + "<br>" + currentDate;
}
}, 1000); // Check every second for changes
