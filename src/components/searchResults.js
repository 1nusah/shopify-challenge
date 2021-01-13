import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import { useDispatch, useSelector } from 'react-redux';
const SearchResults = () => {
	const searchResults = useSelector((state) => state.searchResults);

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
				marginRight: '2%',
				maxHeight: '60vh',
				overflowY: 'auto',
			}}
		>
			{searchResults.map((i) => (
				<SearchItem
					Title={i.Title}
					Year={i.Year}
					Poster={i.Poster}
					imdbID={i.imdbID}
				/>
			))}
		</Grid>
	);
};
const SearchItem = ({ Title, Year, Poster, imdbID }) => {
	const dispatch = useDispatch();
	const nominationList = useSelector((state) => state.nominationList);

	const addToList = () => {
		nominationList.length < 5
			? dispatch({
					type: 'ADD_MOVIE',
					item: {
						imdbID,
						Title,
						Year,
						Poster,
					},
			  })
			: alert('You have reached a maximum of 5 entries please');
	};

	return (
		<>
			<div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					<ul
						style={{
							paddingTop: 0,
							marginTop: 0,
							height: '35px',
						}}
					>
						<li>
							<p>
								{Title}, {Year}
							</p>
						</li>
					</ul>

					<IconButton disableRipple size="small" onClick={addToList}>
						<FavoriteBorderSharpIcon color="#ccc" />
					</IconButton>
				</div>
			</div>
		</>
	);
};
export default SearchResults;
