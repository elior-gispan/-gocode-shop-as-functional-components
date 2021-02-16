import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

class Products extends React.Component {
  state = {
    onSaleIdProducts: this.props.onSaleIdProducts,
  };
  render() {
    console.log("Products rendering");
    console.log("state of Products: ", this.state);
    const Products =
      this.props.category === "All Products"
        ? this.props.children
        : this.props.children.filter(
            (product) => product.category === this.props.category
          );
    console.log("Products are: ", Products);

    const ProductsList = Products.map(({ title, price, image, id }) => (
      <Product
        title={title}
        price={price}
        imgSrc={image}
        key={id}
        productClassName={
          this.state.onSaleIdProducts.includes(id) ? "onSale" : "product-card"
        }
      />
    ));
    return (
      <div>
        <SaleCountDown
          saleOver={() => {
            this.setState({ onSaleIdProducts: [] });
            console.log("Sale is Over!!!!!!!!!!!!!!!!!");
          }}
        />
        <section className="products">{ProductsList}</section>
      </div>
    );
  }
}

Products.propTypes = {
  onSaleIdProducts: PropTypes.array,
  category: PropTypes.string,
  children: PropTypes.array,
};

export default Products;
