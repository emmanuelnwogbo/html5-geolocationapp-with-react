import React, { Component } from "react";

class Map extends Component {
	constructor() {
		super();
		this.state = {
			latitude: 38.897733,
			longitude: -77.036531
		};
	}

	render() {
		let latlong = `${this.state.latitude},${this.state.longitude}`;
		let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latlong}&zoom=20&size=300x300&maptype=roadmap&key=AIzaSyAPFqArGZlNnBsalEf3rW8JxbB3PBQWTH4`;
		return (
			<div>
				<img src={mapUrl} alt="map" />
			</div>
		);
	}
}

export default Map;
