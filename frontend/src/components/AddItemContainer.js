import React, { useCallback, useState } from 'react';
import { Button, Avatar, TextField, Paper, FormHelperText, Switch, FormControlLabel } from '@material-ui/core';
import { Link, Grid, Typography, makeStyles } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/LockOutlined';
import { useMutation } from '@apollo/client';

import CREATE_ITEM from '../mutations/item';
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

const AddItemContainer = () => {
  const classes = useStyles();
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')
  const [availableToPickup, setAvailableToPickup] = useState(true);
  const [[hasError, errorMessage], setErrors] = useState([false, '']);
  const history = useHistory()

  const [createItem, { data, error, loading }] = useMutation(CREATE_ITEM, { fetchPolicy: 'no-cache' });

  if (data?.createItem) {
    history.push('/')
  }

  const handleAddition = useCallback(
    async () => {
      try {
        if (description === '') setErrors([true, 'Enter description'])
        else if (image === '') setErrors([true, 'Enter image URL'])
        else if (pickupLocation === '') setErrors([true, 'Enter Pickup Location'])
        else await createItem({ variables: { description, image, pickupLocation, availableToPickup } })
      } catch (error) {
        console.log(error)
      }
    },
    [description,
      image,
      pickupLocation,
      availableToPickup,
      createItem,
    ])

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Add a new item
			</Typography>
      <TextField
        multiline
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="description"
        label="Description"
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <TextField
        multiline
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="image_url"
        label="Image URL"
        id="imageUrl"
        value={image}
        onChange={e => setImage(e.target.value)}
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
        value={pickupLocation}
        onChange={e => setPickupLocation(e.target.value)}
      />
      <FormControlLabel
        control={
          <Switch
            checked={availableToPickup}
            onChange={e => setAvailableToPickup(e.target.checked)}
            name="availableToPickup"
            color="primary"
          />
        }
        label="Able to pickup"
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
        Add item
			  </Button>
    </div>
  );
}

export default AddItemContainer;