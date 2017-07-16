  //////////////////////////////////////////////
 // BOARD OPTIONS COMPONENT ///////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// CSS
import './BoardOptions.css';

// Components
import AppInfo from '../AppInfo/';

// Settings Container
import Settings from '../../containers/Settings';



// <BoardOptions /> Component
class BoardOptions extends Component {
	render() {
		return(
			<section className="board-options">
				<h1>Price Board Options</h1>
				<AppInfo />
	 	 	</section>

		);
	}
}



export default BoardOptions;