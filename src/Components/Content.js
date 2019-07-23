import React, { Component } from 'react';
import Works from './Works';
import Intro from './Intro';
import Header from './Header';

class Content extends Component {


	render() {
		return (
			<div id="content">
				<Intro />
				<Header />
				<h2> Portfolio </h2>
				<Works />
			</div>

		);
	}


}

export default Content;