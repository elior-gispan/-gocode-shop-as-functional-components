import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import ThemeContext, { themes } from "./contexts/ThemeContext";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  let isDark = currentTheme === themes.light ? false : true;

  return (
    <ThemeContext.Provider value={currentTheme}>
      <button
        onClick={() => {
          return setCurrentTheme(isDark ? themes.light : themes.dark);
        }}
      >
        Change Color
      </button>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/products/:productId" component={ProductPage}></Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
