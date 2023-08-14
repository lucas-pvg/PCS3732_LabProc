import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";

import "./arithmeticsInfoPage.css";

const ArithmeticsInfoPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Informações sobre instruções aritméticas</h1>
            <Link to="/arithmetics" className="route">
                <button>Emulador</button>
            </Link>
        </div>
    );
};

export default ArithmeticsInfoPage;
