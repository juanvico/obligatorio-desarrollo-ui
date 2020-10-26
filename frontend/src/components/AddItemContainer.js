import React from 'react';
import { Button, Avatar, TextField, Paper } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/LockOutlined';

const useStyles = makeStyles((theme) => ({
	paper: {
	  margin: theme.spacing(8, 4),
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	},
	avatar: {
	  margin: theme.spacing(2),
	  backgroundColor: theme.palette.primary.main,
	},
	form: {
	  width: '100%',
	  margin: theme.spacing(8),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function AddItemContainer() {

	const classes = useStyles();

	function handleAddition() {

	}

	return (
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <AddCircleIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Add a new item
			</Typography>
			<form className={classes.form} noValidate>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="title"
				label="Title"
				name="title"
				autoFocus
			  />
			  <TextField
                multiline
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="description"
				label="Description"
				id="description"
			  />
              <TextField
                multiline
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="pickup-details"
				label="Pickup Details"
				id="pickup-details"
			  />
			  <Button
			  	onClick={handleAddition}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
				Add item
			  </Button>
			  <Grid container>
				<Grid item>
				  <Link href="/home" variant="body2">
					{"Cancel"}
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		</Grid>
	);
  }
  
  export default AddItemContainer; 