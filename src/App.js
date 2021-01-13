import './App.css';
import { Grid } from '@material-ui/core';

import SearchBar from './components/searchBar';
import NominationsList from './components/nominationsList';
import store from './redux/store';
import { Provider } from 'react-redux';
import SearchResults from './components/SearchResults';
function App({ props }) {
	console.log(props);
	return (
		<Provider store={store}>
			<Grid container className="app">
				<SearchBar />
				<SearchResults />
				<NominationsList />
			</Grid>
		</Provider>
	);
}

export default App;
