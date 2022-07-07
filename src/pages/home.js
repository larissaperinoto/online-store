import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <label htmlFor="searchProducts">
          <input
            id="searchProducts"
            type="text"
          />
        </label>
        { (data.length > 0) ? '' : (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </span>
        )}
      </div>
    );
  }
}
