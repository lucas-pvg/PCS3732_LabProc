import React from "react";

import "./textinputreg.css";

const TextInputReg = ({ placeholder, handleTextInput, value, disabled }) => {
    return (
        <div>
            <input className="input-reg" value={value} placeholder={placeholder} onChange={handleTextInput} disabled={disabled}></input>
        </div>
    );
};

export default TextInputReg;
