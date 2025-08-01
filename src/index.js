import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Updated path to styles
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance monitoring
reportWebVitals();