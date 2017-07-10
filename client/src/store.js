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
import reducers from "./reducers";



// Middleware
const middleware = applyMiddleware(thunk, promise(), createLogger())

// Default State
const defaultState = {	
	price : {}
}



// Create Store, Reducers, Default State, Middleware
// export default createStore(price, middleware);
export default createStore(reducers, defaultState, middleware);