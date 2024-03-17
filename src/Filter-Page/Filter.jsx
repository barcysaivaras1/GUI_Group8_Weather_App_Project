import React, { useState } from 'react';
import Slider from 'react-slider';
import './Filter.css';
import ButtonApply from './ApplyButtonFilter';

// This is the page where you can apply different filters
//Will need to extract data from the buttons / slider and this data will be used for filtering through all the countries
export const FilterPage = () => {
	return(
		<div class="Filter">
			<div class="group"></div>
			<div class="rectangle-temperature">
			<span class="temperature">Temperature</span>
			<Temperatureslider/>
			</div>
			<div class="rectangle-continent">
			<span class="continent">Continent</span>
			<ButtonContinent/>
			</div>
			<ButtonWeather/>
			<ButtonApply/>
			<span class="filters">Filters</span>
			<div class="Xsymbol"></div>
		</div>
  )
    };
export default FilterPage;

//This is the double slider for the temperature
//values[0] will give you the minimum value, values[1] will give you the maximum value
const Temperatureslider = () =>{
	const [values, setValues] = useState([-20, 40]);
	const handleChange = (newValues) => setValues(newValues);
	return (
		<div>
		<div className="values">
			
			<span id="range1">{values[0]}°</span> 
			<span id='dash'> - </span>
			<span id="range2">{values[1]}°</span>
		</div>
		<div className="container">
			<Slider className="slider"  valueLabelDisplay="auto" value={values} onChange={handleChange} min={-30} max={50}/>
			<div type="number" id="minTemp" onChange={(e) => handleChange([+e.target.value, values[1]])}></div>
			<div type="number" id="maxTemp" onChange={(e) => handleChange([values[0], +e.target.value])}></div> 
		</div>
		</div>
	);
	}


var weatherTypes_selected = [];
var continents_selected = [];
const ButtonPress =(e)=>{
	//This is the function that highlights the buttons when they are pressed
	var id = e.target.id
	const weather = ["Rain","Clouds","Sun","Snow","Wind"];
	const continent = ["africa","europe","asia","north-america","south-america"];
  	if(e.target.style.background === "white"){
		//Off state
		if (weather.includes(id)) {
			weatherTypes_selected = weatherTypes_selected.filter(item => item !== id);
		} else {
			continents_selected = continents_selected.filter(item => item !== id);
		}
		document.getElementById(id).style.background="hsla(0, 0%, 0%, 0.5)";
		document.getElementById(id).style.color="white";}
	else{
		//On state
		if (weather.includes(id)) {
			weatherTypes_selected.push(id)
		} else {
			continents_selected.push(id)
		}
		document.getElementById(id).style.background="white";
		document.getElementById(id).style.color="black"
		document.getElementById(id).style.borderRadius="20px";}
	console.log(weatherTypes_selected)
	console.log(continents_selected)
}

//This is just a component that creates all of the html for the weather buttons
const ButtonWeather =()=>{
	return(
	<div class="rectangle-weather">
		<span   class="weather-type">Weather Type</span>
		<button className='btn' id="Rain" onClick={(e) => ButtonPress(e)}>Rain</button>
		<button className='btn' id="Sun" onClick={(e) => ButtonPress(e)}>Sun</button>
		<button className='btn' id="Snow" onClick={(e) => ButtonPress(e)}>Snow</button>
		<button className='btn' id="Wind" onClick={(e) => ButtonPress(e)}>Wind</button>
		<button className='btn' id="Clouds" onClick={(e) => ButtonPress(e)}>Cloud</button>
  	</div>)
}

//This is just a component that creates all of the html for the continent buttons
const ButtonContinent =()=>{

	return(       
	<div class="continents-container">
		<button className='btn' id="africa" onClick={(e) => ButtonPress(e)}>Africa</button>
		<button className='btn' id="asia" onClick={(e) => ButtonPress(e)}>Asia</button>
		<button className='btn' id="europe" onClick={(e) => ButtonPress(e)}>Europe</button>
		<button className='btn' id="north-america" onClick={(e) => ButtonPress(e)}>North America</button>
		<button className='btn' id="south-america" onClick={(e) => ButtonPress(e)}>South America</button>
  	</div>)
}

