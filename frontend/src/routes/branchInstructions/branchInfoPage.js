import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/navbar/navbar";

import "./branchInfoPage.css";

const BranchInfoPage = () => {
    return (
        <div>
            <Navbar />
            <h1>Informações sobre instruções de desvio</h1>
            <Link to="/branch" className="route">
                <button>Emulador</button>
            </Link>
        </div>
    );
};

export default BranchInfoPage;
