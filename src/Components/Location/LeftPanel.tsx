import React, { useState } from 'react';
import { AddLocationModal } from '../Modal/AddLocationModal';
import { LocationList } from './LocationList';
import { MapLocation } from '../../Models/MockLocations';

interface LeftPanelProps {
    locations: MapLocation[];
}

export const LeftPanel = ({locations}: LeftPanelProps) => {
    const [showModal, setShowModal] = useState(false);
    const onAddLocationClick = () => {
        // Add to location table in db
        setShowModal(true);
    }

    const onModalClose = () => {
        setShowModal(false);
    }

    return (
        <>
            <h2>All locations</h2>
            <LocationList locations={locations} />
            <br/>
            <button onClick={onAddLocationClick}>Add location</button>
            { showModal && <AddLocationModal show={showModal} handleClose={onModalClose}/> }
        </>
    );
};

