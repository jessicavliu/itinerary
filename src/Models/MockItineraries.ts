import { MapLocation } from './MockLocations';

export interface Itinerary{
    id: number,
    name: string,
    locations: MapLocation[]
}

export const mockItineraries: Itinerary[] = [
    {
        id: 0,
        name: 'Foodles around Lower Nob Hill',
        locations: [
            {
                name: 'Amorino',
                address: '338 Grant Ave, San Francisco, CA 94108',
                description: 'Italian gelato chain. Makes pretty flowers out of gelato!',
                lat: 0,
                long: 23
            },
            {
                name: 'Cafe de la Presse',
                address: '352 Grant Ave, San Francisco, CA 94108',
                description: 'French brunch place',
                lat: 12,
                long: 23
            },
            {
                name: 'Blue Bottle',
                address: 'xxx Kearny St',
                description: 'An oldie but a goodie. Saves me once every two mornings.',
                lat: 11,
                long: 90
            }
        ]
    },
    {
        id: 1,
        name: 'Foodles in Japantown', 
        locations: [
            {
                name: 'Udon Mugizo',
                address: 'xxx Grant Ave',
                description: 'Udon~',
                lat: 0,
                long: 0
            },
            {
                name: 'Hinodeya',
                address: '',
                description: "But why tho when there's one downtown? -__-",
                lat: 0,
                long: 1
            },
            {
                name: 'Benkyodo',
                address: 'xxx Sutter St',
                description: 'istg this line that wraps around the block',
                lat: 12,
                long: 12
            }           
        ]
    }
]