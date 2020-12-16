import React, { useCallback, useState } from 'react';
import { Button, Avatar, TextField, Paper, FormHelperText } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';
import LOGIN from '../mutations/login';

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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles();
  const history = useHistory();
  const [[hasError, errorMessage], setHasError] = useState([false, '']);

  const onCompletedCallback = useCallback(() => { history.push('/') }, [history])
  const [login, {data, error, loading }] = useMutation(LOGIN, { fetchPolicy: 'no-cache', errorPolicy: 'ignore', onCompleted: onCompletedCallback });

  
   if (data?.login) {
     localStorage.setItem('authorization', data.login.token);
   }

  const handleLogin = useCallback(
    async () => {
      try {
        if (email === '') return setHasError([true, 'Enter email!']);
        else if (password === '') return setHasError([true, 'Enter password!']);
        else await login({ variables: { email, password } })
      } catch (error) {
        console.log(error);
      }
    },
    [email, password, login],
  )
  if (loading) {
    return <p className="navbar-text navbar-right">Loading...</p>;
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
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {hasError && <FormHelperText error={hasError}>{errorMessage}</FormHelperText>}
        {!!error && <FormHelperText error={!!hasError}>Upps try again!</FormHelperText>}
        <Button
          onClick={handleLogin}
          fullWidth
          disabled={loading}
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
			  </Button>
        <Grid container>
          <Grid item>
            <Link href="/auth/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default Login;