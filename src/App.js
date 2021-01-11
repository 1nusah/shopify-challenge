import './App.css';
import { Grid } from '@material-ui/core';

import SearchBar from './components/searchBar';
function App() {
	return (
		<Grid container className="app">
			<SearchBar />
		</Grid>
	);
}

export default App;
