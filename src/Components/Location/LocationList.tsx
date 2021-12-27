import React from 'react';

import { LocationCell } from './LocationCell'; 

export interface Location {
    name: string;
    address: string;
    description: string;
    lat: number;
    long: number;
}

interface LocationListProps{
    locations: Location[];
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