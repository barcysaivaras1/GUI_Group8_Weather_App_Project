// function App() {
//     // Prevent the drawer from closing
//     const [isOpen] = useState(true);
//     return (
//         <div>
//             <Drawer.Root open={isOpen} snapPoints={[0.33, 1]} defaultSnap={0.33}>
//                 <Drawer.Portal>
//                     <Drawer.Content>
//                         <BottomPanel />
//                     </Drawer.Content>
//                     <Drawer.Overlay />
//                 </Drawer.Portal>
//             </Drawer.Root>
//         </div>
//     );
// }


// bottomPanel.js
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
        maxHeight: '700px', /* Adjust based on your needs */
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


    // useEffect(() => {
    //     destinations.forEach((destination, index) => {
    //         fetchTemperature(destination.city).then(temp => {
    //             // Create a copy of the current destinations array
    //             const newDestinations = [...destinations];
    //             // Update the temperature for the city
    //             newDestinations[index] = { ...destination, temperature: `${temp}º` };
    //             // Update the state with the new destinations array
    //             setDestinations(newDestinations);
    //         });
    //     });
    // }, []); // Empty dependency array ensures this effect runs only once after the initial render
    //
    // const fetchTemperature = async (city) => {
    //     // const apiKey = '9be467c27abb32179be4ce39630252c3';
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         const temp = Math.round(data.main.temp); // Convert temperature to an integer
    //         return temp;
    //     } catch (error) {
    //         console.error("Error fetching temperature:", error);
    //         return 'Error';
    //     }
    // };

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

export default BottomPanel;
