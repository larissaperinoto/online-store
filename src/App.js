import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    const { cart } = this.state;
    this.setState({ cart: [...cart, product] });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ () => <Home func={ this.addToCart } /> }
        />
        <Route path="/cart" render={ () => <Cart cart={ cart } /> } />
      </BrowserRouter>
    );
  }
}

export default App;
