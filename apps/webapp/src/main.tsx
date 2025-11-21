import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

// if (process.env.NODE_ENV === "development") {

// }

// configure({
//     enforceActions: "never"
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
    <App />    
    // </React.StrictMode>
);
