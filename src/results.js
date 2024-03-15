import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';


function SearchResults(props) {
    return (
        // <div className="overlap-group">
        // <p class="tokyo-japan">
        //     <span class="span">Tokyo, <br /></span> <span class="text-wrapper-2">Japan</span>
        // </p>
        // <div class="element">3º</div>
        // <img class="emoji-cloud-with" src='./images/emoji-cloud-with-rain.png'/>
        // </div>
        <div className="result-box">
        <div class="city-country">
            <span class="city">{props.name} <br /></span> 
            <span class="country">{props.country}</span>
        </div>
        <div class="temperature">{props.temp}º</div>
        <img class="weather-type" src={props.image}/>
        </div>
    )
}
export default SearchResults;