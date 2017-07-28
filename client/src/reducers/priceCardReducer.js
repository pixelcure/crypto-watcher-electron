  ///////////////////////////////////////////////
 // PRICECARD REDUCER //////////////////////////
///////////////////////////////////////////////



// FETCH PRICE TYPES
const FETCH_COST = 'FETCH_COST'
const FETCH_COST_REJECTED = 'FETCH_COST_REJECTED'
const FETCH_COST_FULFILLED = 'FETCH_COST_FULFILLED'



// priceCard reducer
export default function (state={ 
	fetched : false
}, action){

	switch (action.type) {
		case FETCH_COST : {
			return {
				...state, 
				fetching : true,
				fetched : false,
				currencies : action.currencies,
				conversion : action.conversion
			};

		}
		case FETCH_COST_REJECTED : {

			return {
				...state, 
				error : action.payload, 
				fetching : false
			};

		}
		case FETCH_COST_FULFILLED : {
			
			// Cryptos
			let cryptos = state.currencies.split(',')

			// Build price cards array based on our currencies
			let cards = []

			// Building cards array from data
			for(let x = 0; x < cryptos.length; ++x){
				
				// Data
				const data = action.payload.DISPLAY[cryptos[x]][state.conversion]
				
				// Card
				const card = {
					currency : cryptos[x],
					price : data.PRICE,
					symbol : data.FROMSYMBOL,
					conversionSymbol : data.TOSYMBOL,
					market : data.MARKET,
					lastUpdate : data.LASTUPDATE,
					lastVolume : data.LASTVOLUME,
					lastVolumeTo : data.LASTVOLUMETO,
					lastTradeId : data.LASTTRADEID,
					volume24Hour : data.VOLUME24HOUR,
					volume24HourTo : data.VOLUME24HOURTO,
					open24Hour : data.OPEN24HOUR,
					high24Hour : data.HIGH24HOUR,
					low24Hour : data.LOW24HOUR,
					change24Hour : data.CHANGE24HOUR,
					changePct24Hour : data.CHANGEPCT24HOUR,
					supply : data.SUPPLY,
					marketCap : data.MKTCAP,
				}

				// Push to cards
				cards.push(card)

			}

			// Return State
			return {
				...state,
				priceCards : cards,
				fetching : false, 
				fetched : true 
			};

		}
		default :
			return state;
	}

}