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

			// Check to see if we have saved settings, otherwise use the default
			const settings = localStorage.getItem('crypto-observer-settings') ? JSON.parse(localStorage.getItem('crypto-observer-settings')) : defaultSettings

			return {
				...state,
				settings
				// settings : defaultSettings
			};

		}
		case SAVE_SETTINGS : {
			
			// Save in local storage, then in state
			localStorage.setItem('crypto-observer-settings', JSON.stringify(action.payload))
			
			return {
				...state,
				settings : action.payload
			};

		}
		default :
			return state;
	}

}