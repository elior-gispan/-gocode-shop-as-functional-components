import React from "react";
import PropTypes from "prop-types";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import ProductsSort from "../ProductsSort/ProductsSort";

class Header extends React.Component {
  render() {
    console.log("Header rendering");
    console.log("state of Header: ", this.state);
    return (
      <nav className="product-filter">
        <h1>Products</h1>
        <div className="sort">
          <ProductsFilter
            categories={this.props.categories}
            categoryUpdate={this.props.categoryUpdate}
          />
          <ProductsSort />
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  categories: PropTypes.array,
  categoryUpdate: PropTypes.func,
};

export default Header;
