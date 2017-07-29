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
			selected : props.selected
		}
	}

	render() {
		return(
			<fieldset className={this.props.cssClass}>
				<select name={this.props.name} id={this.props.name} onChange={this.props.onChange}>
					{ this.props.options.map((val, i) => <option key={i} value={val.interval} selected={val.enabled}>{ val.label } </option>) }
				</select>
			</fieldset>
		);
	}

}



export default Selectbox;