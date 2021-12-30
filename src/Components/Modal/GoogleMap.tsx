import React, { ReactChild } from 'react';
import styled from 'styled-components';
import GoogleMapReact, { Props } from 'google-map-react';
import configData from "../../config.json";

interface GoogleMapProps extends Props {
	children?: ReactChild[];
}

const Wrapper = styled.main`
	width: 100%;
	height: 80%;
`;


export const GoogleMap = ({ children, ...props }: GoogleMapProps) => {

	console.log('rerender google map')

	return (
		<Wrapper>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: `${configData.GOOGLE_MAPS_API_KEY}`,
					libraries: ['places', 'geometry'],
				}}
				{...props}
			>
				{children}
			</GoogleMapReact>
		</Wrapper>
	);

};