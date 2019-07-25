import React,{Component} from 'react';
import {NavLink, Link} from 'react-router-dom';
class Header extends Component {


	render(){
		return(
			<header id="header">
				<Link to="/"><h2>Toshikazu, H</h2></Link>
				<nav>
					<NavLink to="/portfolio" className='bold'>Portfolio</NavLink>
					<NavLink to="/me" >Me</NavLink>
				</nav>
			</header>
		);
	}


}

export default Header;
