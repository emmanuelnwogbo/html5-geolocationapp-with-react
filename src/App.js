import React, { Component } from "react";
//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./Home";
import Test from "./Test";

class App extends Component {
	constructor() {
		super();
		this.getlocal = this.getlocal.bind(this);
	}

	getlocal() {
		if (navigator.geolocation) {
			return /*window.*/ navigator.geolocation.getCurrentPosition(
				position => {
					let lat = position.coords.latitude;
					let longi = position.coords.longitude;
					let accu = position.coords.accuracy;
					let altitude = position.coords.altitude;
					let speed = position.coords.speed;
					let timeStamp = position.timestamp;
					let altAccu = position.coords.altitudeAccuracy;

					console.log(`latitude: ${lat}, longitude: ${longi},
            accuracy: ${accu}, altitude: ${altitude}, speed: ${speed},
            timestamp: ${timeStamp}, altitudeacccuracy: ${altAccu}`);
				},
				() => alert(`couldn't get location`)
			);
		}

		alert(`your browser doesn't support this`);
	}

	render() {
		this.getlocal();
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<header className="App-header" />
						<Route exact path="/" component={Home} />
						<Route exact path="/test" component={Test} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
