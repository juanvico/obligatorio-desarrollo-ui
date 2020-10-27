import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import ITEMS from '../../queries/items';
import { useQuery } from '@apollo/client';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '80vw',
    height: '70vh',
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    with: 'auto',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const Feed = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(ITEMS, { fetchPolicy: 'network-only' });

  if (loading) return 'Loading...';

  return (
    <div className={classes.root}>
      {data?.items?.map((tile) => (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={tile.images[0]} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    User: {tile.user_name} | {tile.user_email}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Pick up: {tile.pickup_location}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tile.description}
                  </Typography>
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Available: {tile.available_to_pickup ? 'Yes' : 'No'}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}

    </div>
  );
}
export default Feed;