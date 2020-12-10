import React, { useCallback, useState } from 'react';
import { Button, Avatar, TextField, Paper, FormHelperText, Switch, FormControlLabel } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';

import CREATE_MESSAGE from '../mutations/message';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '60vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
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

const SendMessageContainer = () => {
  const classes = useStyles();
  const [details, setDetails] = useState('')
  const [[hasError, errorMessage], setErrors] = useState([false, '']);
  const history = useHistory()

  const [createMessage, { data, error, loading }] = useMutation(CREATE_MESSAGE, { fetchPolicy: 'no-cache' });

  if (data?.createMessage) {
    history.push('/')
  }

  const handleAddition = useCallback(
    async () => {
      try {
        if (details === '') setErrors([true, 'Enter details'])
        else await createMessage({ variables: { details } })
      } catch (error) {
        console.log(error)
      }
    },
    [details,
      createMessage,
    ])

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Send a message to coordinate pickup!
			</Typography>
      <TextField
        multiline
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="details"
        label="Message:"
        id="details"
        value={details}
        onChange={e => setDetails(e.target.value)}
      />
      {hasError && <FormHelperText error={hasError}>{errorMessage}</FormHelperText>}
      <Button
        onClick={handleAddition}
        disabled={loading}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Send message
			  </Button>
    </div>
  );
}

export default SendMessageContainer;