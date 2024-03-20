import React, { useState,  useEffect } from 'react';
import Slider from 'react-slider';
import './Filter.css';
import useCitySelector from '../components/useCountry';
import useNewWeatherData from '../components/Search-Page/NewWeatherHook';
import ResultsPage from './Results';
import { Link, useNavigate } from 'react-router-dom';
import Animate_page from '../Animate-page';


// This is the page where you can apply different filters
//Will need to extract data from the buttons / slider and this data will be used for filtering through all the countries
const world_continents = {
	"Africa": {
		"Countries": ["DZ", "AO", "BJ", "BW", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CD", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "CI", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG", "CG", "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "ZM", "ZW"]
	},
	"Asia": {
		"Countries": ["AF", "AM", "AZ", "BH", "BD", "BT", "BN", "KH", "CN", "CY", "GE", "IN", "ID", "IR", "IQ", "IL", "JP", "JO", "KZ", "KW", "KG", "LA", "LB", "MY", "MV", "MN", "MM", "NP", "KP", "OM", "PK", "PS", "PH", "QA", "SA", "SG", "KR", "LK", "SY", "TW", "TJ", "TH", "TL", "TR", "TM", "AE", "UZ", "VN", "YE"]
	},
	"Europe": {
		"Countries": ["AL", "AD", "AT", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IS", "IE", "IT", "XK", "LV", "LI", "LT", "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU", "SM", "RS", "SK", "SI", "ES", "SE", "CH", "UA", "GB", "VA"]
	},
	"North-America": {
		"Countries": ["AG", "BS", "BB", "BZ", "CA", "CR", "CU", "DM", "DO", "SV", "GD", "GT", "HT", "HN", "JM", "MX", "NI", "PA", "KN", "LC", "VC", "TT", "US"]
	},
	"Oceania": {
		"Countries": ["AU", "FJ", "KI", "MH", "FM", "NR", "NZ", "PW", "PG", "WS", "SB", "TO", "TV", "VU"]
	},
	"South-America": {
		"Countries": ["AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE"]
	}
}

export const FilterPage = () => {
const [values, setValues] = useState([-20, 40]);
const [weatherTypes_selected, setWeatherTypesSelected] = useState([]);
const [continents_selected, setContinentsSelected] = useState([]);
const {countries, selectedCountry, cities, capitalCity, temperature, handleCountryChange, cityArray } = useCitySelector();
const handleTemperatureChange = (newValues) => setValues(newValues);
const [finalArray, setFinalArray] = useState([]); // Define finalArray here
const navigate = useNavigate();

const handleApplyClick = () => {
    // const testArray = [1, 2, 3, 4, 5];  // Your test array
    navigate("/filter/results", { state: { finalArray } });
}


console.log(values);

const handleButtonPress = (e) => {
	const id = e.target.id;
	const weather = ["Rain", "Clouds", "Sun", "Snow", "Wind","Clear"];
	const continent = ["africa", "europe", "asia", "north-america", "south-america"];
	if (e.target.style.background === "white") {
		if (weather.includes(id)) {
			setWeatherTypesSelected(prevState => prevState.filter(item => item !== id));
		} else {
			setContinentsSelected(prevState => prevState.filter(item => item !== id));
		}
		e.target.style.background = "hsla(0, 0%, 0%, 0.5)";
		e.target.style.color = "white";
	} else {
		if (weather.includes(id)) {
			setWeatherTypesSelected(prevState => [...prevState, id]);
		} else {
			setContinentsSelected(prevState => [...prevState, id]);
		}
		e.target.style.background = "white";
		e.target.style.color = "black";
		e.target.style.borderRadius = "20px";
	}
	console.log(weatherTypes_selected);
	console.log(continents_selected);
};

const [capitalCities, setCapitalCities] = useState([]);

const weatherData = useNewWeatherData(capitalCities);
	console.log(weatherData[1])

	const [filteredTempArray, setFilteredTempArray] = useState([]);

	useEffect(() => {
	const filterCitiesByTemperature = () => {
		const tempArray = weatherData.filter(city => {
		  const temp = city.main.temp; // Assuming city.main.temp contains the temperature
		return temp >= values[0] && temp <= values[1];
		}).map(city => city.name); // Assuming city.name contains the city name
		setFilteredTempArray(tempArray);
	};
	
	filterCitiesByTemperature();
	}, [weatherData, values]);
	console.log(filteredTempArray)

	useEffect(() => {
		const filterCitiesByTemperatureAndWeatherType = () => {
			const finalFilter = [];
	
			filteredTempArray.forEach(city => {
				const cityWeatherType = weatherData.find(data => data.name === city)?.weather[0]?.main;
				if (cityWeatherType && weatherTypes_selected.includes(cityWeatherType)) {
					finalFilter.push(city);
				}
			});
	
			// Use finalFilter array as needed
			console.log('final filter : ' +finalFilter);
			setFinalArray(finalFilter);
		};
		filterCitiesByTemperatureAndWeatherType();
	}, [filteredTempArray, weatherData, weatherTypes_selected,]);
	useEffect(() => {
		console.log('final Array : ', finalArray);
	}, [finalArray]);

const FilterCountriesByContinent = async (continent) => {
    const countries = world_continents[continent].Countries;
    const capitalCities = [];
	const filteredTempArray = [];
	console.log(continent)

	// Styling Change
	if (document.getElementById(continent).style.background === "white") {
		document.getElementById(continent).style.background = "hsla(0, 0%, 0%, 0.5)";
		document.getElementById(continent).style.color = "white";
	} else {
		document.getElementById(continent).style.background = "white";
		document.getElementById(continent).style.color = "black";
		document.getElementById(continent).borderRadius = "20px";
	}

    for (const country of countries) {
        // Fetch country information to get the capital city
        const countryResponse = await fetch(`https://api.countrystatecity.in/v1/countries/${country}`, {
            headers: {
                'X-CSCAPI-KEY': 'Wmk1Vlhxa3hIVTNBeE9rS3NubE9QSUdheHQ2YmtrQVRPdk1UMERvWg==', // Replace with your actual API key
            },
        });
        const countryData = await countryResponse.json();
        capitalCities.push(countryData.capital);
    }
	for (const city in weatherData){
		// if city.weather.temp <= values[0]
	}
	
	console.log(`Countries of ${continent}:`, countries);
    console.log(`Capital cities of ${continent}:`, capitalCities);
	setCapitalCities(capitalCities)
    // You can store the capitalCities array or further process it as needed
};

return (
	<div className="Filter">
		<div className="group"></div>
		<div class="boxes">
		<div className="rectangle-temperature">
			<span className="temperature">Temperature</span>
			<div>
				<div className="values">
					<span id="range1">{values[0]}°</span>
					<span id="range2">{values[1]}°</span>
				</div>
				<div className="container">
					<Slider className="slider" valueLabelDisplay="auto" value={values} onChange={handleTemperatureChange} min={-30} max={50} />
				</div>
			</div>
		</div>
		<div className="rectangle-continent">
			<span className="continent">Continent</span>
			<ButtonContinent handleContinentClick={FilterCountriesByContinent} />
		</div>
		</div>
		<ButtonWeather handleButtonPress={handleButtonPress} />
		<div>
			{/* <Link to={{ pathname: "/filter/results", state: { testArray: [1, 2, 3, 4, 5] } }}> */}
			<button class="rectangle-11" onClick={handleApplyClick}>
				<span class="apply">Apply</span>
				</button>
			{/* </Link> */}
		</div>

		<Link to="/">
			<i className="arrow"></i>
		</Link>

		<span className="filters">Filters</span>
		{/* {console.log({ pathname: "/filter/results", state: { finalArray } })} */}

	</div>
);
};

const ButtonWeather = ({ handleButtonPress }) => {
return (
	<div className="rectangle-weather">
		<span className="weather-type">Weather Type</span>
		<button className='btn' id="Rain" onClick={(e) => handleButtonPress(e)}>Rain</button>
		<button className='btn' id="Sun" onClick={(e) => handleButtonPress(e)}>Sun</button>
		<button className='btn' id="Snow" onClick={(e) => handleButtonPress(e)}>Snow</button>
		<button className='btn' id="Wind" onClick={(e) => handleButtonPress(e)}>Wind</button>
		<button className='btn' id="Clouds" onClick={(e) => handleButtonPress(e)}>Clouds</button>
		<button className='btn' id="Clear" onClick={(e) => handleButtonPress(e)}>Clear</button>
	</div>
);
};

const ButtonContinent = ({ handleContinentClick }) => {
return (
	<div className="continents-container">
		<button id="Africa" className='btn' onClick={() => handleContinentClick("Africa")}>Africa</button>
		<button id="Asia" className='btn' onClick={() => handleContinentClick("Asia")}>Asia</button>
		<button id="Europe" className='btn' onClick={() => handleContinentClick("Europe")}>Europe</button>
		<button id="North-America" className='btn' onClick={() => handleContinentClick("North-America")}>North America</button>
		<button id="South-America" className='btn' onClick={() => handleContinentClick("South-America")}>South America</button>
		<button id="Oceania" className='btn' onClick={() => handleContinentClick("Oceania")}>Oceania</button>
	</div>
);
};

export default FilterPage;