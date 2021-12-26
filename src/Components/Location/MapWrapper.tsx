import { Wrapper } from "@googlemaps/react-wrapper";

import React, { useContext, useState } from 'react';

import { LocationContext } from './LocationsPage';
import { Map } from '../GoogleMapsUtils/Map';
import { Marker } from '../GoogleMapsUtils/Marker';

export const MapWrapper = () => {
    const {locationForMap} = useContext(LocationContext);
    const [zoom, setZoom] = useState(3);

    let locationMessageSuffix = '';
    let lat = 0; 
    let lng = 0;

    if (locationForMap) {
        lat = locationForMap.lat;
        lng = locationForMap.long;
        locationMessageSuffix = `for ${locationForMap.name}`;
    }

    const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat, lng });
    
    const onIdle = (m: google.maps.Map) => {
        console.log('onIdle');
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    }

    return (
        <>
            <div className ="outline w-100 pa3 mr2">A Map Display {locationMessageSuffix}</div>
            {/* <Wrapper apiKey={""}>
                <Map
                    center={center}
                    onIdle={onIdle}
                    zoom={zoom}
                    style={{ flexGrow: "1", height: "100%" }}
                >
                    <Marker position={center}/>
                </Map>
            </Wrapper> */}

            <iframe
                width="600"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
            </iframe>
            <div id="map"></div>
        </>
    );
};
