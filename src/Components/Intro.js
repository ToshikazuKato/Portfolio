import React, {Component} from 'react';
import Canvas from './Canvas';

class Intro extends Component {

	render(){
		return(
			<div id="intro">
				<Canvas />
				<div>
					<h2>Toshikazu Horioka</h2>
					<p>I'm a Japanese Fullstack Engineer based in Tokyo.</p>
					<p>I build webservices that make the world better</p>
					<p>and help people help live better.</p>
				</div>
			</div>
		);
	};
};

export default Intro;