import React, { useState } from 'react';
import './App.css';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { Link, Outlet } from 'react-router-dom';

const mockLocations = [
	{
		name: 'zzan',
		address: 'xxx Post St',
		description: 'Korean soups and snack foods'
	},
	{
		name: 'Amorino',
		address: '338 Grant Ave, San Francisco, CA 94108',
		description: 'Italian gelato chain. Makes pretty flowers out of gelato!'
	},
	{
		name: 'Cafe de la Presse',
		address: '352 Grant Ave, San Francisco, CA 94108',
		description: 'French brunch place'
	},
	{
		name: 'Blue Bottle',
		address: 'xxx Kearny St',
		description: 'An oldie but a goodie. Saves me once every two mornings.'
	}
]

const initContextValue: any = null;
export const LocationContext = React.createContext(initContextValue);

export const LocationsPage = () => {
	const [locationForMap, setLocationForMap] = useState(null);
	
	function initMap(): void {
	  const uluru = { lat: -25.344, lng: 131.036 };
	  const map = new google.maps.Map(
	    document.getElementById("map") as HTMLElement,
	    {
	      zoom: 4,
	      center: uluru,
	    }
	  );

	  // The marker, positioned at Uluru
	  const marker = new google.maps.Marker({
	    position: uluru,
	    map: map,
	  });
	}

	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
            <Outlet/>
			<LocationContext.Provider value={{ locationForMap, setLocationForMap }}>
				<div className="flex">
					<div className="w-50 pa3 mr2">
						<LeftPanel locations={mockLocations} />
					</div>
					<div className="w-50 pa3 mr2">
						<RightPanel />
					</div>
				</div>
			</LocationContext.Provider>
		</>
	);
}