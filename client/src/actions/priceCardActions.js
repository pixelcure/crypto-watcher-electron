  //////////////////////////////////////////////
 // PRICE CARD ACTION CREATORS ////////////////
//////////////////////////////////////////////



// Action to pull crypto cost based off currency 
// and conversion params
export function fetchCost (currencies, conversion){
	return (dispatch) => {
		// Fetch Settings
		dispatch({
			type : 'FETCH_SETTINGS'
		});
		// Dispatch FETCH_COST action
		dispatch({
			type : 'FETCH_COST',
			currencies,
			conversion
		});
		// Fetch Cost
		fetch(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${currencies}&tsyms=${conversion}`)
		.then((res) => res.json())
		.then((res) => {
			// Dispatch FETCH_COST_FULFILLED
			dispatch({
				type : 'FETCH_COST_FULFILLED',
				payload : res
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

// Action to pull board settings to know what to fetch
export function fetchSettings (){
	return (dispatch) => {
		// Fetch Settings
		dispatch({
			type : 'FETCH_SETTINGS'
		});
	};
}