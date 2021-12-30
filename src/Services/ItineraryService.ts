import { Itinerary, mockItineraries } from "../Models/MockItineraries"
import { MapLocation } from "../Models/MockLocations";

// pretend that mock itineraries and mock locations are the store
export const getItineraryById = (id: number): Itinerary => {
    const result = mockItineraries.filter((itinerary) => (
        id = itinerary.id
    ));

    if(result.length === 0) {
        throw new Error(`Could not fetch itinerary with id ${id}`);
    }

    return result[0];
}

export const putAddLocationToItinerary = (itinerary: Itinerary, location: MapLocation) => {
    itinerary.locations.push(location);
}