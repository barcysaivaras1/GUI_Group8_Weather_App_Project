import React, { useState ,useEffect } from "react";
import './Results.css';
import { Link, useLocation } from "react-router-dom";
import useNewWeatherData from "../components/Search-Page/NewWeatherHook";
import Animate_page from "../Animate-page";

export const ResultsPage = () =>{
    const cities = ["London","Kyoto","Dubai","Manchester"]
    const location = useLocation();
    const [finalArray, setFinalArray] = useState(location.state?.finalArray || []);
    useEffect(() => {
        console.log("Final Array:", finalArray); // Log only once after initial render
        }, [finalArray]); // Only re-run when finalArray changes
    const weatherData = useNewWeatherData(finalArray);
    console.log(weatherData[2])

    return(
        <Animate_page>
        <div className="page">
            <div className="Results">
            <span className="find-places-to-go">Find Places To Go</span>
            <div className="results-container">
                {weatherData.map((data, index) => (
                    <ResultBox key={index} city = {data.name} country = {data.sys.country}
                    temp = {data.main && (
                        <p className='temp'>{Math.round(data.main.temp)}°C</p>
                        )}
                    image = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" />
                ))}
            </div>
            <div className="options"></div>
            <Link to="/filter"> 
            <div className="arrow"></div>
            </Link>
            <div className="filter-box"></div>
            <span className="filters-applied">Filters Applied</span>
            </div>
        </div>
        </Animate_page>
        )
};
export default ResultsPage;


//This creates a results box, THIS IS FOR TESTING, better to use results component (results.js)
const ResultBox = (props) =>{

    return(
        <div className="result-box">
        <div className="city-country">
        <span className="city">{props.city}, <br /></span>
        <span className="country">{props.country}</span>
        </div>
        <span className="temperature"> {props.temp}</span>
        <div className="weather-type">{props.image}</div>
        </div>
    )
}