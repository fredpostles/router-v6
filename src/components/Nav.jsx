import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
    </>
  );
};

export default Nav;
