import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { Link, useLocation } from 'react-router-dom';
import Animate_page from '../../Animate-page';
import heart from "./img/icon-heart.png";
import FavouriteBox from './FavouriteBox'; // Importing component for displaying favourite locations

function Favourites() {
  const [info, setInfo] = useState(null); // State for storing info from URL
  const location = useLocation(); // Getting current location using React Router

  const [locations, setLocations] = useState(() => {
    // State for storing favourite locations, initialized with default locations or from localStorage
    const storedLocations = localStorage.getItem('favouriteLocations');
    return storedLocations ? JSON.parse(storedLocations) : ['Tokyo', 'Osaka', 'Kyoto'];
  });

  useEffect(() => {
    // Effect to update favourite locations based on URL parameters
    const searchParams = new URLSearchParams(location.search.replace('?', ''));
    const infoParam = searchParams.get('info');

    if (infoParam && !locations.includes(infoParam)) {
      // If infoParam exists and it's not in locations, add it to locations
      const updatedLocations = [...new Set([...locations, infoParam])]; // Using Set to ensure uniqueness
      setLocations(updatedLocations);
      localStorage.setItem('favouriteLocations', JSON.stringify(updatedLocations)); // Update localStorage
    }

    setInfo(infoParam); // Set info from URL
  }, [location.search]);

  console.log('Info:', info); // Logging info from URL
  return (
    <Animate_page>
      <div>
        <div className="favourites">
          <div className="div">
            <div className="overlap-2">
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="text-wrapper-3">Favourites</div>
                  <img className="icon-heart" src={heart} /> {/* Heart icon */}
                </div>
              </div>
              <div className="text-wrapper-4">Your</div>
            </div>
            <div className="text-wrapper-5">{locations.length} Favourites</div> {/* Displaying number of favourites */}
            <FavouriteBox locations={locations} /> {/* Rendering favourite locations */}
          </div>
          <Link to="/">
            <i className="arrow"></i> {/* Arrow icon for navigation */}
          </Link>
        </div>
      </div>
    </Animate_page>
  );
}

export default Favourites;
