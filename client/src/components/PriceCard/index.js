  //////////////////////////////////////////////
 // PRICECARD COMPONENT ///////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <PriceCard /> Component
class PriceCard extends Component {

	componentWillMount() {
		this.fetchInterval(1000);
	}

	fetchInterval(delay) {
		setInterval(this.props.fetchCost('LTC', 'USD'), delay)
	}

	// renderCurrencyTitle() {
	// 	return (
	// 		<div className="currency">
	// 			<div className="cell symbol-outer">
	// 				<h2 className="symbol">{ this.props.symbol }</h2>
	// 			</div>
	// 			<h1 className="cell crypto">{ this.props.currency }</h1>
	// 		</div>
	// 	);
	// }

	// renderPrice() {
	// 	return (
	// 		<div className="conversion">
	// 			<div className="currency">
	// 				<span className={`icon icon-coin-${this.props.conversion.toLowerCase()}`}></span>
	// 				<span className="price-text">{ this.props.price.replace(/[$€]/ig, '') }</span>
	// 				<span className="last-update"><b>Last Update &mdash; </b> { this.props.lastUpdate }</span>
	// 			</div>
	// 			{ this.renderExtraDetails() }
	// 		</div>
	// 	);
	// }

	// renderExtraDetails() {
	// 	return (
	// 		<ul className="details">
	// 			<li className="item">
	// 				<span>Last Update </span>
	// 				{ this.props.lastUpdate }
	// 			</li>
	// 		</ul>
	// 	);
	// }

	// fetching() {
	// 	return (
	// 		<div className="loading">
	// 			<span className="icon icon-loading"></span>
	// 		</div>
	// 	);
	// }

	// renderError() {
	// 	return (
	// 		<strong className="error">
	// 			{ this.props.error }
	// 		</strong>
	// 	);
	// }

	render() {
		return(
			<section className="price-card">
			Price Card
	 	 	</section>
		);
	}

}



export default PriceCard;