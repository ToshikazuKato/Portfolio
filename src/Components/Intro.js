import React, {Component} from 'react';
import Canvas from './Canvas';

class Intro extends Component {

	render(){
		return (
			<div id='intro'>
				<Canvas />
				<div className='content'>
					<h1 className='heading-primary'>Toshikazu Horioka</h1>
					<p className='content__paragraph'>
						Fullstack Engineer, Japan
					</p>
				</div>
			</div>
		);
	};
};

export default Intro;