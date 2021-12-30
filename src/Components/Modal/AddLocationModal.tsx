import '../../styles/modal.css';
import '../../styles/map.css';
import { MapWrapper } from './MapWrapper';

interface AddLocationModalProps {
    show: boolean;
    handleClose: () => void;
}

export const AddLocationModal = ({ show, handleClose }: AddLocationModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";


    const handleAddLocationToItinerary = () => {
        // update location db to have associated itinerary
        console.log('added location to itinerary')

        handleClose();
    };

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
                    <select>
                        <option value="itinerary 1">Itinerary 1</option>
                    </select>
                </div>
                <button type="button" onClick={handleAddLocationToItinerary}>
                    Add location
                </button>
            </section>
        </div>
    );
}