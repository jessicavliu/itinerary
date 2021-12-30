import React, { useContext, useState } from 'react';
import { AddLocationModal } from '../Modal/AddLocationModal';
import { LocationMap } from './LocationMap';
import { LocationContext } from '../../App';

export const RightPanel = () => {
    const onAddLocationToItineraryClick = () => {
        console.log('location added to itinerary');
    }

    return (
        <>
            <LocationMap/>
            <br/>
            <button onClick={onAddLocationToItineraryClick}>Add to itinerary</button>
        </>
    );
};



