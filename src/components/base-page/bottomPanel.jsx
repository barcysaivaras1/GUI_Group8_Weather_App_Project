import React, { useEffect, useState } from 'react';
import './bottomPanel.css'; // Adjust the path as necessary
import DestinationCard from "../../DestinationCard"; // Adjust the path as necessary
import dubaiImg from '../images/dubai.png';
import newYorkImg from '../images/newyork.png';
import seoulImg from '../images/seoul.png';
import miamiImg from '../images/miami.jpg';
import shanghaiImg from '../images/shanghai.jpeg';
import singaporeImg from '../images/singapore.jpeg';
import sydneyImg from '../images/sydney.jpeg';
import losAngImg from '../images/los-angeles.jpeg';
import kochiImg from '../images/kochi.jpeg';
import bangkokImg from '../images/bangkok.jpeg';
import amsterdamImg from '../images/amsterdam.jpeg';

function BottomPanel() {
    const overflowPanel = {
        paddingTop: '5px',
        maxHeight: '650px',
        overflowY: 'auto',
        overflowX: 'hidden',
    };
    const styleHeading = {
        fontFamily: 'Helvetica Neue-Bold, sans-serif',
        paddingLeft: '14px',
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '500',
    };

    const [destinations, setDestinations] = useState([
        { city: 'Dubai', imageUrl: dubaiImg },
        { city: 'New York', imageUrl: newYorkImg },
        { city: 'Seoul', imageUrl: seoulImg },
        { city: 'Miami', imageUrl: miamiImg },
        { city: 'Shanghai', imageUrl: shanghaiImg },
        { city: 'Singapore', imageUrl: singaporeImg },
        { city: 'Sydney', imageUrl: sydneyImg },
        { city: 'Los Angeles', imageUrl: losAngImg },
        { city: 'Kochi', imageUrl: kochiImg },
        { city: 'Bangkok', imageUrl: bangkokImg },
        { city: 'Amsterdam', imageUrl: amsterdamImg },
    ]);

    useEffect(() => {
        const API_KEY = '8753df73a21dbdc377ad73e23efc22b4';
        const fetchWeatherForCity = async (city) => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
                );
                const data = await response.json();
                return `${Math.round(data.main.temp)}°C`;
            } catch (error) {
                console.error("Error fetching weather data for city:", city, error);
                return 'N/A';
            }
        };

        const updateDestinationsWithWeather = async () => {
            const promises = destinations.map(async (destination) => {
                const temperature = await fetchWeatherForCity(destination.city);
                return { ...destination, temperature };
            });

            Promise.all(promises).then(setDestinations);
        };

        updateDestinationsWithWeather();
    }, []);

    return (
        <div className="thePanel">
            <div className="centered-pill"></div>
            <span className="places-to-go" style={styleHeading}>Places To Go</span>
            <div style={overflowPanel}>
                {destinations.map((destination, index) => (
                    <DestinationCard
                        key={index}
                        city={destination.city}
                        temperature={destination.temperature}
                        imageUrl={destination.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

export default BottomPanel;
