  //////////////////////////////////////
 // INDEX /////////////////////////////
//////////////////////////////////////

// Deps
import React from 'react';
import ReactDOM from 'react-dom';

// Service Worker, helps use local caching
// to load assets faster (css, images, etc)
import registerServiceWorker from './registerServiceWorker';

// CSS
import './styles/index.css';

// Router & History
import {
	Switch,
	Route,
	Router
} from 'react-router-dom';

// Browser History
import createHistory from 'history/createBrowserHistory'

// Components
import Cost from './components/Cost/Cost';
import NotFound from './components/NotFound/NotFound';

// Provider
import { Provider } from 'react-redux';

// Store
import store from './store';



// History
const history = createHistory();



// <Root /> Element
const Root = () => {
	return(
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route exact path="/">
						<Cost />
					</Route>
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Provider>
	);
};



// Render DOM
ReactDOM.render(<Root />, document.getElementById('root'));



// Register Service Worker, allows for assets
// to load faster from local cache
registerServiceWorker();