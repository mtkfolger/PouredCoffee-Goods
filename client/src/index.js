import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasicMenu from '../src/components/menu.js';
import "./style.css"
ReactDOM.render(
  <React.StrictMode>
    <BasicMenu class="basic-menu"/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

