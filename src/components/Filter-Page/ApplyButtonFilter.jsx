import React,{useState} from "react";
import { Link } from "react-router-dom";
import useWeatherData from "../fetchWeather";
import {useHistory} from 'react-router-dom'


//This is the button on the filters page that says apply
export const ButtonApply =()=>{
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