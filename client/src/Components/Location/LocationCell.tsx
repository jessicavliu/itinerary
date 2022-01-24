import React, { useContext } from 'react';
import { MainLocationContext } from '../../Models/LocationContext';
import { MapLocation } from '../../Models/MapLocation';

interface LocationCellProps {
    location: MapLocation;
    setMainMapLocation: any;
}
export const LocationCell = ({location, setMainMapLocation}: LocationCellProps) => {
    
    const handleLocationDisplayClick = () => {
        setMainMapLocation(location);
    }

    return (
        <>
            <div>
                <button className="outline w-100" onClick={handleLocationDisplayClick}>
                    <div><b>{location.name}</b></div>
                    <div>{location.address ?? 'Address not found'}</div>
                    <div>Rating: {location.rating ? `${location.rating}/5` : 'N/A' }</div>
                    <div>{location.description}</div>
                </button>
            </div>
        </>
    )
};