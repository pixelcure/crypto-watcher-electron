  //////////////////////////////////////////////
 // SETTINGS COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Checkbox from '../Checkbox';
import Selectbox from '../Selectbox';

// <Settings /> Component
class Settings extends Component {

	constructor(props) {
		super(props)
		this.props.fetchOptions()
	}

	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	
	handleChange() {

	}

	// Available Currencies
	renderAvailableCurrencies() {
		return(
			<div className="available-currencies third">
				<h3>Currencies</h3>
				<ul className="currencies">
					{ this.props.options.currencies.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val.name}
								name={val.currency}
								checked={val.enabled}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
				</ul>
			</div>
		);	
	}

	// Available Currency Conversions
	renderAvailableConversions() {
		return(
			<div className="available-conversions third">
				<h3>Conversions</h3>
				<ul className="conversions">
					{ this.props.options.conversions.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val.name}
								name={val.currency}
								checked={val.eneabled}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
				</ul>
			</div>
		);
	}

	// Render Ticker Options
	renderTickerOptions() {
		return(
			<div className="ticker third">
				<h3>Auto refresh</h3>
				<ul className="ticker-interval">
					<li>
						<Checkbox
							label="Auto refresh"
							name="ticker"
							checked={this.props.options.ticker}
							onChange={this.handleChange.bind(this)}
						/>
					</li>
					<li>
						<Selectbox 
							options={this.props.options.tickerIntervals}
							name="tickerInterval"
							cssClass="ticker-interval"
							onChange={this.handleChange.bind(this)}
						/>
					</li>
				</ul>
			</div>
		);
	}

	// Available Details
	renderAvailableDetails() {
		return(
			<div className="extra-available-details">
				<h3>Details</h3>
				<ul className="view-options">
					{ this.props.options.detailOptions.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val.detailTitle}
								name={val.detailKey}
								checked={val.detailVisible}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
				</ul>
			</div>
		);	
	}

	// Component Render
	render() {
		return(
			<section className="settings">
				<form>
					<div className="board-setup">
						{ this.props.options ? this.renderAvailableCurrencies() : '' }
						{ this.props.options ? this.renderAvailableConversions() : '' }
						{ this.props.options ? this.renderTickerOptions() : '' }
					</div>
					{ this.props.options ? this.renderAvailableDetails() : '' }
				</form>
			</section>
		);
	}

}



export default Settings;