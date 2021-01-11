import React from 'react';
import { Grid } from '@material-ui/core';
const NominationsList = () => {
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
				marginLeft: '5%',
			}}
		>
			<h3>this is the nominations list</h3>
		</Grid>
	);
};

export default NominationsList;
