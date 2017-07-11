  //////////////////////////////////////////////
 // APP INFO COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';

// CSS
import './AppInfo.css';



// <AppInfo /> Element
const AppInfo = () => {
	return(
		<section className="app-info">
			<p>
				Data and information is supplied by:
				<strong>
					<a href="https://cryptocompare.com" rel="noopener noreferrer" title="Crypto Compare" target="_blank">
						CryptoCompare.com
					</a>
				</strong>
			</p>
			<p>
				Created with ❤︎ in NYC
			</p>
		</section>
	);
}



export default AppInfo;