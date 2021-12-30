import { useParams } from "react-router";
import { LocationList } from "../Location/LocationList";
import { mockItineraries } from "../../Models/MockItineraries";

export const SingleItineraryPage = () => {
    const params = useParams();

    const itinerary = mockItineraries.filter(itinerary => itinerary.id === parseInt(params.itineraryId!))[0];
    console.log(itinerary)

    return (
        <>
            <div>{itinerary.name}</div>
            <LocationList locations={itinerary.locations}/>
        </>
    )
};