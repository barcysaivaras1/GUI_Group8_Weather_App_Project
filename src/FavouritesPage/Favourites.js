// Favourites.js

import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { Link } from 'react-router-dom';
import Animate_page from '../Animate-page';
import heart from "./img/icon-heart.png"




function Favourites() {
  return (
    <Animate_page>
    <div>
          <div class="favourites">
      <div class="div">
        <div class="overlap-2">
          <div class="overlap-wrapper">
            <div class="overlap-3">
              <div class="text-wrapper-3">Favourites</div>
              <img class="icon-heart" src={heart} />
            </div>
          </div>
          <div class="text-wrapper-4">Your</div>
        </div>
        <div class="text-wrapper-5">{locations.length} Favourites</div>
        <FavouriteBox/>
      </div>
      <Link to="/"> 
				<div class="back-arrow"></div>
			</Link>
    </div>
    </div>
    </Animate_page>
  );
}

export default Favourites;


// {temperatures.map((location, index) => (
//   <div key={index}>
//     <p>{location.name}</p>
//     <p>{location.main.temp}°C</p> {/* Assuming temperature is under main */}
//   </div>
// ))}
const locations = ['Tokyo', 'Osaka', 'Kyoto']; // Your favorite locations

const FavouriteBox = () =>{

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