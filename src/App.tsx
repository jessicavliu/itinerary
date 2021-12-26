import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

const mockLocations = [
	{
		name: 'zzan',
		address: 'xxx Post St',
		description: 'Korean soups and snack foods'
	},
	{
		name: 'Amorino',
		address: 'xxx Grant Ave',
		description: 'Italian gelato chain. Makes pretty flowers out of gelato!'
	},
	{
		name: 'Cafe de la Presse',
		address: 'xxx Grant Ave',
		description: 'French brunch place'
	},
	{
		name: 'Blue Bottle',
		address: 'xxx Kearny St',
		description: 'An oldie but a goodie. Saves me once every two mornings.'
	},
]

export const App = () => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/itineraries">Itineraries</Link></li>
				<li><Link to="/locations">Locations</Link></li>
			</ul>
			<Outlet/>
		</>
	);
}

{/* <link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
<ul>
	<li><Link to="/">Home</Link></li>
	<li><Link to="/itineraries">Itineraries</Link></li>
	<li><Link to="/locations">Locations</Link></li>
</ul>
<LocationContext.Provider value={{ locationForMap, setLocationForMap }}>
	<div className="flex">
		<div className="w-50 pa3 mr2">
			<LeftPanel locations={mockLocations} />
		</div>
		<div className="w-50 pa3 mr2">
			<RightPanel />
		</div>
	</div>
</LocationContext.Provider> */}