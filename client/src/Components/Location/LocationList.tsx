import React from 'react';

import { LocationCell } from './LocationCell'; 
import { MapLocation } from '../../Models/MapLocation';

interface LocationListProps{
    locations: MapLocation[];
    setMainMapLocation: any;
}

export const LocationList = ({locations, setMainMapLocation}: LocationListProps) => {
    return (
        <>
            {
                locations.map((child, idx) => {
                    return (
                        <LocationCell setMainMapLocation={setMainMapLocation} location={child} key={idx}/>
                    );
                })
            }
        </>
    );
};