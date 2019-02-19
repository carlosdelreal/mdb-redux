import React from 'react';
import {BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import './css/App.css';

import rootReducer from './rootReducer';

import Header from './movies/Header';
import MoviesList from './movies/MoviesList';
import MovieDetail from './movies/MovieDetail';
import Toggle from './toggle/Toggle';

const middleware = [logger, thunk];

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
	<Provider store={store}>
		<Router>
			<div className="App">
				<Header title="cena + cine" />
				<Toggle />
				<Switch>
					<Route exact path="/" component={MoviesList} />
					<Route path="/:id" component={MovieDetail} />
				</Switch>
			</div>
		</Router>
	</Provider>
);

export default App;
