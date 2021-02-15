import React from "react";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    console.log("Product rendering");
    const { imgSrc, title, price, productClassName } = this.props;

    return (
      <div className={productClassName}>
        <div className="product-image">
          <img alt="No_image_found" src={imgSrc} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6
            className={productClassName === "onSale" ? "salePrice" : undefined}
          >
            ${productClassName === "onSale" ? (price / 2).toFixed(2) : price}
          </h6>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  productClassName: PropTypes.string,
};

export default Product;
