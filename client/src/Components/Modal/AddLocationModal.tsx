import '../../styles/modal.css';
import '../../styles/map.css';
import { MapWrapper } from './MapWrapper';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ModalLocationContext } from '../../Models/LocationContext';

interface AddLocationModalProps {
	show: boolean;
	handleClose: () => void;
}

export const AddLocationModal = ({ show, handleClose }: AddLocationModalProps) => {
	const showHideClassName = show ? "modal display-block" : "modal display-none";
	const ref = useRef<HTMLSelectElement>(null);
	const [dropdownValue, setDropdownValue] = useState('');
	const [locationForMap, setLocationForMap] = useState(null);

	useEffect(() => {
		if (ref.current) {
			setDropdownValue(ref.current.value);
		}
	}, [ref]);

	const handleAddLocation = useCallback(() => {
		// const itinerary = getItineraryById(parseInt(dropdownValue));
		axios.post('/locations', locationForMap)
			.then(res => {
				console.log(res);
				handleClose();
			})
			.catch(err => console.error(err))

		// update location db to have associated itinerary
		console.log('added location to itinerary')
	}, [handleClose, locationForMap]);

	return (
		<ModalLocationContext.Provider value={{ locationForMap, setLocationForMap }}>
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