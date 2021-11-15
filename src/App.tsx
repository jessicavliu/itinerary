import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';

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

function App() {


	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
			<ul>
				<li>Home</li>
				<li>Itineraries</li>
				<li>Locations</li>
			</ul>
			<div className="flex">
				<div className="w-50 pa3 mr2">
					<LeftPanel locations={mockLocations}/>
				</div>
				<div className="w-50 pa3 mr2">
					<RightPanel/>
				</div>
			</div>
		</>
	);
}

export default App;
