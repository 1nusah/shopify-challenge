import React from 'react';
import { Grid, Button } from '@material-ui/core';
const SearchResults = ({ queryKey, resData }) => {
	return (
		<Grid
			item
			xs={12}
			sm={12}
			md={5}
			lg={5}
			style={{
				backgroundColor: 'white',
				boxShadow: '10px 10px 10px #cecece',
				marginTop: '2%',
				marginRight: '5%',
			}}
		>
			<h3>Search Results for "{queryKey}"</h3>
			<Grid item xs={12} sm={12} md={5} lg={5}>
				{console.log(typeof resData)}
				{resData && (
					<div>
						// style={{ display: 'flex', flexDirection: 'row' }}
						<ul>
							<li>
								{resData?.Title}, {resData?.Year}, {resData?.Runtime}
							</li>
						</ul>
						<button>Add am</button>
					</div>
				)}
			</Grid>
		</Grid>
	);
};

export default SearchResults;
