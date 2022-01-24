import '../../styles/modal.css';
import '../../styles/map.css';
import { MapWrapper } from './MapWrapper';
import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ModalLocationContext } from '../../Models/LocationContext';
import { MapLocation } from '../../Models/MapLocation';

interface AddLocationModalProps {
	show: boolean;
	handleClose: () => void;
	fetchCurrentLocations: () => Promise<void>;
	setMainMapLocation: (mainMapLocation: MapLocation) => void;
}

export const AddLocationModal = ({ setMainMapLocation, show, handleClose, fetchCurrentLocations }: AddLocationModalProps) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	const ref = useRef<HTMLSelectElement>(null);
	const [dropdownValue, setDropdownValue] = useState('');
	const [modalMapLocation, setModalMapLocation] = useState(null);

	useEffect(() => {
		if (ref.current) {
			setDropdownValue(ref.current.value);
		}
	}, [ref]);

	const handleAddLocation = useCallback(() => {
		// const itinerary = getItineraryById(parseInt(dropdownValue));
		axios.post('/locations', modalMapLocation)
			.then(res => {
				console.log("res", res);
				fetchCurrentLocations().then(() => {
					console.log('frontend res.data', res.data);
					setMainMapLocation(res.data[0]);
				});

				handleClose();
			})
			.catch(err => console.error(err))
			

		// update location db to have associated itinerary
		console.log('added location to itinerary')
	}, [fetchCurrentLocations, handleClose, modalMapLocation, setMainMapLocation]);

	return (
		<ModalLocationContext.Provider value={{ modalMapLocation, setModalMapLocation }}>
			<div className={showHideClassName}>
				<section className="modal-main">
					<button type="button" onClick={handleClose}>
						Close
					</button>
					<div className="main-wrapper">
						<MapWrapper />
					</div>
					<div>
						<span>Add to itineraries: </span>
						{/* <select ref={ref}>
						{
							<option value={-1}>None</option>
							mockItineraries.map(itinerary => (
								<option value={itinerary.id}>{itinerary.name}</option>
							))
						}
					</select> */}
					</div>
					<button type="button" onClick={handleAddLocation}>
						Add location
					</button>
				</section>
			</div>
		</ModalLocationContext.Provider>
	);
}