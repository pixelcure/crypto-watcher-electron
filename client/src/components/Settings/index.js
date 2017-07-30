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

	componentWillMount() {
		this.props.fetchOptions()
	}
	
	handleChange(e) {
		console.log(e);
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
							checked={this.props.options.tickerOn}
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

	// Available Currency Conversions
	renderOptions(options, outerCssClass, listCssClass, label) {
		return(
			<div className={outerCssClass}>
				<h3>{label}</h3>
				<ul className={listCssClass}>
					{ options.map((val, i) => 
						<li key={i}>
							<Checkbox
								label={val.label}
								name={val.name}
								checked={val.enabled}
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
						{ this.props.options ? this.renderOptions(this.props.options.currencies, 'available-currencies third', 'currencies', 'Currencies') : '' }
						{ this.props.options ? this.renderOptions(this.props.options.conversions, 'available-conversions third', 'conversions', 'Conversions') : '' }
						{ this.props.options ? this.renderTickerOptions() : '' }
					</div>
					{ this.props.options ? this.renderOptions(this.props.options.detailOptions, 'extra-available-details', 'view-options', 'Details') : '' }
				</form>
			</section>
		);
	}

}



export default Settings;