import React, { Component } from 'react';
import Works from './Works';

class Portfolio extends Component {

	render() {
		return (
			<div id='portfolio'>
				<div className='portfolio'>
					<h1 className='heading-primary'> Projects </h1>
					<Works {...this.props} />
				</div>
			</div>
		);
	}


}

export default Portfolio;