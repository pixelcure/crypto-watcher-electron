  //////////////////////////////////////////////
 // PRICE BOAR DASHBOARD ELEMENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// Components
import Checkbox from '../Checkbox';

// CSS
import './PriceBoardDashboard.css';



// <PriceBoardDashboard /> Element
class PriceBoardDashboard extends Component {

	constructor(props) {
		super(props);

		// Local state for currencies and conversion, and ticker on/off, interval
		this.state = {
			currencies : props.settings.currencies.map((val) => val.name).toString(),
			conversion : props.settings.conversions.find((val) => val.enabled ).name,
			tickerOn : props.settings.tickerOn,
			tickerInterval : props.settings.ticker.interval
		}

		// bind - tickerToggle
		this.tickerToggle = this.tickerToggle.bind(this)
		
		// fetch cost
		this.props.fetchCost(this.state.currencies, this.state.conversion)
		// if tickerOn, start interval
		if(this.state.tickerOn) this.tickerToggle()

	}

	handleTickerToggle(e) {
		// Toggle value
		let checked = e.currentTarget.checked;
		// Set new settings, updating tickerOn status
		const newSettings = {...this.props.settings, tickerOn : checked }
		// If unchecked/false, turnoff pricer ticker, otherwise true, turn it on
		!checked ? window.clearTimeout(this.ticker) : this.tickerToggle()
		// Update Local state
		this.setState({ tickerOn : checked })
		// Dispatch new settings
		this.props.saveSettings(newSettings)
	}

	componentWillUnmount() {
		// Stop Ticker
		window.clearTimeout(this.ticker)
	}

	tickerToggle() {
		// Required assignments
		const { currencies, conversion, tickerInterval } = this.state
		// Create Ticker Interval
		this.ticker = setInterval(() => this.props.fetchCost(currencies, conversion), tickerInterval)
	}

	render() {
		return(
			<ul className="dashboard">
				<li className="toggle-feed">
					<form>
						<Checkbox
							onChange={this.handleTickerToggle.bind(this)}
							checked={this.props.settings.tickerOn}
							name="ticker"
							label="Auto Refresh"
						/>
					</form>
				</li>
				<li className="refresh-feed">
					<button 
						title="Refresh Board" 
						className="refresh-board"
						onClick={() => this.props.fetchCost(this.state.currencies, this.state.conversion)}
					>
						<span className="icon icon-refresh"></span>
					</button>
				</li>
			</ul>
		);
	}
}



export default PriceBoardDashboard;