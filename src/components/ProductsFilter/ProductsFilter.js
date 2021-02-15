import React from "react";

class ProductsFilter extends React.Component {
  state = { value: "All Products" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    // this.props.categoryUpdate(this.state.value);
    this.props.categoryUpdate(event.target.value);
  };

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
    console.log("state of ProductsFilter: ", this.state);
    const OptionsList = this.props.categories.map((category) => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div className="collection-sort">
        <label>Filter by:</label>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="All Products">All Products</option>
          {OptionsList}
        </select>
      </div>
    );
  }
}

export default ProductsFilter;
