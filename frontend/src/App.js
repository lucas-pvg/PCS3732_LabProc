import React from "react";
import "./App.css";

import { Outlet } from "react-router-dom";

import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Outlet />
      <p>Footer</p>
    </div>
  );
}

export default App;
