import React from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

const OnSaleIdProducts = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

class Products extends React.Component {
  state = {
    products: [],
    onSaleIdProducts: OnSaleIdProducts,
  };

  async componentDidMount() {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();
    this.setState({ products });
  }

  render() {
    const ProductsList = this.state.products.map(
      ({ title, price, image, id }) => (
        <Product
          title={title}
          price={price}
          imgSrc={image}
          key={id}
          productClassName={
            this.state.onSaleIdProducts.includes(id) ? "onSale" : "product-card"
          }
        />
      )
    );
    return (
      <div>
        <SaleCountDown
          saleOver={() => {
            this.setState({ onSaleIdProducts: [] });
          }}
        />
        <section className="products">{ProductsList}</section>
      </div>
    );
  }
}

export default Products;
