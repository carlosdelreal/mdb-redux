import React from 'react';
import {BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {compose, composeWithDevTools} from 'redux-devtools-extension';

import './styles/App.css';

import rootReducer from './rootReducer';

import Header from './components/Header';
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';
import Toggle from './components/Toggle';

const store = createStore(
	rootReducer,
	{},
	composeWithDevTools()
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
