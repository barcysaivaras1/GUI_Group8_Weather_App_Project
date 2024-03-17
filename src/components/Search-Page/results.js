import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './globals.css'; // Import global CSS styles
import './style.css'; // Import component-specific CSS styles

function SearchResults(props) {
    return (
        <div className="overlap-group">
        <p className="tokyo-japan">
            <span className="span">{props.name} <br /></span> <span className="text-wrapper-2">{props.country}</span>
        </p>
        <div className="element">{props.temp}</div>
        <img className="emoji-cloud-with" src={props.image}/>
        </div>
    )
}
export default SearchResults;