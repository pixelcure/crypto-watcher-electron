  //////////////////////////////////////////////
 // PRICECARD DETAILS COMPONENT ///////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';

// Components
import CardDetail from '../CardDetail';



// <PriceCardDetails /> Element
const PriceCardDetails = props => {
	return(
		<section className="pricecard-details">
			{ props.priceCards.map((value, key) => <CardDetail {...value} key={key} conversion={props.conversion} />) }
		</section>
	);
}



export default PriceCardDetails;