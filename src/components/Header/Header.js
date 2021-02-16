import React from "react";
import PropTypes from "prop-types";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsSort from "../ProductsSort/ProductsSort";

const Header = (props) => {
  const { categories, categoryUpdate } = props;
  return (
    <nav className="product-filter">
      <h1>Products</h1>
      <div className="sort">
        <ProductsFilter
          categories={categories}
          categoryUpdate={categoryUpdate}
        />
        <ProductsSort />
      </div>
    </nav>
  );
};

Header.propTypes = {
  categories: PropTypes.array,
  categoryUpdate: PropTypes.func,
};

export default Header;
