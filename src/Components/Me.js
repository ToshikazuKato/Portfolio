import React, { Component } from 'react';
import About from './About';
import Header from './Header';

class Me extends Component {

	render() {
		return (
			<div id="content">
				<Header />
				<About />
				<h2> Me </h2>
			</div>

		);
	}


}

export default Me;