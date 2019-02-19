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

import './styles/App.css';

import rootReducer from './rootReducer';

import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Toggle from './components/Toggle';

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
