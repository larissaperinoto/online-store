import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    dataCart: [],
  };

  render() {
    const { dataCart } = this.state;
    return (
      <div>
        {
          (dataCart.length > 0) ? '' : (
            <span
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </span>)
        }
      </div>
    );
  }
}
