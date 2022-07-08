import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories,
  getProductsFromQuery,
  getProductsFromCategory } from '../services/api';
import CardProducts from '../components/cardProducts';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      dataProducts: [],
      categories: [],
      search: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  };

  handleCLick = async () => {
    const { search } = this.state;
    const { results } = await getProductsFromQuery(search);
    this.setState({ dataProducts: results });

    if (results === undefined) {
      return (<span>Nenhum produto foi encontrado</span>);
    }
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  filterCategory = async (id) => {
    const { results } = await getProductsFromCategory(id);
    this.setState({ dataProducts: results });
  }

  render() {
    const { dataProducts, categories } = this.state;
    const { func } = this.props;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        {categories.map((category) => (
          <button
            key={ category.id }
            data-testid="category"
            type="button"
            onClick={ () => this.filterCategory(category.id) }
          >
            {category.name}
          </button>
        ))}
        <label htmlFor="searchProducts">
          <input
            id="searchProducts"
            type="text"
            data-testid="query-input"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleCLick }
        >
          Pesquisar
        </button>
        { (dataProducts.length > 0) ? '' : (
          <span
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.

          </span>
        )}
        { (dataProducts.length > 0) && dataProducts.map((product) => (
          <div key={ product.id }>
            <CardProducts { ...product } />
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => func(product) }
            >
              Comprar
            </button>
          </div>
        )) }
      </div>
    );
  }
}

Home.propTypes = {
  func: PropTypes.func.isRequired,
};
