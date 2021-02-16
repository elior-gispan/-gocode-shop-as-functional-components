import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

const OnSaleIdProducts = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
class App extends React.Component {
  state = {
    products: [],
    onSaleIdProducts: OnSaleIdProducts,
    categories: [],
    category: "All Products",
  };

  categoryUpdate = (category) => this.setState({ category });

  async componentDidMount() {
    console.log("App-DidMount");
    const Res = await fetch("https://fakestoreapi.com/products");
    const Products = await Res.json();
    this.setState({ products: Products });

    const GroupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});

    const Categories = Object.keys(GroupBy(Products, "category"));
    this.setState({ categories: Categories });
  }

  render() {
    console.log("App rendering");
    console.log("state of App: ", this.state);
    return (
      <div>
        <Header
          categories={this.state.categories}
          categoryUpdate={this.categoryUpdate}
        />
        <Products
          onSaleIdProducts={this.state.onSaleIdProducts}
          category={this.state.category}
        >
          {this.state.products}
        </Products>
      </div>
    );
  }
}

export default App;
