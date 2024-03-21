// FavouriteBox.js
import React, { useState, useEffect } from 'react';

const FavouriteBox = ({ locations }) => {
  const [temperatures, setTemperatures] = useState([]);

  useEffect(() => {
    const fetchTemperatures = async () => {
      const promises = locations.map(location =>
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=0af6a68e53720e65df9056000903fa1a`)
          .then(response => response.json())
      );
      const data = await Promise.all(promises);
      setTemperatures(data);
    };
    fetchTeperatures();

    // Clean up function
    return () => {
      setTemperatures([]);
    };
  }, [locations]);

  return (
    <div className="container">
      {temperatures.map((location, index) => (
        <div key={index} className="box">
          <div className='overlap-4'>
            <p className="city-country">
              <span className="span">{location.name}, <br /></span> <span className="text-wrapper-6">{location.sys.country}</span>
            </p>
            <div className="temp">{Math.round(location.main.temp)}°C</div>
            <img className="weather-type" src={`http://openweathermap.org/img/wn/${temperatures[index].weather[0].icon}@2x.png`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavouriteBox;