import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
   return (
      <nav className="navbar">
         <Link to="/" className="logo route">
            <img src={require("../../images/cpu.png")} />
            <span>PCS3732</span>
         </Link>

         <ul>
            <li><Link to="/arithmetics-info" className="route">Aritméticas</Link></li>
            <li><Link to="/branch-info" className="route">Desvio</Link></li>
            <li><Link to="/quiz" className="route">Quiz</Link></li>
            <li><Link to="/other-instructions-info" className="route">Outras Instruções</Link></li>
            <li><Link to="/about" className="route">Quem somos nós?</Link></li>
         </ul>
      </nav>
   );
}

export default Navbar;
