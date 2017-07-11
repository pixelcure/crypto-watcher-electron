  ///////////////////////////////////////////////
 // REDUCERS INDEX /////////////////////////////
///////////////////////////////////////////////

// Deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// Reducers
import cryptoCard from './cryptoCardReducer';
import settings from './settingsReducer';



// Combine Reducers
export default combineReducers({
	cryptoCard,
	settings,
	routerReducer
});