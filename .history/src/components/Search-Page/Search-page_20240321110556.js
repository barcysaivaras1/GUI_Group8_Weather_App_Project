import React, { useState, useEffect} from 'react';
import './Search-page.css'; // Import component-specific CSS styles
import SearchResults from './results';
import useCitySelector from '../useCountry';
import { SearchCountryResultsList } from './searchCountryResultsList';
import useNewWeatherData from './NewWeatherHook';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Animate_page from '../../Animate-page';

function NewWeatherSearchPage() {
    const { countries, selectedCountry, cityArray, handleCountryChange } = useCitySelector();
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTermsArray, setSearchTermsArray] = useState([]); // State to hold the array of search terms
    const [selectedOption, setSelectedOption] = useState('country'); // State to track selected option
    const [showCountryResults, setShowCountryResults] = useState(false); // State to track whether to show country results
    const [showWeatherData, setShowWeatherData] = useState(false); // State to track whether to show weather data of cities
    const [typing, setTyping] = useState(false); // State to track if user is typing

    const location = useLocation();

    const navigate = useNavigate();

    const [selected_city,setSelectedCity] = useState("") //Hardcoded Manchester for now, use handleApplyClick as onClick in <SearchResults> so that it navigates to basepage_alt
    const handleApplyClick = (cityName) => {
        setSelectedCity(cityName);
        navigate("/alt", { state: { selected_city: cityName } }); //IMPORTANT: this sends selected_city to basepage_alt
    };

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setTyping(true); // User started typing
        // setShowCountryResults(event.target.value.trim() !== ''); // Show country results if search term is not empty
    };

    const handleSearchTermUpdate = () => {
        setSearchTermsArray(prevSearchTerms => [...prevSearchTerms, searchTerm]);
        setSearchTerm('');
        setTyping(false); // User stopped typing
    };

     // Clear search terms when user starts typing again
    useEffect(() => {
        if (typing) {
            setSearchTermsArray([]);
        }
    }, [typing]);

    console.log("cityArray: " + cityArray)

    const weatherData = useNewWeatherData(selectedOption === 'country' ? cityArray : searchTermsArray);
    
    // Check if weatherData has been fetched and set showWeatherData accordingly
    useEffect(() => {
        if (weatherData.length > 0) {
            setShowWeatherData(true);
        }
    }, [weatherData]);

    const handleOptionChange = event => {
        setSelectedOption(event.target.value);
    };

    console.log(weatherData)

    return (
        <Animate_page>
            <div className="search-page">
                <div className="div">
                    <div className="search-bar">
                        <div className="overlap">
                            {selectedOption === 'country' && (
                                <input
                                    className="text-box"
                                    type="search"
                                    placeholder="Search a Country"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            )}
                            {selectedOption === 'city' && (
                                <input
                                    className="text-box"
                                    type="search"
                                    placeholder="Search a City"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    onKeyDown={event => {
                                        if (event.key === 'Enter') {
                                            handleSearchTermUpdate();
                                        }
                                    }}
                                />
                            )}
                        </div>
                        <select className="country-choice" value={selectedOption} onChange={handleOptionChange}>
                            <option value="country">Select by country</option>
                            <option value="city">Select by city</option>
                        </select>
                        {selectedOption === 'country' && showCountryResults && !showWeatherData && (
                            <SearchCountryResultsList results={countries} searchTerm={searchTerm} handleCountryChange={handleCountryChange} />
                        )}
                    </div>

                    {selectedOption === 'country' && selectedCountry && weatherData && weatherData.map((data, index) => (
                        <SearchResults
                            key={index}
                            name={cityArray[index]}
                            country={selectedCountry}
                            temp={data.main && (
                                <p className='temp'>{Math.round(data.main.temp)}°C</p>
                            )}
                            image={data.weather && data.weather.length > 0 && data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : ''}
                            alt="Weather Icon"
                            onClick={() => handleApplyClick(data.name)} // Call handleApplyClick with city name onClick
                        />
                    ))}

                    {/* Additional logic for 'Select by city' */}
                    {selectedOption === 'city' && searchTermsArray.length > 0 && weatherData.map((data, index) => (
                        <SearchResults
                            key={index}
                            name={data.name}
                            country={data.sys.country}
                            temp={data.main && (
                                <p className='temp'>{Math.round(data.main.temp)}°C</p>
                            )}
                            image={data.weather && data.weather.length > 0 && data.weather[0].icon ? `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` : ''}
                            alt="Weather Icon"
                            onClick={() => handleApplyClick(data.name)} // Call handleApplyClick with city name onClick
                        />
                    ))}
                </div>
                <Link to="/"> 
                    <div className="arrow"></div>
                </Link>
            </div>
        </Animate_page>
    );
}

export default NewWeatherSearchPage;


