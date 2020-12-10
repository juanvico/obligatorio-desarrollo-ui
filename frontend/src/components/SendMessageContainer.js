import React, { useCallback, useState } from 'react';
import { Button, Avatar, TextField, Paper, FormHelperText, Switch, FormControlLabel } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';

import ITEM from '../queries/item';
import { useQuery } from '@apollo/client';

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
  const destinataryUserEmail = useState('paolafrancescoli@gmail.com')
  const itemId = useState('5fd239ca51286b6e27edfb23')
  const [description, setDescription] = useState('')
  const [[hasError, errorMessage], setErrors] = useState([false, '']);
  const history = useHistory()

  // const { fetchedLoading, fetchededData } = useQuery(ITEMS, { fetchPolicy: 'network-only' });
  const [createMessage, { data, error, loading }] = useMutation(CREATE_MESSAGE, { fetchPolicy: 'no-cache' });

  // if (fetchedLoading) return 'Loading...';

  if (data?.createMessage) {
    history.push('/messages')
  }

  const handleAddition = useCallback(
    async () => {
      try {
        if (description === '') setErrors([true, 'Enter message to send!'])
        else await createMessage({ variables: { destinataryUserEmail, description, itemId } })
      } catch (error) {
        console.log(error)
      }
    },
    [destinataryUserEmail,
      description,
      itemId,
    ])

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Contact the owner to coordinate pickup:
			</Typography>
      <TextField
        multiline
        variant="outlined"
        margin="normal"
        required
        fullWidth
        multiline
        rows={7}
        name="message"
        label="Message"
        id="message"
        value={description}
        onChange={e => setDescription(e.target.value)}
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