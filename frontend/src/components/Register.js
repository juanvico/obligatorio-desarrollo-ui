import React, { useState } from 'react';
import { Button, Avatar, TextField, Paper, FormHelperText } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

import CREATE_USER from '../mutations/createUser';

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

const Register = () => {
	const classes = useStyles();
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [rePassword, setRePassword] = useState('')
	const [email, setEmail] = useState('')
	const [[hasError, errorMessage], setHasError] = useState([false, ''])
	const history = useHistory();

	const [createUser, { data, loading }] = useMutation(CREATE_USER, { fetchPolicy: 'no-cache' });

	if (data?.createUser) {
		localStorage.setItem('authorization', data.createUser.token);
		history.push('/')
	}

	const handleRegistration = async () => {
		try {
			if (name === '') return setHasError([true, 'Enter name!']);
			else if (email === '') return setHasError([true, 'Enter email!']);
			else if (password === '') return setHasError([true, 'Enter password!']);
			else if (password !== rePassword) return setHasError([true, 'Password dont match!']);
			else await createUser({ variables: { email, password, name } })
		} catch (error) {
			console.log(error);
		}
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
					value={name}
					onChange={(e) => setName(e.target.value)}
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
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					type="password"
					label="Password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					type="password"
					label="Confirm Password"
					id="confirm-password"
					value={rePassword}
					onChange={(e) => setRePassword(e.target.value)}
				/>
				{hasError && <FormHelperText error={hasError}>{errorMessage}</FormHelperText>}
				<Button
					disabled={loading}
					onClick={handleRegistration}
					fullWidth
					variant="contained"
					color="primary"
					className={classes.submit}
				>
					{loading ? 'Loading' : 'Sign Up'}
				</Button>
				<Grid container>
					<Grid item>
						<Link href="/auth/login" variant="body2">
							{"Already have an account? Sign In"}
						</Link>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
}

export default Register;