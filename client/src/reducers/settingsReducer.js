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
				currencies : ['LTC', 'BTC', 'ETH']
			};

		}
		case SHOW_DETAIL_OPTIONS : {

			return {
				...state,
				detailOptions : [
					{
						detailKey : 'MARKET',
						detailTitle : 'Market',
						detailVisible : false
					},
					{
						detailKey : 'LASTUPDATE',
						detailTitle : 'Last Update',
						detailVisible : false
					},
					{
						detailKey : 'LASTVOLUME',
						detailTitle : 'Last Volume',
						detailVisible : false
					},
					{
						detailKey : 'LASTVOLUMETO',
						detailTitle : 'Last Volume Price %',
						detailVisible : false
					},
					{
						detailKey : 'LASTTRADEID',
						detailTitle : 'Last Trade ID',
						detailVisible : false
					},
					{
						detailKey : 'VOLUME24HOUR',
						detailTitle : '24hr Volume Price',
						detailVisible : false
					},
					{
						detailKey : 'VOLUME24HOURTO',
						detailTitle : '24HR Volume %',
						detailVisible : false
					},
					{
						detailKey : 'OPEN24HOUR',
						detailTitle : 'Open 24hr Price',
						detailVisible : false
					},
					{
						detailKey : 'HIGH24HOUR',
						detailTitle : 'High 24hr Price',
						detailVisible : false
					},
					{
						detailKey : 'LOW24HOUR',
						detailTitle : 'Low 24hr Price',
						detailVisible : false
					},
					{
						detailKey : 'CHANGE24HOUR',
						detailTitle : 'Change in 24hr Price',
						detailVisible : false
					},
					{
						detailKey : 'CHANGEPCT24HOUR',
						detail : 'Change in 24hr %',
						detailVisible : false
					},
					{
						detailKey : 'SUPPLY',
						detailTitle : 'Coin Supply',
						detailVisible : false
					},
					{
						detailName : 'MKTCAP',
						detail : 'Market Cap',
						detailVisible : false
					}
				]
			};

		}
		case FETCH_SETTINGS : {

			return {
				...state,
				settings : {
					currencies : ['LTC', 'ETH', 'BTC'],
					conversion : 'USD',
					detailOptions : [],
					tickDelay : 5000
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