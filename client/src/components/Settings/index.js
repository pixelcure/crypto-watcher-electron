  //////////////////////////////////////////////
 // SETTINGS COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <Settings /> Component
class Settings extends Component {
	render() {
		return(
			<section className="settings">
				<ul>
					<li>
						<fieldset>
							<input type="radio" value="BTC" />
						</fieldset>
					</li>
					<li></li>
					<li></li>
				</ul>
			</section>
		);
	}
}



export default Settings;