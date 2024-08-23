const axios = require('axios');

const API_KEY = 'api_key_here';
const city = 'Bhubaneswar';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

axios.get(url)
  .then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${city}: ${weatherData.weather[0].description}`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
