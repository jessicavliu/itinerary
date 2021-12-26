import React, { useContext } from 'react';
import { LocationContext } from './LocationsPage';

export const MapDisplay = () => {
    const {locationForMap} = useContext(LocationContext);

    const locationMessageSuffix = locationForMap ? `for ${locationForMap.name}` : '';
    return (
        <div className ="outline w-100 pa3 mr2">A Map Display {locationMessageSuffix}</div>
    );
};