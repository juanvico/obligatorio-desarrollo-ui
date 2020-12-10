import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

import MESSAGES from '../queries/messages';
import { useQuery } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
    height: '70vh',
  },
  card: {
    height: "100%",
    display: "block",
    flexDirection: "column"
  },
  img: {
    width: '25vw',
    height: '25vh',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}));

const MessagesContainer = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(MESSAGES, { fetchPolicy: 'network-only' });

  if (loading) return 'Loading...';

  return (
    <div className={classes.root}>
      My messages:
      <Grid container spacing={4}>
      {data?.items?.map((tile) => (
          <Grid item key={tile} xs={12} sm={6} md ={4}>
            <Typography component="h1" variant="h5">
            From: {tile.user_name} ( {tile.user_email} )
			      </Typography> 
            <Typography component="subtitle2" variant="subtitle2">
            Message: {tile.details}
			      </Typography> 
            </Grid>
      ))}
      </Grid>
    </div>
  );
}
export default MessagesContainer;