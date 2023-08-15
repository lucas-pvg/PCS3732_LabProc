import React from "react";

import "./switch.css";

const Switch = ({ isToggled, onToggle, disabled }) => {
    return (
        <div className="switchDiv">
            <label className="switch">
                <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={onToggle}
                    disabled={disabled || false}
                />
                <span className="slider" />
            </label>
        </div>
    );
};

export default Switch;
