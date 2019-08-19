import React, { Component } from 'react';

class Footer extends Component {


	render() {
		return (

			<div id="footer">
				<div>
					<a rel="noopener noreferrer" href="https://www.instagram.com/kazu27bsk/" target="_blank" className="instagram"> </a>
					<a rel="noopener noreferrer" href="https://www.facebook.com/toshikazu.horioka.906" target="_blank" className="facebook"> </a>
					<a rel="noopener noreferrer" href="https://twitter.com/kazuh65387832" target="_blank" className="twitter"> </a>
					<a rel="noopener noreferrer" href="https://www.linkedin.com/in/toshikazu-horioka-31785b167/" target="_blank" className="linkedin"> </a>
					<a rel="noopener noreferrer" href="https://github.com/ToshikazuKato" target="_blank" className="github"> </a>
				</div>
				<a href="mailto:toshikazu@gmail.com"><p className='bold'>toshikazu@gmail.com</p></a>
			</div>

		);
	}


}

export default Footer;