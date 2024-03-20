// bottomPanel.jsx
import {Drawer} from "vaul";
import React, {useEffect, useState} from 'react';
import './bottomPanel.css';
import DestinationCard from "./DestinationCard";
import dubaiImg from './images/dubai.png';
import newYorkImg from './images/newyork.png';
import seoulImg from './images/seoul.png';
import miamiImg from './images/miami.jpg';
import shanghaiImg from './images/shanghai.jpeg';
import singaporeImg from './images/singapore.jpeg';
import sydneyImg from './images/sydney.jpeg';
import losAngImg from './images/los-angeles.jpeg';
import kochiImg from './images/kochi.jpeg';
import bangkokImg from './images/bangkok.jpeg';
import amsterdamImg from './images/amsterdam.jpeg';


function BottomPanel() {
    const overflowPanel = {
        paddingTop: '5px',
        maxHeight: '550px', /* Adjust based on your needs */
        overflowY: 'auto',
        overflowX: 'hidden',
    }
    const styleHeading = {
        fontFamily: 'Helvetica Neue-Bold, sans-serif', // Setting the font
        paddingLeft: '14px',
        color: '#ffffff',
        fontSize: '22px',
        fontWeight: '500',
    }

    const [destinations, setDestinations] = useState([
        { city: 'Dubai', temperature: '...', imageUrl: dubaiImg },
        { city: 'New York', temperature: '...', imageUrl: newYorkImg },
        { city: 'Seoul', temperature: '...', imageUrl: seoulImg },
        { city: 'Miami', temperature: '...', imageUrl: miamiImg },
        { city: 'Shanghai', temperature: '...', imageUrl: shanghaiImg },
        { city: 'Singapore', temperature: '...', imageUrl: singaporeImg },
        { city: 'Sydney', temperature: '...', imageUrl: sydneyImg },
        { city: 'Los Angeles', temperature: '...', imageUrl: losAngImg },
        { city: 'Kochi', temperature: '...', imageUrl: kochiImg },
        { city: 'Bangkok', temperature: '...', imageUrl: bangkokImg },
        { city: 'Amsterdam', temperature: '...', imageUrl: amsterdamImg }
    ]);

    return (
        <div className="thePanel">
            <div className="centered-pill"></div>
            <span className="places-to-go" style={styleHeading}>Places To Go</span>
            <div style={overflowPanel}>
                {destinations.map((destination, index) => (
                    <DestinationCard
                        key={index} // Consider using a more unique key if possible
                        city={destination.city}
                        temperature={destination.temperature}
                        imageUrl={destination.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}

function BottomPanelImplemented() {
    // Prevent the drawer from closing
    const [isOpen] = useState(true);
    return (
        <div>
            <Drawer.Root open={isOpen} snapPoints={[0.33, 1]} defaultSnap={0.33}>
                <Drawer.Portal>
                    <Drawer.Content>
                        <BottomPanel />
                    </Drawer.Content>
                    <Drawer.Overlay />
                </Drawer.Portal>
            </Drawer.Root>
        </div>
    );
}

export default BottomPanel;
