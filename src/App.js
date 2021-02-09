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
  };

  async componentDidMount() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    this.setState({ products });

    const GroupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});

    const Categories = Object.keys(GroupBy(products, "category"));
    this.setState({ categories: Categories });
  }

  render() {
    return (
      <div>
        <Header categories={this.state.categories} />
        <Products onSaleIdProducts={this.state.onSaleIdProducts}>
          {this.state.products}
        </Products>
      </div>
    );
  }
}

export default App;
