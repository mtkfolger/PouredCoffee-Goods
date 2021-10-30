import './App.css';
import ProductsList from './components/ProductList';

function App() {
  const chungus = "bungus";

  return (
    <div className="App">
      <h1>E-Chungus</h1>
      <ProductsList meme={chungus}/>
    </div>
  );
}

export default App;
