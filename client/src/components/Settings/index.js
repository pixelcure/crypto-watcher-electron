  //////////////////////////////////////////////
 // SETTINGS COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Checkbox from '../Checkbox';

// <Settings /> Component
class Settings extends Component {

	constructor(props) {
		super(props)
		this.props.fetchOptions()
	}

	handleChange() {

	}

	// Available Currency Conversions
	renderAvailableConversions() {
		return(
			<div className="available-conversions half">
				<h3>Conversions</h3>
				<ul className="conversions">
					{ this.props.options.conversions.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val}
								name={val}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
				</ul>
			</div>
		);
	}

	renderTickerOptions() {
		return(
			<div className="ticker half">
				<h3>Auto refresh</h3>
				<ul className="ticker-interval">
					<li>
						<Checkbox
							label="Auto refresh"
							name="ticker"
							checked={this.props.settings.ticker}
							onChange={this.handleChange.bind(this)}
						/>
					</li>
					<li>
						<fieldset>
							<select name="tickerInterval" id="tickerInterval">
								<option value="5000">5 seconds</option>
								<option value="10000">10 seconds</option>
								<option value="20000">20 seconds</option>
								<option value="30000">30 seconds</option>
								<option value="60000">1 minute</option>
								<option value="120000">2 minutes</option>
								<option value="180000">3 minutes</option>
								<option value="240000">4 minutes</option>
								<option value="300000">5 minutes</option>
								<option value="600000">10 minutes</option>
								<option value="900000">15 minutes</option>
							</select>
						</fieldset>
					</li>
				</ul>
			</div>
		);
	}

	// Available Currencies
	renderAvailableCurrencies() {
		return(
			<div className="available-currencies half">
				<h3>Currencies</h3>
				<ul className="currencies">
					{ this.props.options.currencies.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val}
								name={val}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
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
								key={i}
								label={val.detailTitle}
								name={val.detailKey}
								checked={val.detailVisible}
								data-visible={val.detailVisible}
								onChange={this.handleChange.bind(this)}
							/>
						</li>
					)}
				</ul>
			</div>
		);	
	}

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