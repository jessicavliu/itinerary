import React from 'react';
import { Location, LocationList } from './Components/LocationList';

interface LeftPanelProps {
    locations: Location[];
}

export const LeftPanel = ({locations}: LeftPanelProps) => {
    const onAddLocationClick = () => {
        console.log('location added');
        // Add to location table in db
    }

    return (
        <>
            <h2>All locations</h2>
            <LocationList locations={locations} />
            <br/>
            <button onClick={onAddLocationClick}>Add location</button>
        </>
    );
};

