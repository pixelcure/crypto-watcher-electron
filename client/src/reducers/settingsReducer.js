  ///////////////////////////////////////////////
 // SETTINGS REDUCER ///////////////////////////
///////////////////////////////////////////////



// SETTINGS ACTION TYPES
const SHOW_CRYPTO_LIST = 'SHOW_CRYPTO_LIST'
const SHOW_DETAIL_OPTIONS = 'DETAIL_OPTIONS'
const SAVE_SETTINGS = 'SAVE_SETTINGS'
const FETCH_SETTINGS = 'FETCH_SETTINGS'



// settings reducer
export default function (state={}, action){

	switch (action.type) {
		case SHOW_CRYPTO_LIST : {

			return {
				...state,
				cryptoCurrency : ['LTC', 'BTC', 'ETH']
			};

		}
		case SHOW_DETAIL_OPTIONS : {

			return {
				...state,
				detailOptions : [{
					detailName : 'some detail',
					detailVisible : false
				}]
			};

		}
		case FETCH_SETTINGS : {

			return {
				...state,
				settings : {
					cryptoCurrency : ['LTC', 'ETH'],
					conversions : ['USD'],
					detailOptions : []
				}
			}

		}
		case SAVE_SETTINGS : {

			return {
				...state,
				settings : action.payload
			};

		}
		default :
			return state;
	}

}