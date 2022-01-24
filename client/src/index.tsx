import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LocationsPage } from './Components/Location/LocationsPage';
import { ItinerariesPage } from './Components/Itinerary/ItinerariesPage';
import { SingleItineraryPage } from './Components/Itinerary/SingleItineraryPage';

const useDb = true;


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="locations" element={<LocationsPage useDb={useDb}/>} />
          <Route path="itineraries" element={<ItinerariesPage useDb={useDb}/>}/>  
          <Route path="itineraries/:itineraryId" element={<SingleItineraryPage useDb={useDb}/>}/>
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
