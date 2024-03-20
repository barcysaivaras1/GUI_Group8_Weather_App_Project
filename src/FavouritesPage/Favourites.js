// Favourites.js
import React, { useState, useEffect } from 'react';
import './Favourites.css';
import { Link, useLocation } from 'react-router-dom';
import Animate_page from '../Animate-page';
import heart from "./img/icon-heart.png";
import FavouriteBox from './FavouriteBox'; // Import FavouriteBox

function Favourites() {
  const [info, setInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search.replace('?', ''));
    const infoParam = searchParams.get('info');

    if (infoParam && !locations.includes(infoParam)) {
      setLocations(prevLocations => [...new Set([...prevLocations, infoParam])]);
    }

    setInfo(infoParam);
  }, [location.search]);

  const [locations, setLocations] = useState(['Tokyo', 'Osaka', 'Kyoto']);

  console.log('Info:', info);
  return (
    <Animate_page>
      <div>
        <div className="favourites">
          <div className="div">
            <div className="overlap-2">
              <div className="overlap-wrapper">
                <div className="overlap-3">
                  <div className="text-wrapper-3">Favourites</div>
                  <img className="icon-heart" src={heart} />
                </div>
              </div>
              <div className="text-wrapper-4">Your</div>
            </div>
            <div className="text-wrapper-5">{locations.length} Favourites</div>
            <FavouriteBox locations={locations} /> {/* Pass locations as a prop */}
          </div>
          <Link to="/">
            <i className="arrow"></i>
          </Link>
        </div>
      </div>
    </Animate_page>
  );
}

export default Favourites;