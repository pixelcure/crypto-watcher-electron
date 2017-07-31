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

	handleChange(e) {
		this.setState({
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
					value={this.props.value}
					onChange={this.handleChange.bind(this)}
				/>
				<label className={this.state.checked ? 'checked' : ''} htmlFor={this.props.name}>
					{ this.props.label }
				</label>
			</fieldset>
		);
	}

}



export default Checkbox;