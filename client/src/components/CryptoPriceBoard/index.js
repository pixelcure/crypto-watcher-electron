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
import PriceBoardDashboard from '../PriceBoardDashboard';

// PriceCard HOC
import PriceCard from '../../hocs/PriceCard';

// Enhanced Price Card Details
const EnhancedPriceCardDetails = PriceCard(PriceCardDetails)

// mapStateToProps
const mapStateToProps = (state) => ({
	priceCards : state.priceCard.priceCards,
	settings : state.settings.settings
})

// <CryptoPriceBoard /> Component
class CryptoPriceBoard extends Component {
	
	constructor(props) {
		super(props);

		// Local state for currencies and conversion
		this.state = {
			currencies : props.settings ? props.settings.currencies.map((val) => val.name).toString() : null,
			conversion : props.settings ? props.settings.conversions.find((val) => val.enabled ).name : null,
			ticker : props.settings ? props.settings.tickerOn : true
		}

		// Start cost fetch interval
		if (this.props.settings && this.state.ticker) {
			// Fetch Cost
			this.tickerMeter = setInterval(() => this.props.fetchCost(this.state.currencies, this.state.conversion), this.props.settings.ticker.interval)
		}

		// Fetch board settings
		this.props.fetchSettings()
	}

	componentWillMount() {
		if(this.props.settings){
			// Fetch Cost
			this.props.fetchCost(this.state.currencies, this.state.conversion)
		}
	}

	componentWillUnmount() {
		window.clearTimeout(this.tickerMeter)
	}

	renderError() {
		return (
			<strong className="error">{ this.props.error }</strong>
		);
	}

	handleTickerToggle(e) {
		let newSettings = {...this.props.settings, tickerOn : e.currentTarget.checked }
		this.props.saveSettings(newSettings)
	}

	render() {
		return(
			<div className="price-board">
				{ this.props.settings ? 
					<PriceBoardDashboard 
						onChange={this.handleTickerToggle.bind(this)}
						checked={this.props.settings.tickerOn}
						name="ticker"
						label="Auto Refresh"
						currencies={this.state.currencies}
						conversion={this.state.conversion}
						onClick={this.props.fetchCost}
					/> : '' }
				{ this.props.priceCards ? <EnhancedPriceCardDetails /> : '' }
				{ this.props.error ? this.renderError() : '' }
			</div>
		);
	}
}



// Export CryptoPriceBoard Container
export default connect(mapStateToProps, mapDispatchToProps)(CryptoPriceBoard);