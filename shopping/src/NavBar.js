import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const NavBar = () => {
  const add = () => {
    console.log("test");
  };

  return (
    <div>
      <Link to="/">
        <a href="/">Home</a>
      </Link>
      <Link to="/Shopping">
        <a href="/Shopping">Shopping</a>
      </Link>
      <Link to="/Cart">
        <a href="/Cart">Cart</a>
      </Link>
    </div>
  );
};

export default NavBar;