// const world_continents = {
//     "Africa": {
//         "Countries": ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Democratic Republic of the Congo", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Republic of the Congo", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"]
//     },
//     "Asia": {
//         "Countries": ["Afghanistan", "Armenia", "Azerbaijan", "Bahrain", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "China", "Cyprus", "Georgia", "India", "Indonesia", "Iran", "Iraq", "Israel", "Japan", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Laos", "Lebanon", "Malaysia", "Maldives", "Mongolia", "Myanmar", "Nepal", "North Korea", "Oman", "Pakistan", "Palestine", "Philippines", "Qatar", "Saudi Arabia", "Singapore", "South Korea", "Sri Lanka", "Syria", "Taiwan", "Tajikistan", "Thailand", "Timor-Leste", "Turkey", "Turkmenistan", "United Arab Emirates", "Uzbekistan", "Vietnam", "Yemen"]
//     },
//     "Europe": {
//         "Countries": ["Albania", "Andorra", "Austria", "Belarus", "Belgium", "Bosnia and Herzegovina", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Ukraine", "United Kingdom", "Vatican City"]
//     },
//     "North America": {
//         "Countries": ["Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States"]
//     },
//     "Oceania": {
//         "Countries": ["Australia", "Fiji", "Kiribati", "Marshall Islands", "Micronesia", "Nauru", "New Zealand", "Palau", "Papua New Guinea", "Samoa", "Solomon Islands", "Tonga", "Tuvalu", "Vanuatu"]
//     },
//     "South America": {
//         "Countries": ["Argentina", "Bolivia", "Brazil", "Chile", "Colombia", "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"]
//     }
// };

// export const FilterPage = () => {
//     const [values, setValues] = useState([-20, 40]);
//     const [weatherTypes_selected, setWeatherTypesSelected] = useState([]);
//     const [continents_selected, setContinentsSelected] = useState([]);

//     const handleTemperatureChange = (newValues) => setValues(newValues);

//     const handleButtonPress = (e) => {
//         const id = e.target.id;
//         const weather = ["Rain", "Clouds", "Sun", "Snow", "Wind"];
//         const continent = ["africa", "europe", "asia", "north-america", "south-america"];
//         if (e.target.style.background === "white") {
//             if (weather.includes(id)) {
//                 setWeatherTypesSelected(prevState => prevState.filter(item => item !== id));
//             } else {
//                 setContinentsSelected(prevState => prevState.filter(item => item !== id));
//             }
//             e.target.style.background = "hsla(0, 0%, 0%, 0.5)";
//             e.target.style.color = "white";
//         } else {
//             if (weather.includes(id)) {
//                 setWeatherTypesSelected(prevState => [...prevState, id]);
//             } else {
//                 setContinentsSelected(prevState => [...prevState, id]);
//             }
//             e.target.style.background = "white";
//             e.target.style.color = "black";
//             e.target.style.borderRadius = "20px";
//         }
//         console.log(weatherTypes_selected);
//         console.log(continents_selected);
//     };

//     const filterCountriesByContinent = (continent) => {
//         const countries = world_continents[continent].Countries;
//         console.log(`Countries in ${continent}:`, countries);
//     };

//     return (
//         <div className="Filter">
//             <div className="group"></div>
//             <div className="rectangle-temperature">
//                 <span className="temperature">Temperature</span>
//                 <div>
//                     <div className="values">
//                         <span id="range1">{values[0]}°</span>
//                         <span id='dash'> - </span>
//                         <span id="range2">{values[1]}°</span>
//                     </div>
//                     <div className="container">
//                         <Slider className="slider" valueLabelDisplay="auto" value={values} onChange={handleTemperatureChange} min={-30} max={50} />
//                         <input type="number" id="minTemp" onChange={(e) => handleTemperatureChange([+e.target.value, values[1]])} />
//                         <input type="number" id="maxTemp" onChange={(e) => handleTemperatureChange([values[0], +e.target.value])} />
//                     </div>
//                 </div>
//             </div>
//             <div className="rectangle-continent">
//                 <span className="continent">Continent</span>
//                 <ButtonContinent handleContinentClick={filterCountriesByContinent} />
//             </div>
//             <ButtonWeather handleButtonPress={handleButtonPress} />
//             <ButtonApply />
//             <span className="filters">Filters</span>
//             <div className="Xsymbol"></div>
//         </div>
//     );
// };

// const ButtonWeather = ({ handleButtonPress }) => {
//     return (
//         <div className="rectangle-weather">
//             <span className="weather-type">Weather Type</span>
//             <button className='btn' id="Rain" onClick={(e) => handleButtonPress(e)}>Rain</button>
//             <button className='btn' id="Sun" onClick={(e) => handleButtonPress(e)}>Sun</button>
//             <button className='btn' id="Snow" onClick={(e) => handleButtonPress(e)}>Snow</button>
//             <button className='btn' id="Wind" onClick={(e) => handleButtonPress(e)}>Wind</button>
//             <button className='btn' id="Clouds" onClick={(e) => handleButtonPress(e)}>Cloud</button>
//         </div>
//     );
// };

// const ButtonContinent = ({ handleContinentClick }) => {
//     return (
//         <div className="continents-container">
//             {Object.keys(world_continents).map(continent => (
//                 <button key={continent} className='btn' onClick={() => handleContinentClick(continent)}>
//                     {continent}
//                 </button>
//             ))}
//         </div>
//     );
// };

// export default FilterPage;

