import React, { Component } from 'react';
import Works from './Works';


class Portfolio extends Component {

	render() {
		return (
			<div id="portfolio">
				<h2> Portfolio </h2>
				<Works {...this.props} />
			</div>

		);
	}


}

export default Portfolio;