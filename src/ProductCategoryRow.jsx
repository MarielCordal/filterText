import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class ProductCategoryRow extends Component {

	static propTypes = {
    category: PropTypes.string.isRequired
	}
  render() {
    const {category} = this.props;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
