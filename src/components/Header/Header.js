import React, { Children } from "react";

class Header extends React.Component {
  render() {
    return (
      <nav className="product-filter">
        <h1>Products</h1>

        <div className="sort">
          <div className="collection-sort">
            <label>Filter by:</label>
            <select>
              <option value={Children}>All Products</option>
              <option value="/">{this.props.categories[0]}</option>
              <option value="/">{this.props.categories[1]}</option>
              <option value="/">{this.props.categories[2]}</option>
              <option value="/">{this.props.categories[3]}</option>
            </select>
          </div>

          <div className="collection-sort">
            <label>Sort by:</label>
            <select>
              <option value="/">Featured</option>
              <option value="/">Best Selling</option>
              <option value="/">Alphabetically, A-Z</option>
              <option value="/">Alphabetically, Z-A</option>
              <option value="/">Price, low to high</option>
              <option value="/">Price, high to low</option>
              <option value="/">Date, new to old</option>
              <option value="/">Date, old to new</option>
            </select>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
