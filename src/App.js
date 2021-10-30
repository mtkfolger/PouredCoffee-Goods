import "./style.css"
import { Grid, Card } from "@material-ui/core";
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
    </div>
  );
}

export default App;