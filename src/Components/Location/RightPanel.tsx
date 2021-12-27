import React, { useContext } from 'react';
import { LocationContext } from './LocationsPage';
import { LocationMap } from './LocationMap';

export const RightPanel = () => {
    const {locationForMap} = useContext(LocationContext);
    const onAddLocationToItineraryClick = () => {
        console.log('location added to an itinerary');
        // Open 'add location to itinerary modal'
    }

    const locationMessageSuffix = locationForMap ? `for ${locationForMap.name}` : '';

    return (
        <>
            <LocationMap/>
            <br/>
            <button onClick={onAddLocationToItineraryClick}>Add location to an itinerary</button>
        </>
    );
};

