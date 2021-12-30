import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

interface SearchBoxProps {
    map: google.maps.Map;
    mapApi?: any
}

export const SearchBox: FC<SearchBoxProps> = ({ map }: SearchBoxProps) => {
    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
    const ref = useRef<HTMLInputElement>(null);
    let markers: google.maps.Marker[] = [];

    useEffect(() => {
        if (ref.current) {
            setSearchBox(new google.maps.places.SearchBox(ref.current));

        }
    }, [ref]);

    const onBoundsChanged = useCallback(() => {
        console.log('on bounds changed')
        searchBox!.setBounds(map.getBounds() as google.maps.LatLngBounds);
    }, [searchBox, map]);

    const onPlacesChanged = useCallback(() => {
        console.log('on places changed')
        
        const places = searchBox!.getPlaces();
        if (places.length === 0) {
            return;
        }

        markers.forEach((marker) => {
            marker.setMap(null);
        });

        markers = [];

        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon as string,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );

            if (place.geometry.viewport) {
                // Only geocodes have viewport
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }

        });
        map.fitBounds(bounds);
    }, [searchBox, map]);

    useEffect(() => {
        if(searchBox) {
            map.addListener('bounds_changed', onBoundsChanged)
            searchBox.addListener('places_changed', onPlacesChanged);
            console.log('added listener')

            return () => {
                google.maps.event.clearListeners(map, 'bounds_changed');
                google.maps.event.clearListeners(searchBox, 'places_changed');
                console.log('removed listener')
            }
        }
    }, [map, searchBox, onBoundsChanged, onPlacesChanged]);

    return (
        <Wrapper>
            <input
                ref={ref}
                type="text"
                placeholder="Enter a location"
            />
        </Wrapper>
    );
};