import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CardProducts extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price}` }</p>
      </div>
    );
  }
}

CardProducts.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
