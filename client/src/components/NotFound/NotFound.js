  ///////////////////////////////////////////////////
 // NOTFOUND COMPONENT /////////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';

// CSS
import './NotFound.css';

// Link
import { Link } from 'react-router-dom';



// <NotFound /> Component
class NotFound extends Component {
	render() {
		return (
			<div>
				<h1>The page your are looking for cannot be found.</h1>
				<p>Please go <Link to="/" title="Home">home</Link> and try again.</p>
			</div>
		);
	};
};



export default NotFound;