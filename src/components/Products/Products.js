import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import SaleCountDown from "../SaleCountDown/SaleCountDown";
// import { Link } from "react-router-dom";

const Products = (props) => {
  const { category, children, onSaleIdProducts, setOnSaleIdProducts } = props;

  const products =
    category === "All Products"
      ? children
      : children.filter((product) => product.category === category);

  //   const linkTo = (id) => {
  //     <Link to={`/products/${id}`}></Link>;
  //   };

  const productsList = products.map(({ title, price, image, id }) => (
    // <Link to={`/products/${id}`}>
    <Product
      //   onClick={linkTo}
      title={title}
      price={price}
      imgSrc={image}
      id={id}
      key={id}
      productClassName={
        onSaleIdProducts.includes(id) ? "onSale" : "product-card"
      }
    />
    // </Link>
  ));
  return (
    <div>
      <SaleCountDown saleOver={() => setOnSaleIdProducts([])} />
      <section className="products">{productsList}</section>
    </div>
  );
};

Products.propTypes = {
  onSaleIdProducts: PropTypes.array,
  category: PropTypes.string,
  children: PropTypes.array,
};

export default Products;
