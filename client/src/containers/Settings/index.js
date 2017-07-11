  //////////////////////////////////////////////////
 // SETTINGS CONTAINER ////////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { connect } from 'react-redux';



// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		fetchSettings : () => {
			return () => {
				dispatch({type : 'FETCH_SETTINGS'})
			}
		}
	}
}

// mapStateToProps
const mapStateToProps = (state) => ({
	settings : state.settings.settings
})

// <Settings /> Container
class Settings extends Component {

	componentDidMount() {
		this.props.fetchSettings()();
	}

	fetching() {
		return (
			<div className="settings__loading">
				LOADING...
			</div>
		);
	}

	render() {
		return(
			<section className="settings">
				Settings 
	 	 	</section>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Settings);