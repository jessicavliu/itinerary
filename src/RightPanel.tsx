import React from 'react';
import { Location, LocationList } from './Components/LocationList';
import { MapDisplay } from './MapDisplay';

interface RightPanelProps {
    locations: Location[];
}

export const RightPanel = () => {
    const onAddLocationToItineraryClick = () => {
        console.log('location added to an itinerary');
        // Open 'add location to itinerary modal'
    }

    return (
        <>
            <MapDisplay></MapDisplay>
            <br/>
            <button onClick={onAddLocationToItineraryClick}>Add location to an itinerary</button>
        </>
    );
};

