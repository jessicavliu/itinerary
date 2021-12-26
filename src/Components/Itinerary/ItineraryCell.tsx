import { Link, useNavigate } from "react-router-dom"

interface ItineraryCellProps {
    itinerary: any
}

export const ItineraryCell = ({itinerary}: ItineraryCellProps) => {
    const navigate = useNavigate();
    const handleGoToItineraryClick = () => {
        navigate(`/itineraries/${itinerary.id}`);
    }
    return (
        <button onClick={handleGoToItineraryClick}>
            {itinerary.name}
        </button>
    )
}