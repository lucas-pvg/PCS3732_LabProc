import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Outlet />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
