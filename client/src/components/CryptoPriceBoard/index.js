  //////////////////////////////////////////////
 // CRYPTO PRICE BOARD COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

// CSS
import './CryptoPriceBoard.css';

// Actions
import * as mapDispatchToProps from '../../actions/priceCardActions';

// Components
import PriceCardDetails from '../PriceCardDetails';

// PriceCard HOC
import PriceCard from '../../hocs/PriceCard';

// Enhanced Price Card Details
const EnhancedPriceCardDetails = PriceCard(PriceCardDetails);

// mapStateToProps
const mapStateToProps = (state) => ({
	priceCards : state.priceCard.priceCards,
	settings : state.settings.settings
})

// <CryptoPriceBoard /> Component
class CryptoPriceBoard extends Component {
	
	componentWillMount() {
		this.props.fetchSettings();
	}
	
	componentDidMount() {

	}

	fetching() {
		return (
			<div className="loading">
				<span className="icon icon-loading"></span>
			</div>
		);
	}

	renderError() {
		return (
			<strong className="error">
				{ this.props.error }
			</strong>
		);
	}

	refreshBoard() {
		// Currencies String
		let currencies = this.props.settings.currencies.toString()
		// Currency Conversion
		let conversion = this.props.settings.conversion
		return(
			<button 
				title="Refresh Board" 
				className="refresh-board"
				onClick={() => this.props.fetchCost(currencies, conversion)}
			>
				<span className="icon icon-refresh"></span>
			</button>
		);
	}

	render() {
		return(
			<div className="price-board">
				{ this.props.settings ? this.refreshBoard() : '' }
				{ this.props.fetching ? this.fetching() : '' }
				{ this.props.error ? this.renderError() : '' }
				{ this.props.priceCards ? <EnhancedPriceCardDetails /> : '' }
			</div>
		);
	}
}



// Export CryptoPriceBoard Container
export default connect(mapStateToProps, mapDispatchToProps)(CryptoPriceBoard);