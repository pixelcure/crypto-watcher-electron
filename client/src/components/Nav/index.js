  //////////////////////////////////////////////
 // NAV ELEMENT ///////////////////////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import './Nav.css';



// <Nav /> Element
const Nav = () => {
	return(
		<nav>
			<ul className="list">
				<li className="list__clean">
					<NavLink exact title="Price Board" activeClassName="active" to="/">
						<span className="icon icon-stats"></span>
					</NavLink>
				</li>
				<li className="list__clean">
					<NavLink title="Board Options" activeClassName="active" to="/options">
						<span className="icon icon-settings"></span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}



export default Nav;