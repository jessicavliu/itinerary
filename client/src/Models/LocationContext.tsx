import React from 'react';
import { MapLocation } from './MapLocation';

interface ILocationContext {
	locationForMap: MapLocation | null;
	setLocationForMap: any;
}

// ILocationContext | null should work as the contexts' type but isn't
export const MainLocationContext: React.Context<any> = React.createContext(null);

export const ModalLocationContext: React.Context<any> = React.createContext(null);