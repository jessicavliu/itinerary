import React, { useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';
import { mockLocations } from './Models/MockLocations';

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