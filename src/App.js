import React, { useEffect } from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import SearchBar from './components/searchBar';
import NominationsList from './components/nominationsList';
import { store, persistor } from './redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import SearchResults from './components/SearchResults';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Grid container className="app">
					<SearchBar />
					<SearchResults />
					<NominationsList />
				</Grid>
			</PersistGate>
		</Provider>
	);
}

export default App;
