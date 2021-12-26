import { useParams } from "react-router";

interface SingleItineraryPageProps {
    itinerary: any;
}

export const SingleItineraryPage = () => {
    const params = useParams();
    return (
        <>
            {params.itineraryId}
        </>
    )
};