import { useState, useEffect } from 'react';

const useNewWeatherData = (cities) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = '8753df73a21dbdc377ad73e23efc22b4';
            const units = 'metric'; // You can change units to 'imperial' for Fahrenheit
            const requests = cities.map(city =>
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
                    .then(response => response.json())
                    .catch(error => console.error('Error fetching weather data:', error))
            );

            try {
                const responses = await Promise.all(requests);
                setWeatherData(responses);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();
    }, []); // Empty dependency array to run the effect only once on mount

    return weatherData;
};

export default useNewWeatherData;