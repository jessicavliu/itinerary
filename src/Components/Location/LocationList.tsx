import React from 'react';

import { LocationDisplay } from './LocationDisplay'; 

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
                        <LocationDisplay location={child} key={idx}/>
                    );
                })
            }
        </>
    );
};