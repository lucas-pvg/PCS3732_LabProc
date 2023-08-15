import React from "react";

import "./textinputreg.css";

const TextInputReg = ({ placeholder, handleTextInput, disabled }) => {
    return (
        <div>
            <input className="input-reg" placeholder={placeholder} onChange={handleTextInput} disabled={disabled}></input>
        </div>
    );
};

export default TextInputReg;
