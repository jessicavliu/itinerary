

import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleMap } from './GoogleMap';
import { SearchBox } from './SearchBox';

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export const MapWrapper = () => {
    const [zoom, setZoom] = useState(3);
    const [mapInstance, setMapInstance] = useState<google.maps.Map>();
    const [mapApiLoaded, setMapApiLoaded] = useState(false);

    let lat = 0;
    let lng = 0;

    const [center, setCenter] = useState<google.maps.LatLngLiteral>({ lat, lng });

    const onIdle = (m: google.maps.Map) => {
        console.log('onIdle');
        setZoom(m.getZoom()!);
        setCenter(m.getCenter()!.toJSON());
    }

    const apiIsLoaded = ({map, maps}: any) => {
        console.log('map', map);
        console.log('maps (api)', maps);
        setMapInstance(map);
        setMapApiLoaded(true);
        // setMapApi(maps);
    }

    console.log('rerender map wrapper');

    return (
        <>
            <Wrapper>
                    { mapApiLoaded &&
                        <div>
                            <SearchBox map={mapInstance!} />
                        </div>
                    }

                    <GoogleMap
                        defaultZoom={zoom}
                        defaultCenter={center}
                        onGoogleApiLoaded={apiIsLoaded}
                        yesIWantToUseGoogleMapApiInternals
                    >
                        {/* {places.map((place) => (
                            <Marker
                                key={place.id}
                                text={place.name}
                                lat={place.geometry.location.lat}
                                lng={place.geometry.location.lng}
                            />
                        ))} */}
                    </GoogleMap>
            </Wrapper>
        </>
    )
};