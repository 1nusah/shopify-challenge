import React, { useState } from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { searchResults } from '../redux/actions';
const SearchBar = () => {
	const [queryKey, setQueryKey] = useState('');
	const dispatch = useDispatch();
	const handleSubmitSearch = () => {
		var options = {
			method: 'GET',
			url: `http://www.omdbapi.com/?i=tt3896198&apikey=8c419cc4&type=movie&s=${queryKey}`,
		};

		axios
			.request(options)
			.then((res) => {
				dispatch(searchResults(res.data.Search));
			})
			.catch((err) => console.error(err));
	};
	return (
		<>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
				lg={12}
				style={{
					backgroundColor: 'white',
					boxShadow: '10px 10px 10px #cecece',
					width: '60%',
				}}
			>
				<h1>Shopify Movie Nominations</h1>
				<div>
					<form
						noValidate
						autoComplete="off"
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmitSearch();
						}}
					>
						<TextField
							onChange={(e) => setQueryKey(e.target.value)}
							id="standard-basic"
							label="Search for a movie"
							fullWidth
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon color="inherit" />
									</InputAdornment>
								),
							}}
						/>
					</form>
				</div>
			</Grid>
		</>
	);
};

export default SearchBar;
