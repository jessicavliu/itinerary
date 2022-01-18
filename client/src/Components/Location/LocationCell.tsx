import React, { useContext } from 'react';
import { LocationContext } from '../../App';
import { MapLocation } from '../../Models/MapLocation';

interface LocationCellProps {
    location: MapLocation;
}
export const LocationCell = ({location}: LocationCellProps) => {
    const {setLocationForMap} = useContext(LocationContext);
    
    const handleLocationDisplayClick = () => {
        setLocationForMap(location);
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