import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { Link, Outlet } from 'react-router-dom';

import axios from 'axios';
import { mockLocations } from '../../Models/MockLocations';

interface LocationsPageProps {
	useDb: boolean
}

export const LocationsPage = ({ useDb }: LocationsPageProps) => {
	let [shownLocations, setShownLocations] = useState(mockLocations);
	const [mainMapLocation, setMainMapLocation] = useState(shownLocations[0] ?? null);
	const fetchLocations = useCallback(async () => {
		axios.get('locations')
			.then(res => {
				setShownLocations((_) => res.data)
			}).catch(err => console.error(err));
	}, [setMainMapLocation, setShownLocations]);

	useEffect(() => {
		if (useDb) {
			fetchLocations();
			setMainMapLocation((_) => shownLocations[0] ?? null)
		}
	}, [fetchLocations, setMainMapLocation, useDb]);

	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
			<Outlet />
			<div className="flex">
				<div className="w-50 pa3 mr2">
					<LeftPanel locations={shownLocations} setMainMapLocation={setMainMapLocation} fetchCurrentLocations={fetchLocations} />
				</div>
				<div className="w-50 pa3 mr2">
					<RightPanel mainMapLocation={mainMapLocation} setMainMapLocation={setMainMapLocation} fetchCurrentLocations={fetchLocations} shownLocations={shownLocations}/>
				</div>
			</div>
		</>
	);
}