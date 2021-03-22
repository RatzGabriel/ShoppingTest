import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Link to="/Shopping">
        <button>Go To Shopping</button>
      </Link>
    </div>
  );
};

export default Main;
