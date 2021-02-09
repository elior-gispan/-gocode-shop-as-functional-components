import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Products />
      </div>
    );
  }
}

export default App;
