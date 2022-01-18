import { MapLocation } from "./MapLocation";

export interface Itinerary{
    id: number,
    name: string,
    description: string,
    locations: MapLocation[]
}
