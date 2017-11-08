import React, { Component } from "react";
//import logo from './logo.svg';
//import './Test.css';
import { Link } from "react-router-dom";

class Test extends Component {
	render() {
		return (
			<div>
				<h1>THIS IS THE TEST ROUTE</h1>
				<p>this is the test</p>
				<Link to={"/"}>go to the home page</Link>
			</div>
		);
	}
}

export default Test;
