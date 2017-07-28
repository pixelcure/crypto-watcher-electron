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
import Checkbox from '../Checkbox';

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
	
	constructor(props) {
		super(props);
		// Fetch board settings
		this.props.fetchSettings()
	}

	componentWillMount() {
		if(this.props.settings){
			// Currencies String
			let currencies = this.props.settings.currencies.toString()
			// Currency Conversion
			let conversion = this.props.settings.conversion
			this.props.fetchCost(currencies, conversion)
		}
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

	handleTickerToggle(e) {
		let newSettings = {...this.props.settings, ticker : e.currentTarget.checked }
		this.props.saveSettings(newSettings)
	}

	renderDashboard() {
		// Currencies String
		let currencies = this.props.settings.currencies.toString()
		// Currency Conversion
		let conversion = this.props.settings.conversion
		return(
			<ul className="dashboard">
				<li className="toggle-feed">
					<form>
						<Checkbox
							onChange={this.handleTickerToggle.bind(this)}
							checked={this.props.settings.ticker}
							name="ticker"
							label="Auto Refresh"
						/>
					</form>
				</li>
				<li className="refresh-feed">
					<button 
						title="Refresh Board" 
						className="refresh-board"
						onClick={() => this.props.fetchCost(currencies, conversion)}
					>
						<span className="icon icon-refresh"></span>
					</button>
				</li>
			</ul>
		);
	}

	render() {
		return(
			<div className="price-board">
				{ this.props.settings ? this.renderDashboard() : '' }
				{ this.props.fetching ? this.fetching() : '' }
				{ this.props.error ? this.renderError() : '' }
				{ this.props.priceCards ? <EnhancedPriceCardDetails /> : '' }
			</div>
		);
	}
}



// Export CryptoPriceBoard Container
export default connect(mapStateToProps, mapDispatchToProps)(CryptoPriceBoard);