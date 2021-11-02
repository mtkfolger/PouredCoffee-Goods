import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CoffeeImage from "../../coffee.png";
import { CardActionArea } from '@mui/material';
import Beans from "../../beans.png";

export default function MediaCard() {
  return (
    <>
 <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="100%"
          image={Beans}
          alt="coffee-beans"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Beans
          </Typography>
          <Typography variant="body2" color="text.secondary">
            These are coffee beans. Are they a dark roast? Maybe. Are they <em>not</em> a dark roast? That's possible too. Either way - buy them now!</Typography>
        </CardContent>
        <Button>Add to Cart</Button>
      </CardActionArea>
    </Card>
    
    <hr className="line"></hr>
    </>
  );
}