import React, { useEffect, useState, useCallback } from 'react';
import './Search-page.css'; // Import component-specific CSS styles
import SearchResults from './results';
import useWeatherData from './fetchWeather';
import useCitySelector from '../useCountry';
import useNewWeatherData from './NewWeatherHook';
import { Link } from 'react-router-dom';
function NewWeatherSearchPage()
{
    const { countries, selectedCountry, cities, cityArray, capitalCity, handleCountryChange } = useCitySelector();
    const cities1 = ["London","Kyoto","Dubai","Manchester","Delhi"]
    const weatherData = useNewWeatherData(cities1);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    };

return (
    <div className="search-page">
        <div className="div">
            {/* <div className="overlap">
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
            </div> */}
            <div className="search-bar">
                <input
                    className="text-wrapper"
                    type="search"
                    placeholder="City"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="overlap">
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
                    name={cities1[index]}
                    temp = {data.main && (
                        <p className='temp'>{Math.round(data.main.temp)}°C</p>
                        )}
                />
            ))}
        </div>
        <Link to="/"> 
			<div class="arrow"></div>`
		</Link>
    </div>
);
}

export default NewWeatherSearchPage;