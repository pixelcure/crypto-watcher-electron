  //////////////////////////////////////////////
 // SELECTBOX COMPONENT ///////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <Selectbox /> Component
class Selectbox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value : props.ticker,
			onChange : props.onChange
		}
	}

	handleChange(e) {
		// Find interval obj in settings
		let intervalOption = this.props.options.find(val => val.interval === parseInt(e.currentTarget.value, 10) ? true : false)
		// Update local state for controlled component
		this.setState({ value : intervalOption });
		// Enable interval, call parent onChange to save settings in state
		this.state.onChange({...intervalOption, enabled : true})
	}
	
	render() {
		return(
			<fieldset className={this.props.cssClass}>
				<select value={this.state.value.interval} name={this.props.interval} onChange={this.handleChange.bind(this)}>
					{ this.props.options.map((val, i) => <option key={i} value={val.interval}>{ val.label } </option>) }
				</select>
			</fieldset>
		);
	}

}



export default Selectbox;