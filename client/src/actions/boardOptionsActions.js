  //////////////////////////////////////////////
 // BOARD OPTIONS ACTION CREATORS /////////////
//////////////////////////////////////////////



// Action to change/update available stats and conversions/cryptocurrencies
export function fetchSettings (){
	return (dispatch) => {
		dispatch({type : 'FETCH_SETTINGS'})
	};
}

// Action to fetch default settings
export function fetchOptions (){
	return (dispatch) => {
		dispatch({type : 'FETCH_DEFAULT_OPTIONS'})
		// Also get settings for comparisons
		dispatch({type : 'FETCH_SETTINGS'})
	};
}

// Action to save settings
export function saveSettings (settings){
	return (dispatch) => {
		// Fetch Settings
		dispatch({
			type : 'SAVE_SETTINGS',
			payload : settings
		});
	};
}