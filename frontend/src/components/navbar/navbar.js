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
                <li>
                    <Link to="arithmetics" className="route">
                        Aritméticas
                    </Link>
                </li>
                <li>
                    <Link to="branch" className="route">
                        Desvio
                    </Link>
                </li>
                <li>
                    <Link to="quiz" className="route">
                        Quiz
                    </Link>
                </li>
                <li>
                    <Link to="moreInfo" className="route">
                        Saiba mais
                    </Link>
                </li>
                <li>
                    <Link to="about" className="route">
                        Quem somos nós?
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
