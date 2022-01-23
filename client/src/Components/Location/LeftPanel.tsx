import React, { useEffect, useRef, useState } from 'react';
import { AddLocationModal } from '../Modal/AddLocationModal';
import { LocationList } from './LocationList';
import { MapLocation } from '../../Models/MapLocation';
import axios from 'axios';
import { ModalLocationContext } from '../../Models/LocationContext';

interface LeftPanelProps {
	locations: MapLocation[];
	useDb: boolean;
}

export const LeftPanel = ({locations, useDb}: LeftPanelProps) => {
	let [shownLocations, setShownLocations] = useState(locations);
	
	useEffect(() => {
		if (useDb) {
			axios.get('locations')
				.then(res => setShownLocations(res.data))
				.catch(err => console.error(err));
			console.log(shownLocations);
		}
	}, [setShownLocations, useDb]);

	console.log(shownLocations)
	const [showModal, setShowModal] = useState(false);
	const onAddLocationClick = () => {
		// Add to location table in db
		setShowModal(true);
	}

	const onModalClose = () => {
		setShowModal(false);
	}

	return (
		<>
			<h2>All locations</h2>
			<LocationList locations={shownLocations} />
			<br/>
			<button onClick={onAddLocationClick}>Add location</button>
			{ showModal && 
				
					<AddLocationModal show={showModal} handleClose={onModalClose}/>
			}
		</>
	);
};

