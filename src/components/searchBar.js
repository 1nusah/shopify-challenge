import React from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const SearchBar = () => {
	return (
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
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
				}}
			>
				<TextField
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
			</div>
		</Grid>
	);
};

export default SearchBar;
