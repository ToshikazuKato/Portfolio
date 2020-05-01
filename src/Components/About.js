import React, { Component } from 'react';
// import About from './About';
class About extends Component {

	render() {
		return (
			<div id='about'>
				<div className="about">
					<h1 className="heading-primary"> About </h1>
					<img className="about__photo" src='/images/me-x-small.jpg' alt='myself'></img>
					<h2 className="heading-secondary">Hi, I'm Toshikazu Horioka.</h2>
					<p className="about__paragraph">
						I am a fullstack engineer with skills in HTML, CSS, JavaScript, React, Node.js, PHP, MYSQL and so on.
						I build web services that make the world better and help people live better. I am passionate about building
						modern web design and providing an engaging user experience on all platforms.
					</p>
				</div>
				{/* <About /> */}
			</div>
		);
	}


}

export default About;