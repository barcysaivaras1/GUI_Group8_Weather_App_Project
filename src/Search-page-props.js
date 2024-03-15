import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './globals.css'; // Import global CSS styles
import './style.css'; // Import component-specific CSS styles
import './styleguide.css';
import SearchResults from './results';
import useWeatherData from './fetchWeather';
// import useCitySelector from '../useCountry';
// import useWeatherAndCityData from '../fetchWeatherAndCountry';
function WeatherSearchPage()
  {
  const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress} = useWeatherData();
//   const { countries, selectedCountry, cities, capitalCity, handleCountryChange } = useCitySelector();
  // const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress,countries,selectedCountry,cities,capitalCity,handleCountryChange} = useWeatherAndCityData();


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
            <img className="img" src="./images/rectangle-43.svg" alt="Rectangle" />
            <div class="text-wrapper-3">Results</div>
            <div class="group"><img class="dots-three-vertical" src="./images/dots-three-vertical.svg" /></div>
            <div class="places-to-go">
                <div class="overlap-4">
                    <div class="rectangle-2"></div>
                    <img class="licensed-image" src="./images/licensed-image-1.png" />
                    <div class="rectangle-3"></div>
                    <div class="rectangle-4"></div>
                    <div class="text-wrapper-4">Places To Go</div>
                    <div class="text-wrapper-5">Dubai</div>
                    <div class="element-4">37º</div>
                    <div class="overlap-group-wrapper">
                        <div class="overlap-group-2">
                            <div class="rectangle-5"></div>
                            <div class="ellipse"></div>
                            <div class="ellipse-2"></div>
                            <div class="ellipse-3"></div>
                            <div class="ellipse-4"></div>
                        </div>
                    </div>
                    <img class="arrow" src="./images/arrow-1.svg" />
                    <img class="arrow-2" src="./images/arrow-2.svg" />
                </div>
            </div>
        </div>
    </div>
);
}

export default WeatherSearchPage;