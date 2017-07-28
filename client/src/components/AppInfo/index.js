  //////////////////////////////////////////////
 // APP INFO COMPONENT ////////////////////////
//////////////////////////////////////////////

// Dependencies
import React from 'react';



// <AppInfo /> Element
const AppInfo = () => {
	return(
		<section className="app-info">
			<p>
				Data & information is provided by&nbsp;
				<strong>
					<a href="https://cryptocompare.com" rel="noopener noreferrer" title="Crypto Compare" target="_blank">
						CryptoCompare.com
					</a>
				</strong>
			</p>
			<small>
				<a href="https://github.com/pixelcure/crypto-watcher-electron" rel="noopener noreferrer" title="PixelCure" target="_blank">
					PixelCure
				</a> |&nbsp;
				Created with ❤︎ in NYC
			</small>
		</section>
	);
}



export default AppInfo;