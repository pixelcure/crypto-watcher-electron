  ///////////////////////////////////////////////
 // CURRENCY REDUCER ///////////////////////////
///////////////////////////////////////////////



// cryptoCurrency reducer
export default function (state={}, action){
	switch (action.type) {
		case 'FETCH_COST' : {
			return {
				...state, 
				fetching : true
			}
		}
		case 'FETCH_COST_REJECTED' : {
			return {
				...state, 
				error : action.payload, 
				fetching : false
			}
		}
		case 'FETCH_COST_FULFILLED' : {
			return {
				...state,
				currency : action.currency, 
				convertedCurrencies : 
				action.convertedCurrencies, 
				currencyCost : action.payload, 
				fetching : false, 
				fetched : true 
			}
		}
		default :
			return state;
	}
}  