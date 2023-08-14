import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

function HomeNavbar() {

   return (
      <nav className="home-nav">
         <ul className="home-url">
            <li><Link to="/arithmetics" className="route black">Aritméticas</Link></li>
            <li><Link to="/branch" className="route black">Desvio</Link></li>
            <li><Link to="/quiz" className="route">Quiz</Link></li>
            <li><Link to="/moreInfo" className="route">Saiba mais</Link></li>
            <li><Link to="/about" className="route">Quem somos nós?</Link></li>
         </ul>
      </nav>
   );
}

export default HomeNavbar;
