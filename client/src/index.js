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
import Nav from './components/Nav';
import CryptoPriceBoard from './components/CryptoPriceBoard';
import BoardOptions from './components/BoardOptions';
import NotFound from './components/NotFound';

// Provider
import { Provider } from 'react-redux';

// Store
import store from './store';



// History
const history = createHistory()



// <Root /> Element
const Root = () => {
	return(
		<Provider store={store}>
			<Router history={history}>
				<section className="outer-bounds">
					<header>
						<h1>thecryptocurrency.observer</h1>
						<Nav />
					</header>
					<Switch>
						<Route exact path="/" component={CryptoPriceBoard} />
						<Route path="/options" component={BoardOptions} />
						<Route component={NotFound} />
					</Switch>
				</section>
			</Router>
		</Provider>
	);
}



// Render DOM
ReactDOM.render(<Root />, document.getElementById('root'))



// Register Service Worker, allows for assets
// to load faster from local cache
registerServiceWorker()