  //////////////////////////////////////////////
 // CRYPTO CURRENCY ACTION CREATORS ///////////
//////////////////////////////////////////////



// Action to pull crypto cost based off currency 
// and convertedCurrency params
export function fetchCost(currency, convertedCurrency) {
	return (dispatch) => {
		// Dispatch FETCH_COST action
		dispatch({type : 'FETCH_COST'});
		// Fetch Cost
		fetch(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=${convertedCurrency}`)
		.then((res) => {
			// Dispatch FETCH_COST_FULFILLED
			dispatch({
				type : 'FETCH_COST_FULFILLED',
				payload : res.data
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