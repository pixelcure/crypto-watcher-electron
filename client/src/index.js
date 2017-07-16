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
	Link,
	Router
} from 'react-router-dom';

// Browser History
import createHistory from 'history/createBrowserHistory'

// Components
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
				<main>
					<header>
						<Link title="Board Options" to="/settings">
							<span className="icon icon-settings"></span>
						</Link>
					</header>
					<Switch>
						<Route exact path="/" component={CryptoPriceBoard} />
						<Route path="/settings" component={BoardOptions} />
						<Route component={NotFound} />
					</Switch>
				</main>
			</Router>
		</Provider>
	);
}



// Render DOM
ReactDOM.render(<Root />, document.getElementById('root'))



// Register Service Worker, allows for assets
// to load faster from local cache
registerServiceWorker()