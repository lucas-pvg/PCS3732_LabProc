import React from "react";

import "./buttonGo.css";

const ButtonGo = ({ handleSend }) => {
    return (
        <button className="button-go" onClick={handleSend}>
            <span>Ir</span>
        </button>
    );
};

export default ButtonGo;
