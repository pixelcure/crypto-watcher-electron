  //////////////////////////////////////////////////
 // CRYPTO PRICE CARD CONTAINER ///////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as mapDispatchToProps from '../../actions/priceCardActions';



// <PriceCard /> Container
function PriceCard(EnhancedComponent) {

	// PriceCard Enhanced Component
	class PriceCard extends Component {
		render() {
			return <EnhancedComponent {...this.props} />;
		}
	}
	
	// mapStateToProps
	const mapStateToProps = (state) => ({
		price : state.priceCard.price,
		priceCards : state.priceCard.priceCards,
		fetched : state.priceCard.fetched,
		fetching : state.priceCard.fetching,
		currency : state.priceCard.currency,
		symbol : state.priceCard.symbol,
		lastUpdate : state.priceCard.lastUpdate,
		conversion : state.priceCard.conversion,
		error : state.priceCard.error,
		settings : state.settings.settings
	})

	// Connect HOC passing in PriceCard
	return connect(mapStateToProps, mapDispatchToProps)(PriceCard);
	
}



export default PriceCard;