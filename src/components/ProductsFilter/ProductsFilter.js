import React from "react";
import PropTypes from "prop-types";

class ProductsFilter extends React.Component {
  //   state = { value: "All Products" };

  //   category = (event) => {
  //     // this.setState({ value: event.target.value });
  //     // this.props.categoryUpdate(this.state.value);
  //     this.props.categoryUpdate(event.target.value);
  //   };

  //   handleChange = (event) => {
  //     const Products = this.props.children;
  //     this.setState({ value: event.target.value });
  //     if (this.state.value !== "All Products") {
  //       const FilteredProducts = Products.filter(
  //         (product) => product.category === event.target.value
  //       );
  //       console.log(FilteredProducts);
  //       this.props.ProductsUpdate(FilteredProducts);
  //     }
  //   };

  render() {
    console.log("ProductsFilter rendering");
    const { categories, categoryUpdate } = this.props;
    // console.log("state of ProductsFilter: ", this.state);
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
  }
}

ProductsFilter.propTypes = {
  categories: PropTypes.array,
  categoryUpdate: PropTypes.func,
};

export default ProductsFilter;
