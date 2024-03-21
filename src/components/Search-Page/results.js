import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './globals.css'; // Import global CSS styles
import './Search-page.css'; // Import component-specific CSS styles

function SearchResults(props) {
    const handleClick = () => {
        if (props.onClick) {
            props.onClick(); // Call the onClick function passed from the parent component
        }
    };

    return (
        <div className="result-box" onClick = {handleClick}>
        <div class="city-country">
            <span class="city">{props.name} <br /></span> 
            <span class="country">{props.country}</span>
        </div>
        <div class="temperature">{props.temp}</div>
        <img class="weather-type" src={props.image}/>
        </div>
    )
}
export default SearchResults;
