import React from "react";

import { Link } from "react-router-dom";
import { BsJournalBookmark } from "react-icons/bs";

import "./navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <Link to="/" className="logo">
                    <BsJournalBookmark />
                    PCS3732
                </Link>
                <ul>
                    <li>
                        <Link to="arithmetics" className="route">
                            Aritméticas
                        </Link>
                    </li>
                    <li>
                        <Link to="branch">Desvio</Link>
                    </li>
                    <li>
                        <Link to="quiz">Quiz</Link>
                    </li>
                    <li>
                        <Link to="other-instructions">Outras Instruções</Link>
                    </li>
                    <li>
                        <Link to="about">Quem somos nós?</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
