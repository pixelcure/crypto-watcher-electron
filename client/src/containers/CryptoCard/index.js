  //////////////////////////////////////////////////
 // CRYPTO CARD CONTAINER /////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';



// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
	return {
		fetchCost : (currency, conversion) => {
			return () => {
				// Dispatch FETCH_COST action
				dispatch({
					type : 'FETCH_COST',
					currency,
					conversion
				});
				// Fetch Cost
				fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currency}&tsyms=${conversion}&e=Coinbase`)
				.then((res) => (res.json()))
				.then((res) => {
					// Dispatch FETCH_COST_FULFILLED
					dispatch({
						type : 'FETCH_COST_FULFILLED',
						payload : res.DISPLAY
					})
				})
				.catch((err) => {
					// Dispatch FETCH_COST_REJECTED
					dispatch({
						type : 'FETCH_COST_REJECTED',
						payload : err
					})
				})
			};
		}
	};
}

// mapStateToProps
const mapStateToProps = (state) => ({
	price : state.cryptoCard.price,
	fetched : state.cryptoCard.fetched,
	fetching : state.cryptoCard.fetching,
	currency : state.cryptoCard.currency,
	symbol : state.cryptoCard.symbol,
	lastUpdate : state.cryptoCard.lastUpdate,
	conversion : state.cryptoCard.conversion,
	error : state.cryptoCard.error,
	settings : state.settings.settings
})

// <CryptoCard /> Container
class CryptoCard extends Component {

	componentDidMount() {
		// Fetch Cost
		(this.props.fetchCost('BTC', 'EUR')())
		// Start Interval
		this.fetchInterval(10000)
	}

	fetchInterval(delay) {
		setInterval(this.props.fetchCost('LTC', 'USD'), delay)
	}

	renderCurrencyTitle() {
		return (
			<div className="currency">
				<div className="cell symbol-outer">
					<h2 className="symbol">{ this.props.symbol }</h2>
				</div>
				<h1 className="cell crypto">{ this.props.currency }</h1>
			</div>
		);
	}

	renderPrice() {
		return (
			<div className="conversion">
				<div className="currency">
					<span className={`icon icon-coin-${this.props.conversion.toLowerCase()}`}></span>
					<span className="price-text">{ this.props.price.replace(/[$€]/ig, '') }</span>
					<span className="last-update"><b>Last Update &mdash; </b> { this.props.lastUpdate }</span>
				</div>
				{ this.renderExtraDetails() }
			</div>
		);
	}

	renderExtraDetails() {
		return (
			<ul className="details">
				<li className="item">
					<span>Last Update </span>
					{ this.props.lastUpdate }
				</li>
			</ul>
		);
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

	render() {
		return(
			<section className="crypto-card">
				{ this.props.fetched ? this.renderCurrencyTitle() : null}
				{ this.props.fetched ? this.renderPrice() : null }
				{ this.props.fetching ? this.fetching() : null }
				{ this.props.error !== undefined ? this.renderError() : null }
	 	 	</section>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(CryptoCard);