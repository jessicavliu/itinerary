import React, { FC, useEffect, useRef, useState } from 'react';

import { useDeepCompareEffectForMaps } from '../Components/GoogleMapsUtils/GoogleMapsUtils';
import { SearchBox } from './SearchBox';

interface MapProps extends google.maps.MapOptions {
    style: { [key: string]: string };
    onIdle?: (map: google.maps.Map) => void;
    children?: React.ReactNode,
}

export const Map: FC<MapProps> = ({onIdle, style, children, ...options}: MapProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        if(ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}))
        }
    }, [ref, map]);
    
    useDeepCompareEffectForMaps(() => {
        if(map) {
            map.setOptions(options);
        }
    }, [map, options])

    useEffect(() => {
        if(map) {
            ['idle'].forEach((eventName) => {
                google.maps.event.clearListeners(map, eventName);
            });

            if (onIdle) {
                map.addListener('idle', () => onIdle(map));
            }
        }
    }, [map, onIdle]);

    return (
        <>
            <div ref={ref} style={style} />
            
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { map });
                }
            })}
        </>
    );
};