  ///////////////////////////////////////////////
 // REDUCERS INDEX /////////////////////////////
///////////////////////////////////////////////

// Deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// Reducers
import priceCard from './priceCardReducer';
import settings from './settingsReducer';



// Combine Reducers
export default combineReducers({
	priceCard,
	settings,
	routerReducer
});