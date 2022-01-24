import React, { useContext } from 'react';

import configData from "../../config.json";

interface MainMapProps {
	mainMapLocation: any
}

export const MainMap = ({mainMapLocation}: MainMapProps) => {
	console.log('in main map', mainMapLocation);

	setTimeout(() => {
	 }, 3000)

	return (
		<>
			<iframe
				width="600"
				height="450"
				loading="lazy"
				allowFullScreen
				src={`https://www.google.com/maps/embed/v1/place?key=${configData.GOOGLE_MAPS_API_KEY}
				&q=${mainMapLocation ? mainMapLocation.name + ' ' + mainMapLocation.address : 'San Francisco, CA' }`}>
			</iframe>
			<div id="map"></div>
		</>
	);
};
