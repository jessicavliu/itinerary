import axios from 'axios';
import React, { useCallback, useContext } from 'react';
import { LocationContext } from '../../App';
import { MainMap } from './MainMap';

export const RightPanel = () => {
    const {locationForMap} = useContext(LocationContext);
    const handleAddLocationToItineraryClick = useCallback(() => {
        console.log('location added to itinerary');
    }, []);

    const handleDeleteLocation = useCallback(() => {
        console.log(locationForMap);
        console.log(locationForMap.location_id);
        axios.delete('locations', {data: {location_id: locationForMap.location_id}})
            .then(res => console.log(res + "deleted"))
            .catch(err => console.error(err))
        console.log('location deleted');
    }, [locationForMap]);

    return (
        <>
            <MainMap/>
            <br/>
            <div>
                <button onClick={handleAddLocationToItineraryClick}>Add to itinerary</button>
            </div>
            <br/>
            <div>
                <button onClick={handleDeleteLocation}> Delete Location </button>
            </div>
        </>
    );
};



