import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import ProductMenu from './ProductMenu'

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <ProductMenu />
        <h2>Welcome!</h2>
      </div>
    );
  }
}

export default Home;
