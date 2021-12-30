import '../../styles/modal.css';
import '../../styles/map.css';
import { MapWrapper } from './MapWrapper';
import { mockItineraries } from '../../Models/MockItineraries';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { getItineraryById, putAddLocationToItinerary } from '../../Services/ItineraryService';
import { LocationContext } from '../../App';

interface AddLocationModalProps {
    show: boolean;
    handleClose: () => void;
}

export const AddLocationModal = ({ show, handleClose }: AddLocationModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const ref = useRef<HTMLSelectElement>(null);
    const [dropdownValue, setDropdownValue] = useState('');
    const {locationForMap} = useContext(LocationContext);

    useEffect(() => {
        if(ref.current) {
            setDropdownValue(ref.current.value);
        }
    }, [ref]);

    const handleAddLocationToItinerary = useCallback(() => {
        const itinerary = getItineraryById(parseInt(dropdownValue));
        putAddLocationToItinerary(itinerary, locationForMap);

        // update location db to have associated itinerary
        console.log('added location to itinerary')

        handleClose();
    }, [handleClose]);

    console.log('rerender location modal');

    return (
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
                    <select ref={ref}>
                        {
                            mockItineraries.map(itinerary => (
                                <option value={itinerary.id}>{itinerary.name}</option>
                            ))
                        }
                    </select>
                </div>
                <button type="button" onClick={handleAddLocationToItinerary}>
                    Add location
                </button>
            </section>
        </div>
    );
}