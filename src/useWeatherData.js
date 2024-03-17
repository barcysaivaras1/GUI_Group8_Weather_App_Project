// useWeatherData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = (city) => {
const [weatherData, setWeatherData] = useState(null);
const [forecastData, setForecastData] = useState(null);

useEffect(() => {
const fetchData = async () => {
    try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
    );
    setWeatherData(response.data);

    const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=YOUR_API_KEY`
    );
    setForecastData(forecastResponse.data.list);
    } catch (error) {
    console.error(error);
    }
};

fetchData();
}, [city]);

return { weatherData, forecastData };
};

export default useWeatherData;