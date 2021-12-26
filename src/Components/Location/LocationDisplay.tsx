import React, { useContext } from 'react';
import { LocationContext } from '../LocationsPage';
import { Location } from './LocationList';

interface LocationDisplayProps {
    location: Location;
}
export const LocationDisplay = ({location}: LocationDisplayProps) => {
    const {setLocationForMap} = useContext(LocationContext);
    
    
    const handleLocationDisplayClick = () => {
        console.log("location selected");
        setLocationForMap(location);
    }

    return (
        <>
            <div>
                <button className="outline w-100" onClick={handleLocationDisplayClick}>
                    <div><b>{location.name}</b></div>
                    <div>{location.address}</div>
                    <div>{location.description}</div>
                </button>
            </div>
        </>
    )
};