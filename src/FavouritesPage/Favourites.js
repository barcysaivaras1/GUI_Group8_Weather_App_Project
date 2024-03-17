// Favourites.js

import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { Link } from 'react-router-dom';






function Favourites() {
  return (
    <div>
          <div class="favourites">
      <div class="div">
        <div class="group"><img class="dots-three-vertical" src="img/dots-three-vertical.svg" /></div>
        <div class="places-to-go">
          <div class="overlap">
            <div class="rectangle"></div>
            <img class="licensed-image" src="img/licensed-image-1.png" />
            <div class="rectangle-2"></div>
            <div class="rectangle-3"></div>
            <div class="text-wrapper">Places To Go</div>
            <div class="text-wrapper-2">Dubai</div>
            <div class="element">37º</div>
            <div class="overlap-group-wrapper">
              <div class="overlap-group">
                <div class="rectangle-4"></div>
                <div class="ellipse"></div>
                <div class="ellipse-2"></div>
                <div class="ellipse-3"></div>
                <div class="ellipse-4"></div>
              </div>
            </div>
            <img class="arrow" src="img/arrow-1.svg" />
            <img class="img" src="img/arrow-2.svg" />
          </div>
        </div>
        <div class="overlap-2">
          <div class="overlap-wrapper">
            <div class="overlap-3">
              <div class="text-wrapper-3">Favourites</div>
              <img class="icon-heart" src="img/icon-heart.png" />
            </div>
          </div>
          <div class="text-wrapper-4">Your</div>
        </div>
        <div class="text-wrapper-5">4 Favourites</div>
        <FavouriteBox/>
        <img class="rectangle-5" src="img/rectangle-47.svg" />
      </div>
      <Link to="/"> 
				<div class="back-arrow"></div>`
			</Link>
    </div>
    </div>
  );
}

export default Favourites;


// {temperatures.map((location, index) => (
//   <div key={index}>
//     <p>{location.name}</p>
//     <p>{location.main.temp}°C</p> {/* Assuming temperature is under main */}
//   </div>
// ))}


const FavouriteBox = () =>{

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

  return(
    <div className="container">
    {temperatures.map((location, index) => (
      <div key={index} className="box">
        <div className='overlap-4'>
          <p className="city-country">
            <span className="span">{location.name}, <br /></span> <span className="text-wrapper-6">Japan</span>
          </p>
          <div className="temp">{Math.round(location.main.temp)}°C</div>
          <img className="weather-type" src={`http://openweathermap.org/img/wn/${temperatures[1].weather[0].icon}@2x.png`} />
        </div>
      </div>
    ))}
  </div>)
}