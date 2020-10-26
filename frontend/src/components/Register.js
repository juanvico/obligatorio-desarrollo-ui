import React from 'react';
import { Button, Avatar, TextField, Paper } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function Register() {

	const classes = useStyles();

	function handleRegistration() {

	}

	return (
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Sign up
			</Typography>
			<form className={classes.form} noValidate>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="name"
				label="Name"
				name="name"
				autoComplete="name"
				autoFocus
			  />
        <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
			  />
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				id="password"
			  />
        <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Confirm Password"
				id="confirm-password"
			  />
			  <Button
        onClick={handleRegistration}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
				Sign Up
			  </Button>
			  <Grid container>
				<Grid item>
				  <Link href="/" variant="body2">
					{"Already have an account? Sign In"}
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		</Grid>
	);
  }
  
  export default Register; 