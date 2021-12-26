import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocationsPage } from './LocationsPage';
import { ItinerariesPage } from './ItinerariesPage';
import { SingleItineraryPage } from './SingleItineraryPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="locations" element={<LocationsPage />} />
          <Route path="itineraries" element={<ItinerariesPage />}/>  
          <Route path="itineraries/:itineraryId" element={<SingleItineraryPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
