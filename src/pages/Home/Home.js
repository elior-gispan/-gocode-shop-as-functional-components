import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import { ThemeContext } from "../../contexts/ThemeContext";

const ON_SALE_ID = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const Home = () => {
  const [products, setProducts] = useState([]);
  const [onSaleIdProducts, setOnSaleIdProducts] = useState(ON_SALE_ID);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("All Products");

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setProducts(products);
    };

    fetchProducts();

    const GroupBy = (xs, key) =>
      xs.reduce((rv, x) => {
        rv[x[key]] = true || [];
        return rv;
      }, {});

    const Categories = Object.keys(GroupBy(products, "category"));
    setCategories(Categories);
  }, [products]);
  const theme = useContext(ThemeContext);
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <Header categories={categories} categoryUpdate={setCategory} />
      <Products
        onSaleIdProducts={onSaleIdProducts}
        setOnSaleIdProducts={setOnSaleIdProducts}
        category={category}
      >
        {products}
      </Products>
    </div>
  );
};

export default Home;
