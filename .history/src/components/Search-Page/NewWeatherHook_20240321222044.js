import { useState, useEffect } from 'react';

const useNewWeatherData = (cities) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        let isMounted = true; // Flag to track component mount status

        const fetchWeatherData = async () => {
            const apiKey = '8753df73a21dbdc377ad73e23efc22b4';
            const units = 'metric'; // We can change units to 'imperial' for Fahrenheit

            const requests = cities.map(city =>
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`)
                    .then(response => response.json())
                    .catch(error => {
                        console.error('Error fetching weather data:', error);
                        return null; // Return null for failed requests
                    })
            );

            try {
                const responses = await Promise.all(requests);
                if (isMounted) {
                    setWeatherData(responses.filter(data => data !== null)); // Filter out null responses
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();

        return () => {
            isMounted = false; // Cleanup: Set isMounted to false on component unmount
        };
    }, [cities]);

    return weatherData;
};

export default useNewWeatherData;
