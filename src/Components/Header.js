import React,{Component} from 'react';

class Header extends Component {


	render(){
		return(
			<header id="header">
				<h2>Toshikazu, H</h2>
				<nav>
					<a href="#" className='bold'>Portfolio</a>
					<a href="#" >Me</a>
				</nav>
			</header>
		);
	}


}

export default Header;