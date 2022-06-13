import React, {Component} from 'react';
import Canvas from './Canvas';

class Intro extends Component {

	render(){
		return (
			<div id='intro'>
				<Canvas />
<<<<<<< HEAD
				<div className='content'>
					<h1 className='heading-primary'>Toshikazu Horioka</h1>
					<p className='content__paragraph'>
						Fullstack Engineer, Japan
					</p>
=======
				<div>
					<h2>Toshikazu Horioka</h2>
					<p>I'm a Japanese Fullstack Engineer based in Tokyo.</p>
					<p>I build webservices that make the world better</p>
					<p> and help people live better.</p>
>>>>>>> develop
				</div>
			</div>
		);
	};
};

export default Intro;