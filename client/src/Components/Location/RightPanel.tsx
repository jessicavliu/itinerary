import React, { useCallback } from 'react';
import { MainMap } from './MainMap';

export const RightPanel = () => {
    const handleAddLocationToItineraryClick = useCallback(() => {
        console.log('location added to itinerary');
    }, []);

    const handleDeleteLocation = useCallback(() => {
        console.log('location deleted');
    }, []);

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



