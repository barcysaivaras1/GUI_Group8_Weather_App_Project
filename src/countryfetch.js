import React, { useState, useEffect } from 'react';
import useCitySelector from './components/useCountry';

function CitySelector() {
    const { countries, selectedCountry, cities, capitalCity, temperature, handleCountryChange, cityArray } = useCitySelector();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    };
    console.log(selectedCountry, cityArray)
return (
<div>
    <h2>Select a Country</h2>
    <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Type to search..."
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

    <h2>{selectedCountry}</h2>
    <p>Capital City: {capitalCity}</p>

    <h2>Cities in {selectedCountry}</h2>
    <p>Number of cities: {cities.length}</p>
    <ul>
    {cities.map(city => (
        <li key={city.id}>{city.name}</li>
    ))}
    </ul>
</div>
);
}

export default CitySelector;
