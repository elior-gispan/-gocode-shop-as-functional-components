import React from "react";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

class Products extends React.Component {
  state = {
    onSaleIdProducts: this.props.onSaleIdProducts,
  };
  render() {
    const ProductsList = this.props.children.map(
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
