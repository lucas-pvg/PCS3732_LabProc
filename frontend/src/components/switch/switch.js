import React from "react";

import "./switch.css";

const Switch = ({ isToggled, onToggle }) => {
    return (
        <div className="switchDiv">
            <label className="switch">
                <input type="checkbox" checked={isToggled} onChange={onToggle}/>
                <span className="slider" />
            </label>
        </div>
    );
};

export default Switch;
