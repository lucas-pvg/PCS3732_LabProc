import React from "react";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Nossa Home</h1>
      <p>
        <Link to="/about">Sobre</Link>
      </p>
      <p>
        <Link to="/arithmetics-page">Instruções Aritméticas</Link>
      </p>
    </div>
  );
};

export default HomePage;
