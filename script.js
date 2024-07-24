


const apiKey = "8d10c84c2ea1346d6e241b425157f383"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var place = "Bangalore";

async function checkWeather(){
  const response = await fetch(apiUrl +place + `&appid=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector('.location').innerText = data.name;
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;c';
  document.querySelector('.physics').innerText = data.wind.speed + 'km/h';
  document.querySelector('.humidity').innerText = data.main.humidity + '%';

  if(data.weather[0].main === "Clouds")
    document.querySelector('.img1').src = "images/clouds.png";
  else if(data.weather[0].main === 'Clear')
    document.querySelector('.img1').src = "images/clear.png";
  else if(data.weather[0].main === 'Rain')
    document.querySelector('.img1').src = "images/rain.png";
  else if(data.weather[0].main === 'Drizzle')
    document.querySelector('.img1').src = "images/drizzle.png";
  else if(data.weather[0].main === 'Mist')
    document.querySelector('.img1').src = "images/mist.png";

}

const inputValue = document.querySelector('.searchInput');

const checkfunction = () =>{
  place = inputValue.value;
  inputValue.value = "";
  checkWeather()
}

checkWeather();