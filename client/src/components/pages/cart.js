import "./style.css"
import { Grid, Card } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import heroImage from "../src/coffee1.jpg";

function Cart() {
  return (
    <div className="App">
      <Grid container justify="left" alignItems="left" direction="column" fontSize="larger">
        <h1>Poured || Coffee and Goods</h1>
        <h2> CART</h2>
          </Grid>
          
    </div>
  );
}

export default Cart;