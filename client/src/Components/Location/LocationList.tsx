import React from 'react';

import { LocationCell } from './LocationCell'; 
import { MapLocation } from '../../Models/MockLocations';

interface LocationListProps{
    locations: MapLocation[];
}

export const LocationList = ({locations}: LocationListProps) => {
    return (
        <>
            {
                locations.map((child, idx) => {
                    return (
                        <LocationCell location={child} key={idx}/>
                    );
                })
            }
        </>
    );
};