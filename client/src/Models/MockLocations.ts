export interface MapLocation {
    name: string;
    address: string;
    description: string;
    lat: number;
    long: number;
}

export const mockLocations = [
	{
		name: 'zzan',
		address: '643 Post St, San Francisco, CA, 94102',
		description: 'Korean soups and snack foods',
		lat: 37.7876135,
		long: -122.4146039
	},
	{
		name: 'Amorino',
		address: '338 Grant Ave, San Francisco, CA 94108',
		description: 'Italian gelato chain. Makes pretty flowers out of gelato!',
		lat: 37.7902878,
		long: -122.4076051
	},
	{
		name: 'Cafe de la Presse',
		address: '352 Grant Ave, San Francisco, CA 94108',
		description: 'French brunch place',
		lat: 37.7904711,
		long: -122.4075858
	},
	{
		name: 'Blue Bottle',
		address: '199 Sutter St, San Francisco, CA 94104',
		description: 'An oldie but a goodie. Saves me once every two mornings.',
		lat: 37.7897088,
		long: -122.4057751
	}
]