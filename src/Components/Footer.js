import React, { Component } from 'react';

class Footer extends Component {


	render() {
		return (
			<div id='footer'>
				<div className='footer'>
					<div className='footer__link-box'>
						<a
							rel='noopener noreferrer'
							href='https://www.instagram.com/kazu27bsk/'
							target='_blank'
							className='footer__link instagram'
						>
							{' '}
						</a>
					</div>
					<div className='footer__link-box'>
						<a
							rel='noopener noreferrer'
							href='https://www.facebook.com/toshikazu.horioka.906'
							target='_blank'
							className='footer__link facebook'
						>
							{' '}
						</a>
					</div>
					<div className='footer__link-box'>
						<a
							rel='noopener noreferrer'
							href='https://www.linkedin.com/in/toshikazu-horioka-31785b167/'
							target='_blank'
							className='footer__link linkedin'
						>
							{' '}
						</a>
					</div>
					<div className='footer__link-box'>
						<a
							rel='noopener noreferrer'
							href='https://github.com/ToshikazuKato'
							target='_blank'
							className='footer__link github'
						>
							{' '}
						</a>
					</div>
					<div className='footer__link-box'>
						<a
							href='mailto:toshikazu.horioka@gmail.com'
							className='footer__link'
						>
							toshikazu.horioka@gmail.com
						</a>
					</div>
				</div>
			</div>
		);
	}


}

export default Footer;