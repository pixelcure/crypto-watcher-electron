  ///////////////////////////////////////////////
 // REDUCERS INDEX /////////////////////////////
///////////////////////////////////////////////

// Deps
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

// Reducers
import cryptoCurrency from './crytoCurrencyReducer';



// Combine Reducers
export default combineReducers({
	cryptoCurrency,
	routerReducer
});