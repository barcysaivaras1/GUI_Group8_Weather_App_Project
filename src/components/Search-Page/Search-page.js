import React, { useEffect, useState, useCallback } from 'react';
import './Search-page.css'; // Import component-specific CSS styles
import SearchResults from './results';
import useWeatherData from './fetchWeather';
import useCitySelector from '../useCountry';
import useNewWeatherData from './NewWeatherHook';
import { Link } from 'react-router-dom';
import Animate_page from '../../Animate-page';
function NewWeatherSearchPage()
{
    const { countries, selectedCountry, cities, cityArray, capitalCity, handleCountryChange } = useCitySelector();
    const cities1 = ["London","Kyoto","Dubai","Manchester","Delhi"]
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    };
    const weatherData = useNewWeatherData(cityArray);
    console.log(cityArray)
    console.log(selectedCountry)
    console.log(weatherData[3])

return (
    <Animate_page>
    <div className="search-page">
        <div className="div">
            <div className="search-bar">
                <div className="overlap">
                    <input
                        className="text-box"
                        type="search"
                        placeholder="City"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
            </div>
                <select className='country-choice' value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select a country</option>
                {countries
                .filter(country => country.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
                .map(country => (
                    <option key={country.iso2} value={country.iso2}>
                    {country.name}
                    </option>
                ))}
                </select>
            </div>
            
            {selectedCountry && weatherData.map((data, index) => (
                <SearchResults
                    key={index}
                    name={cityArray[index]}
                    country = {selectedCountry} 
                    temp = {data.main && (
                        <p className='temp'>{Math.round(data.main.temp)}°C</p>
                        )}
                    image = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" />
                
            ))}
        </div>
        <Link to="/"> 
			<div class="arrow"></div>`
		</Link>
    </div>
    </Animate_page>
);
}

export default NewWeatherSearchPage;

