import React, { FC, useEffect, useRef, useState } from 'react';

interface SearchBoxProps {
    map: google.maps.Map;
}

export const SearchBox: FC<SearchBoxProps> = ({ map }: SearchBoxProps) => {
    const [searchBox, setSearchBox] = useState<google.maps.places.SearchBox>();
    const ref = useRef<HTMLInputElement>(null);
    let markers: google.maps.Marker[] = [];

    useEffect(() => {
        if(ref.current && map) {
            setSearchBox(new google.maps.places.SearchBox(ref.current));
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(ref.current);
        }
    }, [ref, map]);

    const onBoundsChanged = () => {
        searchBox!.setBounds(map.getBounds() as google.maps.LatLngBounds);
    };

    const onPlacesChanged = () => {
        const places = searchBox!.getPlaces();
        if (places.length == 0) {
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
    }

    map.addListener("bounds-changed", onBoundsChanged)
    map.addListener("places-changed", onPlacesChanged);

    return (
        <>
            <input ref={ref} type='text' placeholder='Type location here'></input>
        </>
    );
};