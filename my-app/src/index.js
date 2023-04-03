import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Set up the type of router you want to use and then your routes (setting the routes in App.js)
// Using BrwoserRouter because we're creating an application in the browser
// Wrapping the entire App component, <App />, becuase our entire app component is going to be using this one router to manage all of the routing
// Or you could wrap <BrowserRouter> around <Routes> in App.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);