import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App from './App';



// Clear the existing HTML content


// Render your React component instead
const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);