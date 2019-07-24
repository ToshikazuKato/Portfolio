import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {


	render(){
		return(
			<header id="header">
				<h2>Toshikazu, H</h2>
				<nav>
					<NavLink to="/portfolio" className='bold'>Portfolio</NavLink>
					<NavLink to="/me" >Me</NavLink>
				</nav>
			</header>
		);
	}


}

export default Header;
