import React from 'react';
import { AppRoute } from './Routes';

const App = () => {
  const appStyle = {
    backgroundColor: '#3498db',
    minHeight: '100vh',  // Ensure the background color covers the entire viewport height
    padding: '20px',    // Add some padding for better visibility of the content
    color: 'white',     // Set text color to white for better visibility on the blue background
  };

  return(
    <AppRoute/>
  );
};

export default App;