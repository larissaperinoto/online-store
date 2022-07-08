import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  funct = (id) => {
    const { cart } = this.props;
    const quantity = cart.filter((product) => product.id === id);
    return quantity.length;
  }

  render() {
    const { cart } = this.props;
    return (
      <div>
        {
          (cart.length === 0) && (
            <span
              data-testid="shopping-cart-empty-message"
            >
              Seu carrinho está vazio
            </span>)
        }
        {
          cart.map((product, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">
                {product.title}
              </p>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {`Quantidade: ${this.funct(product.id)}`}
              </span>
            </div>))
        }
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
};
