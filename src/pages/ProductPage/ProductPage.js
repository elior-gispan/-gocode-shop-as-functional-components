import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// import Product from "../../components/Product/Product";
import "./ProductPage.css";

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (match.params.productId > 20) {
      history.push("");
    }
    const fetchProduct = async () => {
      const res = await fetch(
        `http://localhost:8000/products/${match.params.productId}`
      );
      const json = await res.json();
      console.log(json);
      setProduct(json);
    };

    fetchProduct();
  }, [history, match.params.productId]);

  const { title, price, image, description } = product;
  return (
    <div>
      <div className="product-card">
        <div className="product-page-image">
          <img alt="No_image_found" src={image} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>${price}</h6>
        </div>
      </div>
      {/* <Product
        title={title}
        price={price}
        imgSrc={image}
        key={id}
        productClassName="product-page"
      /> */}
      <p className="product-description">
        <div className="description-title">Description:</div> <br />
        {description}
      </p>
    </div>
  );
};

export default ProductPage;
