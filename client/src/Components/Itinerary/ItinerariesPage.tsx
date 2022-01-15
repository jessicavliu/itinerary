import React from 'react';
import { ItineraryCell } from './ItineraryCell';

import { mockItineraries } from '../../Models/MockItineraries';

interface ItinerariesPageProps {
    useDb: boolean;
}

export const ItinerariesPage = ({useDb}: ItinerariesPageProps) => {
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