import './App.css';
import { Grid } from '@material-ui/core';

import SearchBar from './components/searchBar';
import SearchResults from './components/searchResults';
import NominationsList from './components/nominationsList';
function App({ props }) {
	console.log(props);
	return (
		<Grid container className="app">
			<SearchBar />
			
			<NominationsList />
		</Grid>
	);
}

export default App;
