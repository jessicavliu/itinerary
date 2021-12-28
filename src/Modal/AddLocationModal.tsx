import React from 'react';
import '../styles/modal.css';

interface AddLocationModalProps{
    show: boolean;
    handleClose: () => void;
}

export const AddLocationModal = ({show, handleClose}: AddLocationModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const searchBox = google.maps.places.SearchBox;


    const handleAddLocationToItinerary = () => {
        // update location db to have associated itinerary
        console.log('added location to itinerary')

        handleClose();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button type="button" onClick={handleClose}>
                    Close
                </button>
                <div>
                    <input type='text'></input>

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