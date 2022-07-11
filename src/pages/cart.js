import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
      cartRender: [],
    };
  }

  componentDidMount() {
    const { cart } = this.props;
    const cartRender = [...new Set(cart)];
    this.setState({ cart, cartRender });
  }

  funct = (id) => {
    const { cart } = this.state;
    const quantity = cart.filter((product) => product.id === id);
    return quantity.length;
  }

  handleClickIncrease = (product) => {
    const { cart } = this.state;
    this.setState({ cart: [...cart, product] });
  }

  handleClickDecrease = (product) => {
    const { cart } = this.state;
    const prodQuantity = cart.filter((obj) => obj === product);
    if (prodQuantity.length > 1) {
      const newData = cart.filter((obje) => obje !== product);
      prodQuantity.pop();
      this.setState({ cart: [...newData, ...prodQuantity] });
    }
  }

  render() {
    const { cart, cartRender } = this.state;
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
          cartRender.map((product, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">
                {product.title}
              </p>
              <span
                data-testid="shopping-cart-product-quantity"
              >
                {`Quantidade: ${this.funct(product.id)}`}
              </span>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.handleClickIncrease(product) }
              >
                Adicionar
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.handleClickDecrease(product) }
              >
                Remover
              </button>
            </div>))
        }
      </div>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
};
