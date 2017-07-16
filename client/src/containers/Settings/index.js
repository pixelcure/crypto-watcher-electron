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
// class Settings extends Component {

// 	render() {
// 		return(
// 			<section className="settings">
// 				<wrappedComponent {...this.props} />
// 	 	 	</section>
// 		);
// 	}
// }

const Settings = WrappedComponent => class extends Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);