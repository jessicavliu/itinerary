import React, { useContext } from 'react';

import configData from "../../config.json";
import { MainLocationContext } from '../../Models/LocationContext';

export const MainMap = () => {
	const {locationForMap} = useContext(MainLocationContext);

	return (
		<>
			<iframe
				width="600"
				height="450"
				loading="lazy"
				allowFullScreen
				src={`https://www.google.com/maps/embed/v1/place?key=${configData.GOOGLE_MAPS_API_KEY}
				&q=${locationForMap ? locationForMap.name + ' ' + locationForMap.address : 'San Francisco, CA' }`}>
			</iframe>
			<div id="map"></div>
		</>
	);
};
