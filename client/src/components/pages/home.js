import "./style.css"
import { Grid, Card } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import heroImage from "../src/coffee1.jpg";

function Checkout() {
  return (
    <div className="App">
      <Grid container justify="left" alignItems="left" direction="column" fontSize="larger">
        <h1>Poured || Coffee and Goods</h1>
        <h2> HOME</h2>
          </Grid>
          
    </div>
  );
}

export default Checkout;




/*
<div className="App">
      <Grid container justify="left" alignItems="left" direction="column" fontSize="larger">
        <h1>Poured || Coffee and Goods</h1>
          </Grid>
          

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="1020"
          image={heroImage}
          alt= "coffee_pour"
        ></CardMedia>
        </Card>
    </div> 

    */