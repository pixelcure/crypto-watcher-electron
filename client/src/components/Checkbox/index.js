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
			checked : props.checked,
			value : props.checked,
			onChange : props.onChange
		}
	}

	handleChange(e) {
		this.setState({
			value : e.currentTarget.value,
			checked : e.currentTarget.checked
		})
		this.props.onChange(e);
	}

	render() {
		return(
			<fieldset>						
				<input 
					type="checkbox" 
					id={this.props.name} 
					name={this.props.name} 
					checked={this.state.checked}
					value={this.state.checked}
					onChange={this.handleChange.bind(this)}
				/>
				<label htmlFor={this.props.name}>
					{ this.props.label }
				</label>
			</fieldset>
		);
	}

}



export default Checkbox;