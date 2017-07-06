  //////////////////////////////////////////////
 // COST COMPONENT ////////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// CSS
import './Cost.css';

// Containers
import CostFetching from '../../containers/CostFetching/CostFetching';



// <Cost /> Component
class Cost extends Component {
	render() {
		return(
			<div>
				<CostFetching />
	 	 	</div>

		);
	}
}



export default Cost;