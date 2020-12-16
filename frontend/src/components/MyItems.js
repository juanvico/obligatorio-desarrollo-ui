import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import MYITEMS from '../queries/myItems';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

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

const MyItems = () => {
  const classes = useStyles();

  // eslint-disable-next-line 
  const { loading, error, data } = useQuery(MYITEMS, { fetchPolicy: 'network-only' });
  if (loading) return 'Loading...';
  return (
    <div className={classes.root}>
      {data.myItems === [] ? (
        <>
          <Grid container spacing={4}>
            {data?.myItems?.map((tile, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
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
                      <Typography gutterBottom variant="subtitle2" noWrap >
                        Pick up: {tile.pickup_location_description}
                      </Typography>
                      <Typography variant="body2" >Available: {tile.available_to_pickup ? 'Yes' : 'No'}</Typography>
                      <Typography variant="body2" color="textSecondary" noWrap>
                        Posted by: {tile.user_name} ({tile.user_email})
                </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to={{
                        pathname: '/sendMessage',
                        state: { email: tile.user_email, item: tile }
                      }}>
                        Contact for pickup coordination
                  </Link>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
          <>
            Empty items list.
          </>
        )}
    </div>
  );
}
export default MyItems;