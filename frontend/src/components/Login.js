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
	  margin: theme.spacing(8),
	},
	submit: {
	  margin: theme.spacing(3, 0, 2),
	},
  }));

function Login() {

	const classes = useStyles();

	function handleLogin() {

	}

	return (
		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
		  <div className={classes.paper}>
			<Avatar className={classes.avatar}>
			  <LockOutlinedIcon />
			</Avatar>
			<Typography component="h1" variant="h5">
			  Sign in
			</Typography>
			<form className={classes.form} noValidate>
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			  />
			  <TextField
				variant="outlined"
				margin="normal"
				required
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			  />
			  <Button
			  	onClick={handleLogin}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}
			  >
				Sign In
			  </Button>
			  <Grid container>
				<Grid item>
				  <Link href="/signUp" variant="body2">
					{"Don't have an account? Sign Up"}
				  </Link>
				</Grid>
			  </Grid>
			</form>
		  </div>
		</Grid>
	);
  }
  
  export default Login; 