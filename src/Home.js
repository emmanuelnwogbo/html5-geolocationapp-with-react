import React, { Component } from "react";
//import logo from './logo.svg';
//import './Home.css';
import { Link } from "react-router-dom";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			watchId: false
		};
		this.watchPosition = this.watchPosition.bind(this);
		this.stopWatching = this.stopWatching.bind(this);
		this.geolocationFunc = this.geolocationFunc.bind(this);
	}

	watchPosition() {
		let id = navigator.geolocation.watchPosition(
			position => {
				let lat = position.coords.latitude;
				let longi = position.coords.longitude;

				console.log(`${lat}, ${longi}`);
			},
			error => {
				alert(
					`this is the error code${error.code}, this is the error message: ${error.message}`
				);
			},
			{
				enableHighAccuracy: false,
				timeout: 3000,
				maximumAge: 4000
			}
		);
		console.log(`this is the id: ${id}`);
		this.setState({ watchId: id });
	}

	stopWatching() {
		navigator.geolocation.clearWatch(this.state.watchId);
	}

	geolocationFunc() {
		let latitude = 40.714728;
		let longitude = -73.998672;
		let latlong = `${latitude},${longitude}`;
		let mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latlong}&zoom=15&size=600*500&maptype=roadmap&key=AIzaSyAPFqArGZlNnBsalEf3rW8JxbB3PBQWTH4`;
		return (
			<div>
				<img src={mapUrl} alt="maps" />
			</div>
		);
	}

	render() {
		return (
			<div>
				<h1>THIS IS THE HOME ROUTE</h1>
				<p>Hello world</p>
				<p>this is the home</p>
				<Link to={"/test"}>go to the test page</Link>
				<button onClick={this.watchPosition}>click to allow tracker</button>
				<button onClick={this.stopWatching}>click to stop tracker</button>
				<div id="staticmap" style={{ width: "600px", height: "500px " }}>
					{this.geolocationFunc()}
				</div>
			</div>
		);
	}
}

export default Home;
