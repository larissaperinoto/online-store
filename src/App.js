import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Cart from './pages/cart';
import Details from './components/details';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addToCart = async (product) => {
    const { cart } = this.state;
    await this.setState({ cart: [...cart, product] });
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
        <Route
          path="/details/:id"
          render={ (props) => <Details { ...props } func={ this.addToCart } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
