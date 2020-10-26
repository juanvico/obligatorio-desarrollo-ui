import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './ItemCard.css'

function ItemCard({ item }) {  

  const history = useHistory()

  function handleLearnMore(itemId) {
    history.push("/items/" + {itemId})
  }

    return (
      <Card className="item-card">
        <CardActionArea>
          <CardMedia
            className="item-card-image"
            image={item.imageURL}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick= {handleLearnMore} size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  }
  
  export default ItemCard; 