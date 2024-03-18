import React, { useState } from 'react';
import Slider from 'react-slider';
import './Filter.css';
import ButtonApply from './ApplyButtonFilter';
import { Link } from 'react-router-dom';
import Animate_page from '../Animate-page';

// This is the page where you can apply different filters
//Will need to extract data from the buttons / slider and this data will be used for filtering through all the countries
export const FilterPage = () => {
	return(
		<Animate_page>
		<div className='page'>
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
				<Link to="/"> 
					<div class="arrow"></div>`
				</Link>
				<div class="Xsymbol"></div>
			</div>
		</div>
		</Animate_page>
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
		<div className="slider-container">
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


