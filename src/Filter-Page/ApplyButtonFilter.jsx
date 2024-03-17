import React,{useState} from "react";
import { Link } from "react-router-dom";
import useWeatherData from "../fetchWeather";
import {useHistory} from 'react-router-dom'


//This is the button on the filters page that says apply
export const ButtonApply =()=>{
    //I want this function, on click, get information from the API, create the html values and send the html values to the results page (Results.jsx)
    // and then have those html values be displayed on the results page

    // const [loading,setLoading] = useState(false);
    // const history= useHistory();
    // const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress} = useWeatherData();
	// const cities = ["London","Kyoto","Dubai","Manchester"]
    // const handleClick = async () =>{
    //     setLoading(true)
    //     try{

    //     }

    // const htmlValues = "{weatherData ?(<SearchResults name={weatherData.name} country={country} temp={Math.ceil(weatherData.main.temp)}  />): (<p>Loading weather data...</p>)}"
	return(
		<div>
			<Link to="/filter/results">
				<button class="rectangle-11">
				<span class="apply">Apply</span>
				</button>
			</Link>
		</div>
	)
}
export default ButtonApply