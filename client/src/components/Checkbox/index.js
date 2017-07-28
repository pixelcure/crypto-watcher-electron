  //////////////////////////////////////////////
 // CHECKBOX COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <Checkbox /> Component
class Checkbox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked : props.checked
		}
	}

	render() {
		return(
			<fieldset>						
				<input 
					type="checkbox" 
					id={this.props.name} 
					name={this.props.name} 
					checked={this.props.checked}
					onChange={this.props.onChange}
				/>
				<label htmlFor={this.props.name}>
					{ this.props.label }
				</label>
			</fieldset>
		);
	}
}



export default Checkbox;