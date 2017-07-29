  ///////////////////////////////////////////////
 // SETTINGS REDUCER ///////////////////////////
///////////////////////////////////////////////

// Available Options
import { options, defaultSettings } from '../util/';

// SETTINGS ACTION TYPES
const FETCH_DEFAULT_OPTIONS = 'FETCH_DEFAULT_OPTIONS'
const SAVE_SETTINGS = 'SAVE_SETTINGS'
const FETCH_SETTINGS = 'FETCH_SETTINGS'



// settings reducer
export default function (state={}, action){

	switch (action.type) {
		case FETCH_DEFAULT_OPTIONS : {

			return {
				...state,
				options
			};

		}
		case FETCH_SETTINGS : {

			return {
				...state,
				settings : defaultSettings
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