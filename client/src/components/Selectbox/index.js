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
			value : this.props.options.find(val => val.enabled ? true : false),
			onChange : props.onChange
		}
	}

	handleChange(e) {
		let intervalOption = this.props.options.find(val => val.interval === parseInt(e.currentTarget.value, 10) ? true : false)
		this.setState({ value : intervalOption });
		this.state.onChange(intervalOption)
	}
	
	render() {
		return(
			<fieldset className={this.props.cssClass}>
				<select value={this.state.value.interval} name={this.props.name} id={this.props.name} onChange={this.handleChange.bind(this)}>
					{ this.props.options.map((val, i) => <option key={i} value={val.interval}>{ val.label } </option>) }
				</select>
			</fieldset>
		);
	}

}



export default Selectbox;