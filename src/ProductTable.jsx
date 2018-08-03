import React, { Component } from 'react';
import './App.css';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import PropTypes from 'prop-types'

class ProductTable extends Component {

	static propTypes = {
		products: PropTypes.array.isRequired,
		filterText: PropTypes.string.isRequired,
		inStockOnly: PropTypes.bool.isRequired
	}

	render() {
		const { filterText, inStockOnly, products } = this.props;
		const rows = [];
		let lastCategory = null;
	
		products.forEach((product) => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			}
			if (inStockOnly && !product.stocked) {
				return;
			}
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>    
				)
			}
			rows.push(
				<ProductRow
				product={product}
				key={product.name}
				/>
			)
			lastCategory = product.category
		});
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

export default ProductTable;
