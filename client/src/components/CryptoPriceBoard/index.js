  //////////////////////////////////////////////
 // CRYPTO PRICE BOARD COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// CSS
import './CryptoPriceBoard.css';
// Components
import PriceCard from '../PriceCard';

// CryptoPriceCard HOC
import CryptoPriceCard from '../../hocs/CryptoPriceCard';

// Price Card
const CryptoPriceCardContainer = CryptoPriceCard(PriceCard)

// <CryptoPriceBoard /> Component
class CryptoPriceBoard extends Component {
	render() {
		return(
			<CryptoPriceCardContainer />
		);
	}
}



export default CryptoPriceBoard;