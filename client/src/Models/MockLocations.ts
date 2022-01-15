export interface MapLocation {
	location_id: number,
    name: string;
    address: string;
    description: string;
    lat: number;
    lng: number;
}

export const mockLocations: MapLocation[] = [
	{
		location_id: 0,
		name: 'zzan',
		address: '643 Post St, San Francisco, CA, 94102',
		description: 'Korean soups and snack foods',
		lat: 37.7876135,
		lng: -122.4146039
	},
	{
		location_id: 1,
		name: 'Amorino',
		address: '338 Grant Ave, San Francisco, CA 94108',
		description: 'Italian gelato chain. Makes pretty flowers out of gelato!',
		lat: 37.7902878,
		lng: -122.4076051
	},
	{
		location_id: 2,
		name: 'Cafe de la Presse',
		address: '352 Grant Ave, San Francisco, CA 94108',
		description: 'French brunch place',
		lat: 37.7904711,
		lng: -122.4075858
	},
	{
		location_id: 3,
		name: 'Blue Bottle',
		address: '199 Sutter St, San Francisco, CA 94104',
		description: 'An oldie but a goodie. Saves me once every two mornings.',
		lat: 37.7897088,
		lng: -122.4057751
	}
]