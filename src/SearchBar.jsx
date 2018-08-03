import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class SearchBar extends Component {

	static propTypes = {
		onFilterTextChange: PropTypes.func.isRequired,
		onInStockChange: PropTypes.func.isRequired,
		filterText: PropTypes.string.isRequired,
		inStockOnly: PropTypes.bool.isRequired
	}
	handleFilterTextChange = (e) => {
		this.props.onFilterTextChange(e.target.value);
	}
	handleInStockChange = (e) => {
		this.props.onInStockChange(e.target.checked)
	}
  	render() {
		const { filterText, inStockOnly } = this.props;

		return (
			<form>
				<input
					type="text"
					placeholder="search here"
					value={filterText}
					onChange={this.handleFilterTextChange}/>
				<p>
				<input
					type="checkbox"
					checked={inStockOnly}
					onChange={this.handleInStockChange}/>
				Only show products in stock
				</p>
			</form>
		);
  	}
}

export default SearchBar;
