import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CardProducts extends Component {
  render() {
    const { id, title, price, thumbnail } = this.props;
    return (
      <Link to={ `/details/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <h2>{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$${price}` }</p>
        </div>
      </Link>

    );
  }
}

CardProducts.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  thumbnail: PropTypes.string,
}.isRequired;
