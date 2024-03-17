import React, { useEffect, useState, useCallback } from 'react';
import './globals.css'; // Import global CSS styles
import './style.css'; // Import component-specific CSS styles
import './styleguide.css';
import SearchResults from './results';
import useWeatherData from './fetchWeather';
import useCitySelector from '../useCountry';
function WeatherSearchPage()
{
const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress} = useWeatherData();
const { countries, selectedCountry, cities, cityArray, capitalCity, handleCountryChange } = useCitySelector();



return (
    <div className="iphone">
        <div className="div">
            <div className="overlap">
                <input
                    className="text-wrapper"
                    type="search"
                    placeholder="City"
                    value={city}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <form onSubmit={handleSubmit}>
                    <button type="submit" style={{ display: 'none' }}>Get Weather</button>
                </form>
            </div>
            {weatherData ? (
                <>
                    <SearchResults name={weatherData.name} country={country} temp={Math.ceil(weatherData.main.temp)} image='./images/emoji-cloud-with-rain.png' />
                    <SearchResults name={weatherData.name} country={country} temp={Math.ceil(weatherData.main.temp)} image='./images/emoji-white-sun-behind-cloud-with-rain.png' />
                    <SearchResults name= 'Kyoto' country={country} temp={Math.ceil(weatherData.main.temp)} image='./images/icon-weather-windy.png' />
                </>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    </div>
);
}

export default WeatherSearchPage;