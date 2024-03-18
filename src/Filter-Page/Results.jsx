import React, { useEffect } from "react";
import './Results.css';
import { Link } from "react-router-dom";
import SearchResults from "../results";
import useWeatherData from "../fetchWeather";
import Animate_page from "../Animate-page";

//This is the results page, i have been trying to implement it so that it would go through an array of cities
// and it would return a result box for each city with its true live value, this seems to be a lot more difficult than i thought
// or im missing some kind of syntax
//There is currently a very tiny button on the left side that when clicked will give live data for London
//I changed the handleInputChange to read the event id instead of the value so that i dont have to use input
export const ResultsPage = () =>{
    const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress} = useWeatherData();
    const cities = ["London","Kyoto","Dubai","Manchester"]
    return(
        <Animate_page>
        <div className="page">
            <div class="Results">
            <span class="find-places-to-go">Find Places To Go</span>
            <div className="results-container">
                <ResultBox/>
            </div>
            <div class="options"></div>
            <Link to="/filter"> 
            <div class="arrow"></div>
            </Link>
            <div class="filter-box"></div>
            <span class="filters-applied">Filters Applied</span>
            </div>
        </div>
        </Animate_page>
        )
};
export default ResultsPage;


//This creates a results box, THIS IS FOR TESTING, better to use results component (results.js)
const ResultBox = () =>{

    return(
        <div class="result-box">
        <div class="city-country">
        <span class="city">Kyoto, <br /></span>
        <span class="country">JP</span>
        </div>
        <span class="temperature"> 5º</span>
        <div class="weather-type"></div>
        </div>
    )
}

//This was for testing
const ButtonPress = (val) =>{
    const {city,weatherData,forecastData,country,loading,error,handleInputChange,handleSubmit,handleKeyPress} = useWeatherData();
    var val = "London"

    useEffect(() => {
        handleInputChange(val)
    }, [handleInputChange])

}