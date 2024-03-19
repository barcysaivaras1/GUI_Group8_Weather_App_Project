import { useState, useEffect } from 'react';

const useNewWeatherData = (cities) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = '0af6a68e53720e65df9056000903fa1a';
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
    }, [cities]); // Empty dependency array to run the effect only once on mount

    return weatherData;
};

export default useNewWeatherData;