import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromProductId } from '../services/api';

export default class Details extends Component {
  state = {
    getOBjtApi: {},
  }

componentDidMount = () => {
  this.getOBjtApi();
}

getOBjtApi = async () => {
  const { match: { params: { id } } } = this.props;
  const arrApi = await getProductsFromProductId(id);
  this.setState({
    getOBjtApi: arrApi,
  });
};

render() {
  const { getOBjtApi } = this.state;
  const { func } = this.props;
  return (
    <div>
      <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
      <h2 data-testid="product-detail-name">
        Produto:
        { getOBjtApi.title }
      </h2>
      <p>{ `R$${getOBjtApi.price}` }</p>
      <img src={ getOBjtApi.thumbnail } alt={ getOBjtApi.title } />
      <button
        data-testid="product-detail-add-to-cart"
        type="button"
        onClick={ () => func(getOBjtApi) }
      >
        Adicionar ao carrinho
      </button>
      <form>
        <input
          type="email"
        />
        <textarea />
        <input type="radio" name="select" value="1" disabled="true" />
        <input type="radio" name="select" value="2" checked disabled="true" />
        <input type="radio" name="select" value="3" disabled="true" />
        <input type="radio" name="select" value="4" disabled="true" />
        <input type="radio" name="select" value="5" disabled="true" />
        <button
          type="button"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
}

Details.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
