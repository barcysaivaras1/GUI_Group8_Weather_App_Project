import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0af6a68e53720e65df9056000903fa1a`
      );
      setWeatherData(response.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=0af6a68e53720e65df9056000903fa1a`
      );
      setForecastData(forecastResponse.data.list);
      console.log(forecastResponse.data.list);
    } catch (error) {
      console.error(error);
    }
  }, [city]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>Maximum Temperature: {Math.ceil(weatherData.main.temp_max)}</p>
          <p>Minimum Temperature: {Math.ceil(weatherData.main.temp_min)}</p>
          <p>Temperature: {Math.ceil(weatherData.main.temp)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          <p>Feels like: {Math.ceil(weatherData.main.feels_like)}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Pressure: {weatherData.main.pressure}</p>
          <p>Wind Speed: {weatherData.wind.speed}m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}

      {forecastData ? (
        <>
          <h3>5-Day Forecast (3-hour intervals):</h3>
          {forecastData.map((forecast, index) => (
            <div key={index}>
              <p>{new Date(forecast.dt * 1000).toLocaleDateString()}: {forecast.weather[0].description}</p>
              <p>Temperature: {Math.ceil(forecast.main.temp)}°C</p>
              <p>Humidity: {forecast.main.humidity}%</p>
              <p>Wind Speed: {forecast.wind.speed}m/s</p>
              <hr />
            </div>
          ))}
        </>
      ) : (
        <p>Loading forecast data...</p>
      )}
    </div>
  );
};

export default Weather;
