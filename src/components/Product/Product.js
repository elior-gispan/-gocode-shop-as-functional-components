import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { imgSrc, title, price, id, productClassName } = props;

  return (
    <div className={productClassName}>
      <div className="product-image">
        <Link to={`/products/${id}`}>
          <img alt="No_image_found" src={imgSrc} />
        </Link>
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6 className={productClassName === "onSale" ? "salePrice" : undefined}>
          ${productClassName === "onSale" ? (price / 2).toFixed(2) : price}
        </h6>
      </div>
    </div>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  productClassName: PropTypes.string,
};

export default Product;
