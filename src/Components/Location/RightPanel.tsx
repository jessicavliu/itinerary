import React from 'react';
import { MainMap } from './MainMap';

export const RightPanel = () => {
    const onAddLocationToItineraryClick = () => {
        console.log('location added to itinerary');
    }

    return (
        <>
            <MainMap/>
            <br/>
            <button onClick={onAddLocationToItineraryClick}>Add to itinerary</button>
        </>
    );
};



