import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ProductCard(props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {props.products.map((product) => (
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add To Cart</Button>
                {/* <Button size="small">Add To Wishlist</Button> */}
              </CardActions>
            </Card>
        ))}
        </Box>
    );
}
