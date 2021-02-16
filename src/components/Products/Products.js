import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";

const Products = (props) => {
  const { category, children, onSaleIdProducts, setOnSaleIdProducts } = props;

  const Products =
    category === "All Products"
      ? children
      : children.filter((product) => product.category === category);

  const ProductsList = Products.map(({ title, price, image, id }) => (
    <Product
      title={title}
      price={price}
      imgSrc={image}
      key={id}
      productClassName={
        onSaleIdProducts.includes(id) ? "onSale" : "product-card"
      }
    />
  ));
  return (
    <div>
      <SaleCountDown saleOver={() => setOnSaleIdProducts([])} />
      <section className="products">{ProductsList}</section>
    </div>
  );
};

Products.propTypes = {
  onSaleIdProducts: PropTypes.array,
  category: PropTypes.string,
  children: PropTypes.array,
};

export default Products;
