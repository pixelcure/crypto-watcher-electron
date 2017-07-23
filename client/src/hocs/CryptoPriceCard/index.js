  //////////////////////////////////////////////////
 // CRYPTO PRICE CARD CONTAINER ///////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import * as mapDispatchToProps from '../../actions/cryptoCurrencyActions';



// <CryptoPriceCard /> Container
function CryptoPriceCard(EnhancedComponent) {

	// CryptoPriceCard Enhanced Component
	class CryptoPriceCard extends Component {
		render() {
			return <EnhancedComponent {...this.props} />;
		}
	}
	
	// mapStateToProps
	const mapStateToProps = (state) => ({
		price : state.cryptoCard.price,
		cards : state.cryptoCard.cards,
		fetched : state.cryptoCard.fetched,
		fetching : state.cryptoCard.fetching,
		currency : state.cryptoCard.currency,
		symbol : state.cryptoCard.symbol,
		lastUpdate : state.cryptoCard.lastUpdate,
		conversion : state.cryptoCard.conversion,
		error : state.cryptoCard.error,
		settings : state.settings.settings
	})

	// Connect HOC passing in CryptoPriceCard
	return connect(mapStateToProps, mapDispatchToProps)(CryptoPriceCard);
	
}



export default CryptoPriceCard;