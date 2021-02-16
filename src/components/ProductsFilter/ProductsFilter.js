import React from "react";
import PropTypes from "prop-types";

const ProductsFilter = (props) => {
  const { categories, categoryUpdate } = props;
  const OptionsList = categories.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  return (
    <div className="collection-sort">
      <label>Filter by:</label>
      <select onChange={(event) => categoryUpdate(event.target.value)}>
        <option value="All Products">All Products</option>
        {OptionsList}
      </select>
    </div>
  );
};

ProductsFilter.propTypes = {
  categories: PropTypes.array,
  categoryUpdate: PropTypes.func,
};

export default ProductsFilter;
