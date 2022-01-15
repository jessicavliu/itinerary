import React, { useState } from 'react';
import { LeftPanel } from './LeftPanel';
import { RightPanel } from './RightPanel';
import { Link, Outlet } from 'react-router-dom';
import { mockLocations } from '../../Models/MockLocations';

interface LocationsPageProps {
	useDb: boolean
}

export const LocationsPage = ({useDb}: LocationsPageProps) => {
	return (
		<>
			<link rel="stylesheet" href="https://unpkg.com/tachyons@4/css/tachyons.min.css"></link>
            <Outlet/>
				<div className="flex">
					<div className="w-50 pa3 mr2">
						<LeftPanel locations={mockLocations} useDb={useDb}/>
					</div>
					<div className="w-50 pa3 mr2">
						<RightPanel />
					</div>
				</div>
		</>
	);
}