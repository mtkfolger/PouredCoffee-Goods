import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom'
import Coffee from "../../src/coffee.png";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const navStyle = {
  color: 'black',
  textDecoration: 'none'
}
function Nav() {
  return (
    <nav>
      <img className="logo" src={Coffee} alt="coffee-logo"></img>
      <h1 className="header">Poured || Coffee & Goods</h1>
      <ul className="nav-links">
          <Link className="home-link" style={navStyle} to="/"> <li>Home</li> </Link>
          <Link className="about-link" style={navStyle} to="/about"> <li>About</li> </Link>
          <Link className="shop-link" style={navStyle} to="/products"> <li>Products</li> </Link>
          <Link className="shop-link" style={navStyle} to="/login"> <li>Login</li> </Link>
          <Link className="shop-link" style={navStyle} to="/cart"> 
            <IconButton aria-label="cart">
            <Badge badgeContent={1} color="secondary">
            <ShoppingCartIcon />
            </Badge>
            </IconButton>
           </Link>
      </ul>
    </nav>
  );
}

export default Nav;
