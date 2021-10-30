import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'Beans',
            description: 'Good beans',
            price: '10'
        },
        {
            id: 2,
            name: 'Kettle',
            description: 'Good Kettle',
            price: '10'
        },
        {
            id: 3,
            name: 'Grinder',
            description: 'Good Grinder',
            price: '10'
        },{
            id: 4,
            name: 'T-Shirt',
            description: 'Good T-Shirt',
            price: '10'
        },{
            id: 5,
            name: 'Bean Container',
            description: 'Good Bean Container',
            price: '10'
        },{
            id: 6,
            name: 'Filters',
            description: 'Good Filters',
            price: '10'
        },{
            id: 7,
            name: 'Chemex',
            description: 'Good Chemex',
            price: '10'
        },{
            id: 8,
            name: 'Light Beans',
            description: 'Good Light Beans',
            price: '10'
        },
    ]
    
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
        {products.map((product) => (
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
        ))}
        </Box>
    );
}
