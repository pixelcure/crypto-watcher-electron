  //////////////////////////////////////////////
 // CARD DETAIL COMPONENT /////////////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';



// <CardDetail /> Element
class CardDetail extends Component {

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

	render() {
		return(
			<section className="card-detail">
				{ this.renderCurrencyTitle() }
				{ this.renderPrice() }
			</section>
		);
	}
}



export default CardDetail;