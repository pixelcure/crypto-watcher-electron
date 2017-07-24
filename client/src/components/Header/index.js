  //////////////////////////////////////////////
 // HEADER ELEMENT ////////////////////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Nav from '../Nav';

// CSS
import './Header.css';



// <Header /> Element
const Header = () => {
	return(
		<header>
			<Link to="/" title="thecryptocurrency.observer">
				<h1 className="logo">the<strong>cryptocurrency</strong>.observer</h1>
			</Link>
			<Nav />
		</header>
	);
}



export default Header;