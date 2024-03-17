import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useWeatherData = () => {
const [city, setCity] = useState('');
const [weatherData, setWeatherData] = useState(null);
const [forecastData, setForecastData] = useState(null);
const [country, setCountry] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const fetchData = useCallback(async () => {
setLoading(true);
setError(null);
try {
    const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8753df73a21dbdc377ad73e23efc22b4`
    );
    setWeatherData(response.data);
    setCountry(response.data.sys.country);

    const forecastResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=8753df73a21dbdc377ad73e23efc22b4`
    );
    setForecastData(forecastResponse.data.list);
} catch (error) {
    setError(error);
}
setLoading(false);
}, [city]);

useEffect(() => {
if (city) {
    fetchData();
}
}, [city, fetchData]);

const handleInputChange = (e) => {
    setCity(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
};

const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSubmit(e);
    }
};

return {
city,
weatherData,
forecastData,
country,
loading,
error,
handleInputChange,
handleSubmit,
handleKeyPress,
};
};

export default useWeatherData;
