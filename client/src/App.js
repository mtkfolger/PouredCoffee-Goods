import React from 'react';
import Nav from "./pages/nav";
import About from './pages/about';
import Shop from './pages/shop';
import Cart from './pages/cart';
import ItemDetail from './pages/itemDetail';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Footer from './pages/footer';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

console.log(client);

function App() {
  return (
    
    <ApolloProvider client={client}>

    <Router>

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
    </ApolloProvider>

  );
}

export default App;
