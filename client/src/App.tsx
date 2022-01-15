import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { isAsExpression } from 'typescript';

const initContextValue: any = null;
export const LocationContext = React.createContext(initContextValue);

export const App = () => {

	const [locationForMap, setLocationForMap] = useState(null);

	return (
		<>
			<LocationContext.Provider value={{ locationForMap, setLocationForMap }}>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/itineraries">Itineraries</Link></li>
				<li><Link to="/locations">Locations</Link></li>
			</ul>
			<Outlet/>
			</LocationContext.Provider>
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