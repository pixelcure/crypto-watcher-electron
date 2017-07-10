  //////////////////////////////////////////////////
 // CRYPTO CARD CONTAINER /////////////////////////
//////////////////////////////////////////////////

// Deps
import React, { Component } from 'react';
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
	marketCap : state.cryptoCard.marketCap,
	conversion : state.cryptoCard.conversion,
	error : state.cryptoCard.error
})

// <CryptoCard /> Container
class CryptoCard extends Component {

	componentDidMount() {
		// Fetch Cost
		(this.props.fetchCost('LTC', 'USD')())
		// Start Interval
		this.fetchInterval(10000)
	}

	fetchInterval(delay) {
		setInterval(this.props.fetchCost('LTC', 'USD'), delay)
	}

	renderCurrencyTitle() {
		return (
			<header className="crypto-card__title title">
				<h1 className="title__currency">{ this.props.currency }</h1>
				<h2 className="title__symbol">{ this.props.symbol }</h2>
			</header>
		);
	}

	renderPrice() {
		return (
			<strong className="crypto-card__price">
				{ this.props.price }
			</strong>
		);
	}

	renderExtraDetails() {
		return (
			<ul className="crypto-card__extra-details details">
				<li className="details__item">
					<span>Market Cap</span>
					{ this.props.marketCap }
				</li>
			</ul>
		);
	}

	fetching() {
		return (
			<div className="crypto-card__loading">
				LOADING...
			</div>
		);
	}

	renderError() {
		return (
			<strong className="crypto-card__error">
				{ this.props.error }
			</strong>
		);
	}

	render() {
		return(
			<section className="crypto-card">
				{ this.props.fetched ? this.renderCurrencyTitle() : null}
				{ this.props.fetched ? this.renderPrice() : null }
				{ this.props.fetched ? this.renderExtraDetails() : null }
				{ this.props.fetching ? this.fetching() : null }
				{ this.props.error !== undefined ? this.renderError() : null }
	 	 	</section>
		);
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(CryptoCard);