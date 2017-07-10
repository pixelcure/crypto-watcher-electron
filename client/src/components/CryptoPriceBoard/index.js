  //////////////////////////////////////////////
 // CRYPTO PRICE BOARD COMPONENT //////////////
//////////////////////////////////////////////

// Dependencies
import React, { Component } from 'react';

// CSS
import './CryptoPriceBoard.css';

// CryptoCard Container
import CryptoCard from '../../containers/CryptoCard';



// <CryptoPriceBoard /> Component
class CryptoPriceBoard extends Component {
	render() {
		return(
			<div>
				<CryptoCard />
	 	 	</div>

		);
	}
}



export default CryptoPriceBoard;