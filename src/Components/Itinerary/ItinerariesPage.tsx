import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ItineraryCell } from './ItineraryCell';

const mockItineraries = [
    {
        id: 0,
        name: 'Foodles around Lower Nob Hill',
        locations: [
            {
                name: 'Amorino',
                address: '338 Grant Ave, San Francisco, CA 94108',
                description: 'Italian gelato chain. Makes pretty flowers out of gelato!'
            },
            {
                name: 'Cafe de la Presse',
                address: '352 Grant Ave, San Francisco, CA 94108',
                description: 'French brunch place'
            },
            {
                name: 'Blue Bottle',
                address: 'xxx Kearny St',
                description: 'An oldie but a goodie. Saves me once every two mornings.'
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
                description: 'Udon~'
            },
            {
                name: 'Hinodeya',
                address: '',
                description: "But why tho when there's one downtown? -__-"
            },
            {
                name: 'Benkyodo',
                address: 'xxx Sutter St',
                description: 'istg this line that wraps around the block'
            }           
        ]
    }
]

export const ItinerariesPage = () => {
    return (
        <>
            <div>Itineraries</div>
            {
                mockItineraries.map((val, idx) => {
                    return (
                        <div>
                            <ItineraryCell itinerary={val} key={idx}/>
                            <br/>
                        </div>
                    )
                })
            }
        </>
    )

};