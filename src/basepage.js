import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './basepage.css'; 
import { Link } from 'react-router-dom';
// import './styleguide.css'; 
import vectorImage from './img/vector.svg';
import rectangle44 from './img/rectangle-44.svg';
import licensedImage1 from './img/licensed-image-1.png';
import arrow1 from './img/arrow-1.svg'; 
import arrow2 from './img/arrow-2.svg';
import ellipse8 from './img/ellipse-8.svg';
import city1 from './images/city-1.jpg';
import city2 from './images/city-2.jpg';
import city3 from './images/city-3.jpg';
import city4 from './images/city-4.jpg';
import BottomPanelImplemented from "./bottomPanel";
import {Drawer} from "vaul";
import BottomPanel from "./bottomPanel";

function BasePage() {
  // State for London's weather
  const [currentTemp, setCurrentTemp] = useState('');
  const [weatherDesc, setWeatherDesc] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [forecastData, setForecastData] = useState(null);

  
  


  // State for cities and their weather information in the slider
  const [cities, setCities] = useState([
    { name: "Dubai", image: licensedImage1, weather: 'Loading weather...' },
    { name: "New York", image: city1, weather: 'Loading weather...' },
    { name: "Bangkok", image: city2, weather: 'Loading weather...' },
    { name: "Sydney", image: city3, weather: 'Loading weather...' },
    { name: "Cairo", image: city4, weather: 'Loading weather...' },
    
  ]);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  // Fetch weather for London
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=8753df73a21dbdc377ad73e23efc22b4`
        );
        setCurrentTemp(Math.round(response.data.main.temp));
        setWeatherDesc(response.data.weather[0].description);
        setTempMin(Math.ceil(response.data.main.temp_min));
        setTempMax(Math.ceil(response.data.main.temp_max));
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    };

    fetchWeatherData();
  }, []); // Runs once after initial render to fetch London's weather


  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        // Replace "London" with a dynamic city name if needed
        const forecastResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=London&units=metric&appid=8753df73a21dbdc377ad73e23efc22b4`
        );
        setForecastData(forecastResponse.data.list);
      } catch (error) {
        console.error("Failed to fetch forecast data:", error);
      }
    };
  
    fetchForecastData();
  }, []);

  
  

  // Fetch weather for cities in the slider
  useEffect(() => {
    const fetchWeatherDataForCities = async () => {
      const apiKey = '8753df73a21dbdc377ad73e23efc22b4'; 
      const weatherDataPromises = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=metric&appid=8753df73a21dbdc377ad73e23efc22b4`)
      );

      try {
        const results = await Promise.all(weatherDataPromises);
        const updatedCities = cities.map((city, index) => ({
          ...city,
          weather: `${Math.round(results[index].data.main.temp)}°C`
        }));
        setCities(updatedCities);
      } catch (error) {
        console.error("Failed to fetch weather data for cities:", error);
      }
    };

    fetchWeatherDataForCities();
  }, []); // Dependency array is empty, so this runs once after initial render

  // Function to cycle to the next city in the slider
  const nextCity = useCallback(() => {
    setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
  }, [cities.length]);

  // Automatic cycle through cities
  useEffect(() => {
    const intervalId = setInterval(nextCity, 3000); // Change city every 3 seconds
    return () => clearInterval(intervalId); // Clean up on component unmount
  }, [nextCity]);

  const [isOpen] = useState(true);

 return (
   <div className="basepage">
     <div className="div">
       <div className="overlap">
       
         <div className="element">{currentTemp ? `${currentTemp}º` : 'Loading...'}</div>
         <div className="text-wrapper">{weatherDesc ? weatherDesc : 'Loading...'}</div>
         <div className="text-wrapper-2">London</div>
         <div className="text-wrapper-3">You are in</div>
         <div className="group">
         {/* /!*<button className="button-style">*!/*/}
         {/* /!* <img className="dots-three-vertical" src={dotsThreeVertical} alt="Dots Vertical" />*!/*/}
         {/* /!*</button>*!/*/}
         </div>
         <div className="text-wrapper-4">{tempMin ? `${tempMin}º` : 'Loading...'}</div>
         <div className="text-wrapper-5">{tempMax ? `${tempMax}º` : 'Loading...'}</div>
         <div className="rectangle"></div>
       </div>
       <Link to="/search">
        <div className="frame">
        <button className="button-style search-button">
          <div className="overlap-group">
            <div className="text-wrapper-6">Search</div>
          </div>
          </button>
        </div>
       </Link>
       <div className="overlap-2">
         <div className="overlap-wrapper">
           <div className="overlap-3">
             <div className="rectangle-2"></div>
             <div className="group-2">
               <div className="cardweather">
                 <div className="overlap-group-2">
                  <div className="text-wrapper-7">{forecastData && forecastData.length > 0 ? `${Math.round(forecastData[0].main.temp)}°C` : 'Loading...'}</div>
                  <div className="text-wrapper-8">{forecastData && forecastData.length > 0 ? `${new Date(forecastData[0].dt * 1000).getHours()}:00` : 'Loading...'}</div>
                  <img className="weather-icon" src={forecastData && forecastData.length > 0 ? `http://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png` : ''} alt="Weather Icon" />
                   <div className="group-3">
                     <div className="overlap-4">
                       <div className="ellipse"></div>
                       <div className="overlap-group-wrapper">
                         <div className="union-wrapper">
                           <div className="union-wrapper"></div>
                         </div>
                       </div>
                     </div>
                   </div>
                   <div className="rectangle-3"></div>
                 </div>
               </div>
               <div className="div-wrapper">
                 <div className="overlap-group-2">
                   <div className="text-wrapper-9">{forecastData && forecastData.length > 1 ? `${Math.round(forecastData[1].main.temp)}°C` : 'Loading...'}</div>
                   <div className="text-wrapper-8">{forecastData && forecastData.length > 1 ? `${new Date(forecastData[1].dt * 1000).getHours()}:00` : 'Loading...'}</div>
                   <img className="weather-icon" src={forecastData && forecastData.length > 1 ? `http://openweathermap.org/img/wn/${forecastData[1].weather[0].icon}@2x.png` : ''} alt="Weather Icon" />
                   <div className="group-4">
                     <div className="overlap-4">
                       <div className="ellipse"></div>
                       <div className="overlap-group-wrapper">
                         <div className="img-wrapper"></div>
                       </div>
                     </div>
                   </div>
                   <div className="rectangle-3"></div>
                 </div>
               </div>
               <div className="cardweather-2">
                 <div className="overlap-group-2">
                   <div className="text-wrapper-9">{forecastData && forecastData.length > 2 ? `${Math.round(forecastData[2].main.temp)}°C` : 'Loading...'}</div>
                   <div className="text-wrapper-8">{forecastData && forecastData.length > 2 ? `${new Date(forecastData[2].dt * 1000).getHours()}:00` : 'Loading...'}</div>
                   <img className="weather-icon" src={forecastData && forecastData.length > 1 ? `http://openweathermap.org/img/wn/${forecastData[1].weather[0].icon}@2x.png` : ''} alt="Weather Icon" />
                   <div className="group-3">
                     <div className="group-5">
                     </div>
                   </div>
                 </div>
               </div>
               <div className="group-6">
                 <div className="overlap-5">
                   <div className="cardweather">
                     <div className="overlap-group-2">
                       <div className="text-wrapper-7">{forecastData && forecastData.length > 3 ? `${Math.round(forecastData[3].main.temp)}°C` : 'Loading...'}</div>
                       <div className="text-wrapper-10">{forecastData && forecastData.length > 3 ? `${new Date(forecastData[3].dt * 1000).getHours()}:00` : 'Loading...'}</div>
                       <img className="weather-icon" src={forecastData && forecastData.length > 3 ? `http://openweathermap.org/img/wn/${forecastData[2].weather[0].icon}@2x.png` : ''} alt="Weather Icon" />
                       <div className="rectangle-3"></div>
                     </div>
                   </div>
                 </div>
                 <div className="group-7">
                   <div className="overlap-6">
                     <img className="subtract" src="img/subtract.svg" alt="" />
                     <div className="group-wrapper">
                     <div className="group-5">
                         <div className="overlap-group-4">
                         <img className="img" src={ellipse8} alt="Ellipse 8" />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
         <div className="rectangle-4"></div>
         <div className="rectangle-5"></div>
         <div className="text-wrapper-11">Today</div>
         <div className="text-wrapper-12">8-Day</div>
       </div>
       <Link to="/favourites">
       <div className="rectangle-wrapper">
        <button className="button-style">
         <img className="rectangle-6" src={rectangle44} alt="Rectangle 44" />
        </button>
       </div>
       </Link>
       <Drawer.Root open={isOpen} snapPoints={[0.33, 1]} defaultSnap={0.33} modal={false}>
         <Drawer.Portal>
           <Drawer.Content>
             <BottomPanel />
           </Drawer.Content>
           <Drawer.Overlay />
         </Drawer.Portal>
       </Drawer.Root>
   {/*<div className="places-to-go">*/}
  {/*<div className="overlap-7">*/}
  {/*  <div className="rectangle-7"></div>*/}
  {/*  /!* Update to use cities array and currentCityIndex for image source *!/*/}
  {/*  <img className="licensed-image" src={cities[currentCityIndex].image} alt="City Image" />*/}
  {/*  <div className="rectangle-8"></div>*/}
  {/*  <div className="rectangle-9"></div>*/}
  {/*  <div className="text-wrapper-13">Places To Go</div>*/}
  {/*  /!* Update to show the current city's name *!/*/}
  {/*  <div className="text-wrapper-14">{cities[currentCityIndex].name}</div>*/}
  {/*  /!* Update to show the current city's weather *!/*/}
  {/*  <div className="element-2">{cities[currentCityIndex].weather}</div>*/}
  {/*  <div className="group-8">*/}
  {/*    <div className="overlap-group-5">*/}
  {/*      <div className="rectangle-10"></div>*/}
  {/*      <div className="ellipse-2"></div>*/}
  {/*      <div className="ellipse-3"></div>*/}
  {/*      <div className="ellipse-4"></div>*/}
  {/*      <div className="ellipse-5"></div>*/}
  {/*    </div>*/}
  {/*  </div>*/}
  {/*  <button className="button-style">*/}
  {/*   <img className="arrow" src={arrow1} alt="Arrow 1" />*/}
  {/*  </button>*/}
  {/*  <button className="button-style">*/}
  {/*   <img className="arrow-2" src={arrow2} alt="Arrow 2" />*/}
  {/*  </button>*/}
  {/*</div>*/}
  {/*    </div>*/}
      <Link to="/filter">
        <div className="vector-wrapper">
          <button className="button-style">
          <img className="vector" src={vectorImage} alt="" />
          </button>
        </div>
       </Link>
     </div>
   </div>
 );
}

export default BasePage; 