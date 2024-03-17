import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useCitySelector = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [cities, setCities] = useState([]);
  const [capitalCity, setCapitalCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [cityArray, setCityArray] = useState([]);

  useEffect(() => {
    // Fetch list of countries when component mounts
    fetch('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': 'Wmk1Vlhxa3hIVTNBeE9rS3NubE9QSUdheHQ2YmtrQVRPdk1UMERvWg==', // Replace with your actual API key
      },
    })
      .then(response => response.json())
      .then(data => {
        setCountries(data);
        setFilteredCountries(data); // Initialize filtered countries with all countries
      });
  }, []);

  const handleCountryChange = async event => {
    const countryCode = event.target.value;
    setSelectedCountry(countryCode);

    // Fetch cities based on selected country
    const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/cities`, {
      headers: {
        'X-CSCAPI-KEY': 'Wmk1Vlhxa3hIVTNBeE9rS3NubE9QSUdheHQ2YmtrQVRPdk1UMERvWg==', // Replace with your actual API key
      },
    });
    const data = await response.json();
    setCities(data);

    // Fetch country information to get capital city
    const countryResponse = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}`, {
      headers: {
        'X-CSCAPI-KEY': 'Wmk1Vlhxa3hIVTNBeE9rS3NubE9QSUdheHQ2YmtrQVRPdk1UMERvWg==', // Replace with your actual API key
      },
    });
    const countryData = await countryResponse.json();
    setCapitalCity(countryData.capital);

    // Update city array with the capital city and the first four cities
    const firstFourCities = data.slice(0, 4).map(city => city.name);
    setCityArray([countryData.capital, ...firstFourCities]);
  };

  const handleSearchChange = event => {
    const searchText = event.target.value;
    const filtered = countries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()));
    setFilteredCountries(filtered);
  };

  return { countries: filteredCountries, selectedCountry, cities, capitalCity, temperature, handleCountryChange, cityArray, handleSearchChange };
};

export default useCitySelector;

