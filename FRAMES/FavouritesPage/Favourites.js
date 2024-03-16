// Favourites.js

import React, { useState, useEffect } from 'react';

function Favourites() {
  const [temperatures, setTemperatures] = useState([]);

  useEffect(() => {
    const locations = ['Tokyo', 'Osaka', 'Kyoto']; // Your favorite locations
    const fetchTemperatures = async () => {
      const promises = locations.map(location =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0af6a68e53720e65df9056000903fa1a`)
          .then(response => response.json())
      );
      const data = await Promise.all(promises);
      setTemperatures(data);
    };
    fetchTemperatures();
  }, []); // Empty dependency array to only run effect once on mount

  return (
    <div>
      {temperatures.map((location, index) => (
        <div key={index}>
          <p>{location.name}</p>
          <p>{location.main.temp}°C</p> {/* Assuming temperature is under main */}
        </div>
      ))}
    </div>
  );
}

export default Favourites;
