  //////////////////////////////////////////////////
 // COST FETCHING HOC /////////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Action Creators
import { fetchCost } from '../../actions/cryptoCurrencyActions'



// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		fetchCost
	}
}

// mapStateToProps
const mapStateToProps = (state) =>  {
	return {
		cryptoCurrency : state.cryptoCurrency
	};
}

// <CostFetch /> Container
class CostFetch extends Component {
	render() {
		return(
			<div>
				<h1>Litecoin:</h1>
				<button onClick={this.props.fetchCost('LTC','USD,EUR')}>
					Fetch
				</button>
	 	 	</div>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(CostFetch);