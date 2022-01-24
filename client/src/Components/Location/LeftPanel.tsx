import React, { useCallback, useEffect, useState } from 'react';
import { AddLocationModal } from '../Modal/AddLocationModal';
import { LocationList } from './LocationList';
import { MapLocation } from '../../Models/MapLocation';

interface LeftPanelProps {
	locations: MapLocation[]
	fetchCurrentLocations: () => Promise<void>;
	setMainMapLocation: any;
}

export const LeftPanel = ({locations, fetchCurrentLocations, setMainMapLocation}: LeftPanelProps) => {

	useEffect(() => {
		fetchCurrentLocations();
		}
	, [fetchCurrentLocations]);

	const [showModal, setShowModal] = useState(false);
	const onAddLocationClick = useCallback(() => {
		setShowModal(true);
	}, [setShowModal]);

	const onModalClose = useCallback(() => {
		setShowModal(false);
	}, [setShowModal])

	return (
		<>
			<h2>All locations</h2>
			<LocationList setMainMapLocation={setMainMapLocation} locations={locations}  />
			<br/>
			<button onClick={onAddLocationClick}>Add location</button>
			{ showModal && 
					<AddLocationModal setMainMapLocation={setMainMapLocation} show={showModal} fetchCurrentLocations={fetchCurrentLocations} handleClose={onModalClose}/>
			}
		</>
	);
};

