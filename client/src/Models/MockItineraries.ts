import { Itinerary } from './Itinerary';


export const mockItineraries: Itinerary[] = [
    {
        id: 0,
        name: 'Foodles around Lower Nob Hill',
        description: 'the thing on the tin',
        locations: [
            {
                location_id: 20,
                name: 'Amorino',
                address: '338 Grant Ave, San Francisco, CA 94108',
                rating: 4.5,
                description: 'Italian gelato chain. Makes pretty flowers out of gelato!',
                lat: 0,
                lng: 23
            },
            {
                location_id: 21,
                name: 'Cafe de la Presse',
                address: '352 Grant Ave, San Francisco, CA 94108',
                rating: 4.2,
                description: 'French brunch place',
                lat: 12,
                lng: 23
            },
            {
                location_id: 22,
                name: 'Blue Bottle',
                address: 'xxx Kearny St',
                rating: 4.5,
                description: 'An oldie but a goodie. Saves me once every two mornings.',
                lat: 11,
                lng: 90
            }
        ]
    },
    {
        id: 1,
        name: 'Foodles in Japantown', 
        description: '^(^__^)/',
        locations: [
            {
                location_id: 10,
                name: 'Udon Mugizo',
                address: 'xxx Grant Ave',
                rating: 4.2,
                description: 'Udon~',
                lat: 0,
                lng: 0
            },
            {
                location_id: 11,
                name: 'Hinodeya',
                address: '',
                rating: 4.2,
                description: "But why tho when there's one downtown? -__-",
                lat: 0,
                lng: 1
            },
            {
                location_id: 12,
                name: 'Benkyodo',
                address: 'xxx Sutter St',
                rating: 4,
                description: 'istg this line that wraps around the block',
                lat: 12,
                lng: 12
            }           
        ]
    }
]