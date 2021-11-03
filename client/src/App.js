import React from 'react';
import Nav from "./pages/nav";
import About from './pages/about';
import Shop from './pages/shop';
import Cart from './pages/cart';
import ItemDetail from './pages/itemDetail';
import {BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Footer from './pages/footer';
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
import useToken from './components/useToken';

function App() {
  
  const {token, setToken} = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <Router>
     <div className="wrapper">
            <BrowserRouter>
              <Switch>
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
                <Route path="/preferences">
                  <Preferences />
                </Route>
              </Switch>
            </BrowserRouter>
          </div>

            <div className="App">
              <Nav />
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/products" exact component={Shop}/> 
                <Route path="/Cart" exact component={Cart}/>
                <Route path="/shop/:id" component={ItemDetail}/>
              </Switch>
              <Footer />    
     </div>
    </Router>
  );
}

export default App;
