import React,{Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
class Header extends Component {


	render(){
		return (

<header id='header' className='header'>
	<nav className='navigation'>
		<div className='navigation__item'>
			<Link to='/' className='navigation__link navigation__link-main'>
				Toshikazu, H
			</Link>
		</div>
		{/* <div className='navigation__item'>
			<NavLink to='/portfolio' className='navigation__link'>Projets</NavLink>
		</div> */}
		<div className='navigation__item'>
			<NavLink to='/me' className='navigation__link'>About</NavLink>
		</div>
	</nav>
</header>

		);
	}


}

export default Header;
