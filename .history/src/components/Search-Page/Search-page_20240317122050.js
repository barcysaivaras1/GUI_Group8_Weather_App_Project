import React, { useEffect, useState, useCallback } from 'react';
import './globals.css'; // Import global CSS styles
import './style.css'; // Import component-specific CSS styles
import './styleguide.css';
import SearchResults from './results';
import useWeatherData from './fetchWeather';
import useCitySelector from '../useCountry';
import useNewWeatherData from './NewWeatherHook';
function NewWeatherSearchPage()
{
    const { countries, selectedCountry, cities, cityArray, capitalCity, handleCountryChange } = useCitySelector();
    const cities1 = ["London","Kyoto","Dubai","Manchester","Delhi"]
    const weatherData = useNewWeatherData(cities1);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    };
    console.log(cityArray)

return (
    <div className="iphone">
        <div className="div">
            <div className="overlap">
                <input
                    className="text-wrapper"
                    type="search"
                    placeholder="City"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries
                .filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(country => (
                    <option key={country.iso2} value={country.iso2}>
                    {country.name}
                    </option>
                ))}
                </select>
            </div>
            
            {weatherData.map((data, index) => (
                <SearchResults
                    key={index}
                    name={cityArray[index]}
                    country = {data.country} 
                    temp = {data.main && (
                        <p>{Math.round(data.main.temp)}°C</p>
                        )}
                />
            ))}
        </div>
    </div>
);
}

export default NewWeatherSearchPage;