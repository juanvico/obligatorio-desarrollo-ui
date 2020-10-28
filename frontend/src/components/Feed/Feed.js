import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import ITEMS from '../../queries/items';
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

const Feed = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(ITEMS, { fetchPolicy: 'network-only' });

  if (loading) return 'Loading...';

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
      {data?.items?.map((tile) => (
          <Grid item key={tile} xs={12} sm={6} md ={4}>
            <Card className={classes.card}>
              <CardActionArea>
              <CardMedia 
                component="img"
                className={classes.img}         
                image={tile.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  User Details
                </Typography>
                <Typography gutterBottom variant="subtitle2" noWrap >
                  {tile.user_name}
                </Typography>
                <Typography gutterBottom variant="subtitle2" noWrap >
                  {tile.user_email}
                </Typography>
                <Typography  gutterBottom variant="subtitle2" noWrap >
                  Pick up: {tile.pickup_location}
                </Typography>
                <Typography variant="body2" color="textSecondary" noWrap>
                  {tile.description}
                </Typography>
                <Typography variant="body2" >Available: {tile.available_to_pickup ? 'Yes' : 'No'}</Typography>
              </CardContent>
              </CardActionArea>
            </Card>
            </Grid>
      ))}
      </Grid>
    </div>
  );
}
export default Feed;