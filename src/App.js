import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import Nav from "./components/Nav";
import ProductsNav from "./components/ProductsNav";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <Nav />
          <Routes>
            <Route exact path="/products" element={<ProductsNav />} />
          </Routes>
        </nav>
        <Routes>
          <Route exact path="" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
