import React, { useContext } from 'react';

import configData from "../../config.json";

import { LocationContext } from './LocationsPage';

export const LocationMap = () => {
    const {locationForMap} = useContext(LocationContext);

    return (
        <>
            <iframe
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=${configData.GOOGLE_MAPS_API_KEY}
                &q=${locationForMap ? locationForMap.name + ' ' + locationForMap.address : 'San Francisco, CA' }`}>
            </iframe>
            <div id="map"></div>
        </>
    );
};
