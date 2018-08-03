import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';

class ProductRow extends Component {

  static propTypes = {
		product: PropTypes.string.isRequired
	}
  render() {
    const {product} = this.props;
    const name = product.stocked ?
      product.name : 
      <span style={{color: 'red'}}>
        {product.name}
      </span>
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
