  //////////////////////////////////////
 // STORE /////////////////////////////
//////////////////////////////////////

// Deps
import { applyMiddleware, createStore } from 'redux';

// Thunk, Promise, Logging
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

// Reducers
import cryptoCurrency from "./reducers";



// Middleware
const middleware = applyMiddleware(promise(), thunk, createLogger())

// Default State
const defaultState = {	
	cryptoCurrency : null
}



export default createStore(cryptoCurrency, defaultState, middleware);