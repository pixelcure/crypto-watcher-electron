  //////////////////////////////////////////////
 // NAV ELEMENT ///////////////////////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

// CSS
import './Nav.css';



// <Nav /> Element
const Nav = () => {
	return(
		<nav>
			<ul className="list">
				<li className="list__clean">
					<Link title="Price Board" to="/">
						<span className="icon icon-stats"></span>
					</Link>
				</li>
				<li className="list__clean">
					<Link title="Board Options" to="/settings">
						<span className="icon icon-settings"></span>
					</Link>
				</li>
			</ul>
		</nav>
	);
}



export default Nav;