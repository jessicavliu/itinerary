import { Wrapper } from '@googlemaps/react-wrapper';
import React, { useState } from 'react';

import { Map } from '../Components/GoogleMapsUtils/Map';
import { Marker } from '../Components/GoogleMapsUtils/Marker';
import '../styles/modal.css';

interface AddLocationModalProps {
    show: boolean;
    handleClose: () => void;
}

export const AddLocationModal = ({ show, handleClose }: AddLocationModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const [zoom, setZoom] = useState(3);

    let lat = 0;
    let lng = 0;

    const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat, lng });

    const onIdle = (m: google.maps.Map) => {
        console.log('onIdle');
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    }

    const handleAddLocationToItinerary = () => {
        // update location db to have associated itinerary
        console.log('added location to itinerary')

        handleClose();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button type="button" onClick={handleClose}>
                    Close
                </button>
                <div>
                    
                    <Wrapper apiKey={""}>
                        <Map
                            center={center}
                            onIdle={onIdle}
                            zoom={zoom}
                            style={{ flexGrow: "1", height: "100%" }}
                        />
                    </Wrapper>

                    <span>Add to itineraries: </span>
                    <select>
                        <option value="itinerary 1">Itinerary 1</option>
                    </select>
                </div>
                <button type="button" onClick={handleAddLocationToItinerary}>
                    Add location
                </button>
            </section>
        </div>
    );
}