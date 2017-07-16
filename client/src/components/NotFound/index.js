  ///////////////////////////////////////////////////
 // NOTFOUND COMPONENT /////////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';

// Link
import { Link } from 'react-router-dom';



// <NotFound /> Component
class NotFound extends Component {
	render() {
		return (
			<section>
				<h1>404 Error</h1>
				<Link to="/" title="Home">Home</Link>
			</section>
		);
	};
};



export default NotFound;