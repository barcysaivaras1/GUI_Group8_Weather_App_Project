import React, { useState ,useEffect } from "react";
import './Results.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useNewWeatherData from "../Search-Page/NewWeatherHook";
import Animate_page from "../../Animate-page";
import SearchResults from "../Search-Page/results";

export const ResultsPage = () =>{
    const cities = ["London","Kyoto","Dubai","Manchester"]
    const location = useLocation();
    const [finalArray, setFinalArray] = useState(location.state?.finalArray || []);
    useEffect(() => {
        console.log("Final Array:", finalArray); // Log only once after initial render
        }, [finalArray]); // Only re-run when finalArray changes
    const weatherData = useNewWeatherData(finalArray);
    console.log(weatherData[2])

    const navigate = useNavigate();

    const selected_city = "Manchester" //Hardcoded Manchester for now, use handleApplyClick as onClick in <SearchResults> so that it navigates to basepage_alt
    const handleApplyClick = () => {
        // const testArray = [1, 2, 3, 4, 5];  // Your test array
        navigate("/", { state: {selected_city} }); //IMPORTANT: this sends selected_city to basepage_alt
    }

    return(
        <Animate_page>
        <div className="page">
            <div className="Results">
            <span className="find-places-to-go">Find Places To Go</span>
            <div className="cont">
                <div className="results-container">
                    <button onClick = {handleApplyClick} >redirect to basepage_alt</button>
                {weatherData.map((data, index) => (
                <SearchResults
                    key={index}
                    name = {data.name}
                    country = {data.sys.country} 
                    temp = {data.main && (
                        <p className='temp'>{Math.round(data.main.temp)}°C</p>
                        )}
                    image = {`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather Icon" />  
            ))}
                </div>
            </div>
                <Link to="/filter">
                    <i className="arrow"></i>
                </Link>
                <div className="filter-box"></div>
            <span className="filters-applied">Filters Applied</span>
            </div>
        </div>
        </Animate_page>
        )
};
export default ResultsPage;
