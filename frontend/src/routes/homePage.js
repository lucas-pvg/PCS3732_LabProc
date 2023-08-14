import React from "react";
import HomeNavbar from "../components/navbar/homeNavbar";
import Title from "../components/home/title/title";
import ExpBut from "../components/home/expBut/expBut";

import "./homePage.css";

const HomePage = () => { 
  return (
    <div className="home">
      <HomeNavbar />
      
      <div className="content">
        <Title className="title" />
        <p className="subtitle">Simule e aprenda instruções ARM32</p>
        <ExpBut className="exp-but" />
      </div>
    </div>
  );
};

export default HomePage;
