import React from 'react';
import { ItineraryCell } from './ItineraryCell';

import { mockItineraries } from '../../Models/MockItineraries';

export const ItinerariesPage = () => {
    return (
        <>
            <div>Itineraries</div>
            {
                mockItineraries.map((val, idx) => {
                    return (
                        <div>
                            <ItineraryCell itinerary={val} key={idx}/>
                            <br/>
                        </div>
                    )
                })
            }
        </>
    );
};