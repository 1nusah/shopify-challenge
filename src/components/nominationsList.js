import React from 'react';
import { Grid, IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useDispatch, useSelector } from 'react-redux';
const NominationsList = () => {
	const nominationList = useSelector((state) => state.nominationList);
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
				maxHeight: '60vh',
				overflowY: 'auto',
			}}
		>
			<h3>this is the nominations list</h3>
			{nominationList.map((i) => (
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
	const removeFromList = () => {
		dispatch({
			type: 'REMOVE_MOVIE',
			imdbID,
		});
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

					<IconButton disableRipple size="small" onClick={removeFromList}>
						<FavoriteIcon color="secondary" />
					</IconButton>
				</div>
			</div>
		</>
	);
};
export default NominationsList;
