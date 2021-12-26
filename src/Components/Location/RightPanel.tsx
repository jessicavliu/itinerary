import React, { useContext } from 'react';
import { Location, LocationList } from './Components/LocationList';
import { LocationContext } from './LocationsPage';
import { MapDisplay } from './MapDisplay';

interface RightPanelProps {
    locations: Location[];
}

export const RightPanel = () => {
    const {locationForMap} = useContext(LocationContext);
    const onAddLocationToItineraryClick = () => {
        console.log('location added to an itinerary');
        // Open 'add location to itinerary modal'
    }

    const locationMessageSuffix = locationForMap ? `for ${locationForMap.name}` : '';

    return (
        <>
            <div className ="outline w-100 pa3 mr2" id="map">A Map Display {locationMessageSuffix}</div>
            <br/>
            <button onClick={onAddLocationToItineraryClick}>Add location to an itinerary</button>
        </>
    );
};

