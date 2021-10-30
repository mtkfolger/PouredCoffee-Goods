// import './App.css';
import ProductsList from './components/ProductList';
import "./style.css"
import { Grid, Card } from "@mui/material/";
import CardMedia from '@mui/material/CardMedia';

function App() {

  return (
    <div className="App">
      <Grid container justify="left" alignItems="left" direction="column" fontSize="larger">
        <h1>Poured || Coffee and Goods</h1>
          </Grid>

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="./coffee1.jpg"
          alt= "coffee_pour"
        ></CardMedia>
        </Card>
        <ProductsList />
    </div>
  );
}

export default App;