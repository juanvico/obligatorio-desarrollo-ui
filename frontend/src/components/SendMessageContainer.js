import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextField, FormHelperText} from '@material-ui/core';
import { Typography, makeStyles } from '@material-ui/core';
import { useMutation } from '@apollo/client';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import CREATE_PICKUP_MESSAGE from '../mutations/createPickupMessage';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";

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
  card: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SendMessageContainer = ({navigation}) => {
  const classes = useStyles();
  const location = useLocation()

  //TODO: get itemId and make message include itemid + remove hardcoded e-mail + item object is in the location state?
  var tile = location.state.item
  var destinataryUserEmail = tile.user_email

  const [description, setDescription] = useState('')
  const [[hasError, errorMessage], setErrors] = useState([false, '']);

  // eslint-disable-next-line 
  const [createPickupMessage, { data, error, loading }] = useMutation(CREATE_PICKUP_MESSAGE, { fetchPolicy: 'no-cache' });

  if (data?.createPickupMessage) {
    navigation.push('messages')
  }

  const handleAddition = useCallback(
    async () => {
      try {
        if (description === '') setErrors([true, 'Enter message to send!'])
        else await createPickupMessage({ variables: { destinataryUserEmail, description } })
      } catch (error) {
        console.log(error)
      }
    },
    [destinataryUserEmail,
      description,
      createPickupMessage,
    ])

  return (
    <Container className={classes.paper}>
      <Card className={classes.card}>
              <CardActionArea>
              <CardMedia 
                component="img"
                className={classes.img}         
                image={tile.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {tile.title}
                </Typography>
                <Typography gutterBottom variant="subtitle2" noWrap >
                {tile.description}
                </Typography>                  
                <Typography  gutterBottom variant="subtitle2" noWrap >
                  Pick up: {tile.pickup_location_description}
                </Typography>
                <Typography variant="body2" >Available: {tile.available_to_pickup ? 'Yes' : 'No'}</Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  Posted by: {tile.user_name} ({tile.user_email})
                </Typography>
              </CardContent>
              </CardActionArea>
            </Card>


      <Typography component="h1" variant="h5">
        Contact {destinataryUserEmail} to coordinate pickup:
			</Typography>
      <TextField
        multiline
        variant="outlined"
        margin="normal"
        required
        fullWidth
        rows={7}
        name="description"
        label="Message"
        id="description"
        value={description}
        onChangeText={e => setDescription(e.target.value)}
      />
      {hasError && <FormHelperText error={hasError}>{errorMessage}</FormHelperText>}
      <Button
        onPress={handleAddition}
        disabled={loading}
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Send message
			  </Button>
    </Container>
  );
}

export default SendMessageContainer;