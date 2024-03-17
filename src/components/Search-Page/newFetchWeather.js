import React from 'react';
import useNewWeatherData from './NewWeatherHook';

const WeatherBoxes = () => {
const cities = ['London', 'Dubai', 'Tokyo', 'Delhi'];
const weatherData = useNewWeatherData(cities);

return (
<div className="weather-container">
    {weatherData.map((data, index) => (
    <div className="weather-box" key={index}>
        <h2>{cities[index]}</h2>
        {data.main && (
        <p>{Math.round(data.main.temp)}°C</p>
        )}
    </div>
    ))}
</div>
);
};

export default WeatherBoxes;