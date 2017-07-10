  ///////////////////////////////////////////////
 // REDUCERS INDEX /////////////////////////////
///////////////////////////////////////////////

// Deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// Reducers
import price from './crytoCurrencyReducer';



// Combine Reducers
export default combineReducers({
	price,
	routerReducer
});