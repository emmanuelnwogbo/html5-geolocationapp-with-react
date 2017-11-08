import React, { Component } from "react";
//import logo from './logo.svg';
//import './Home.css';
import { Link } from "react-router-dom";

import Map from "./map";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			watchId: false
		};
		this.watchPosition = this.watchPosition.bind(this);
		this.stopWatching = this.stopWatching.bind(this);
		this.num = this.num.bind(this);
	}

	num() {
		console.log("hello");
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
				timeout: 1000,
				maximumAge: 4000
			}
		);
		console.log(`this is the id: ${id}`);
		this.setState({ watchId: id });
	}

	stopWatching() {
		navigator.geolocation.clearWatch(this.state.watchId);
	}

	render() {
		console.log(this.num);
		return (
			<div>
				<h1>THIS IS THE HOME ROUTE</h1>
				<p>Hello world</p>
				<p>this is the home</p>
				<Link to={"/test"}>go to the test page</Link>
				<button onClick={this.watchPosition}>click to allow tracker</button>
				<button onClick={this.stopWatching}>click to stop tracker</button>
				<Map />
			</div>
		);
	}
}

export default Home;
