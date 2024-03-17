// DestinationCard.js
import React from 'react';
import './bottomPanel.css';

function DestinationCard({ city, temperature, imageUrl }) {
    console.log(city, temperature, imageUrl); // Check the props values

    const styleCity = {
        fontFamily: 'Helvetica Neue-Bold, sans-serif', // Setting the font
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: '500',
        position: 'absolute',
        bottom: '0',
        width: '100%', /* Make it full width, if needed */
        paddingBottom: '8px',
        paddingLeft: '16px'
    }

    const styleDegree = {
        fontFamily: 'Helvetica Neue, sans-serif', // Setting the font
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: '500',
        position: 'absolute',
        bottom: '0',
        width: '100%', /* Make it full width, if needed */
        paddingBottom: '8px',
        paddingLeft: '310px'
    }

    return (
        <div className="image" style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center' /* Center the background image */
        }}>
            <span className="city-name" style={styleCity}>{city}</span>
            <span className="degree" style={styleDegree}>{temperature}</span>
        </div>
    );
}


export default DestinationCard;
