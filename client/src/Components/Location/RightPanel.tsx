import axios from 'axios';
import React, { useCallback } from 'react';
import { MapLocation } from '../../Models/MapLocation';
import { MainMap } from './MainMap';

interface RightPanelProps{
    fetchCurrentLocations: () => void;
    mainMapLocation: any;
    setMainMapLocation: any;
    shownLocations: any;
}

export const RightPanel = ({fetchCurrentLocations, mainMapLocation, setMainMapLocation, shownLocations}: RightPanelProps) => {
    const handleAddLocationToItineraryClick = useCallback(() => {
        console.log('location added to itinerary');
    }, []);

    const handleDeleteLocation = useCallback(() => {
        console.log(mainMapLocation);
        console.log(mainMapLocation.location_id);
        axios.delete('locations', {data: {location_id: mainMapLocation.location_id}})
            .then(res => {
                console.log(res + "deleted");
                fetchCurrentLocations();
                setMainMapLocation(shownLocations[0] ?? null);
                
            })
            .catch(err => console.error(err))
        console.log('location deleted');
    }, [fetchCurrentLocations, mainMapLocation]);

    console.log("main map location", mainMapLocation);

    return (
        <>
            <MainMap mainMapLocation={mainMapLocation}/>
            <br/>
            <div>
                <button onClick={handleAddLocationToItineraryClick}>Add to itinerary</button>
            </div>
            <br/>
            <div>
                <button onClick={handleDeleteLocation}> Delete Location </button>
            </div>
        </>
    );
};



