import React, { useState } from 'react';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { Link, Outlet } from 'react-router-dom';

const mockLocations = [
	{
		name: 'zzan',
		address: 'xxx Post St',
		description: 'Korean soups and snack foods',
		lat: 37.7876135,
		long: -122.4146039
	},
	{
		name: 'Amorino',
		address: '338 Grant Ave, San Francisco, CA 94108',
		description: 'Italian gelato chain. Makes pretty flowers out of gelato!',
		lat: 37.7902878,
		long: -122.4076051
	},
	{
		name: 'Cafe de la Presse',
		address: '352 Grant Ave, San Francisco, CA 94108',
		description: 'French brunch place',
		lat: 37.7904711,
		long: -122.4075858
	},
	{
		name: 'Blue Bottle',
		address: '199 Sutter St, San Francisco, CA 94104',
		description: 'An oldie but a goodie. Saves me once every two mornings.',
		lat: 37.7897088,
		long: -122.4057751
	}
]

const initContextValue: any = null;
export const LocationContext = React.createContext(initContextValue);

export const LocationsPage = () => {
	const [locationForMap, setLocationForMap] = useState(null);

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