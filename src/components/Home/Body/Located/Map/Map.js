import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const mapStyle = require("./mapStyles.json");

const Map = withScriptjs(withGoogleMap((props) =>
	 <GoogleMap
    	defaultZoom={16}
    	defaultCenter={{ lat: 34.419055, lng: -103.213957 }}
    	 defaultOptions={{ styles: mapStyle }}
    	styles={{}}
	 >
	 
    	<Marker position={{ lat: 34.419055, lng: -103.213957 }} />
	</GoogleMap>
));
export default Map;