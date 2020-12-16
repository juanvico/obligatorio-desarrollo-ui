import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

import PICKUP_MESSAGES from '../queries/pickupMessages';
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

  // eslint-disable-next-line 
  const { loading, error, data } = useQuery(PICKUP_MESSAGES, { fetchPolicy: 'network-only' });

  if (loading) return 'Loading...';

  return (
    <div className={classes.root}>
      My messages:
      <List>
       {data?.pickupMessages?.map((myMessage,index) => (
         <div>
          <ListItem key={index} alignItems="flex-start">
          <ListItemText
            primary={<Typography
            component="span"
            variant="body2"
            className={classes.inline}
            color="textPrimary"
          >
            From: {myMessage.user_name} ({myMessage.user_email})
          </Typography>}
            secondary={myMessage.description}
          />
          </ListItem>
          <Divider/>
          </div>
          ))}
      </List> 
    </div>
  );
}
export default MessagesContainer;