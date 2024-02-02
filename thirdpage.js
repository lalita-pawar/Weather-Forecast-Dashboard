function searchWeather() {
  const cityInput = document.getElementById('city-input');
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const currentWeatherContainer = document.getElementById('current-weather');
  const forecastContainer = document.getElementById('forecast');

 
  const dummyCurrentWeather = {
    temperature: 25,
    minTemperature: 20,
    maxTemperature: 28,
    humidity: 60,
    windSpeed: 10,
    windDirection: 'NE',
    description: 'Clear Sky',
    //icon: 'sun',
  };

  const dummyForecast = [
    { date: '2024-02-02', avgTemperature: 26, description: 'Clear Sky', icon: 'sun' },
    { date: '2024-02-03', avgTemperature: 24, description: 'Partly Cloudy', icon: 'cloud-sun' },
    // Add more forecast data
  ];

  // Display current weather
  currentWeatherContainer.innerHTML = `
    <h2>${cityInput.value}</h2>
    <p>Temperature: ${dummyCurrentWeather.temperature}°</p>
    <p>Min/Max Temperature: ${dummyCurrentWeather.minTemperature}°/${dummyCurrentWeather.maxTemperature}°</p>
    <p>Humidity: ${dummyCurrentWeather.humidity}%</p>
    <p>Wind: ${dummyCurrentWeather.windSpeed} m/s ${dummyCurrentWeather.windDirection}</p>
    <p>Description: ${dummyCurrentWeather.description}</p>
    
 
  `;

  // Display forecast
  forecastContainer.innerHTML = '<h2>5-Day Forecast</h2>';
  dummyForecast.forEach(day => {
    forecastContainer.innerHTML += `
      <div class="forecast-day">
        <p>Date: ${day.date}</p>
        <p>Avg Temperature: ${day.avgTemperature}°</p>
        <p>Description: ${day.description}</p>
       
      </div>
    `;
  });
}
