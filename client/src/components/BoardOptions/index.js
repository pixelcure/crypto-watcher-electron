  //////////////////////////////////////////////
 // BOARD OPTIONS COMPONENT ///////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// CSS
import './BoardOptions.css';

// Components
import AppInfo from '../AppInfo/';
import Settings from '../Settings';

// Settings HOC
import SettingsHOC from '../../hocs/Settings';


// Create ehanched Settings Component
const EnhancedSettings = SettingsHOC(Settings);

// <BoardOptions /> Component
class BoardOptions extends Component {
	render() {
		return(
			<section className="board-options">
				<h1>Board Options</h1>
				<EnhancedSettings />
				<AppInfo />
	 	 	</section>

		);
	}
}



export default BoardOptions;