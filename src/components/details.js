import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProductId } from '../services/api';

export default class Details extends Component {
  state = {
    getOBjtApi: [],
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
  console.log(id);
  console.log('opa');
};

render() {
  const { getOBjtApi } = this.state;
  return (
    <div>
      <h2 data-testid="product-detail-name">
        Produto:
        { getOBjtApi.title }
      </h2>
      <p>{ `R$${getOBjtApi.price}` }</p>
      <img src={ getOBjtApi.thumbnail } alt={ getOBjtApi.title } />
    </div>
  );
}
}

Details.propTypes = {
  match: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.string }) }),
}.isRequired;
