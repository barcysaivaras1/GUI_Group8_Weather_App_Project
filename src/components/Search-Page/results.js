import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './globals.css'; // Import global CSS styles
import './Search-page.css'; // Import component-specific CSS styles

function SearchResults(props) {
    return (
        <div className="result-box">
        <p className="city-country">
            <span className="city">{props.name} <br /></span> 
            <span className="country">{props.country}</span>
        </p>
        <div className="temperature">{props.temp}</div>
        <img className="weather-type" src={props.image} alt='Weather Image...'/>
        </div>
    )
}
export default SearchResults;