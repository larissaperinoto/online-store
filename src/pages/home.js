import React, { Component } from 'react';
import { getCategories } from '../services/api';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      categories: [],
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

  render() {
    const { data, categories } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        {categories.map((category) => (
          <button
            key={ category.id }
            data-testid="category"
            type="button"
          >
            {category.name}
          </button>
        ))}
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
