import React from "react";

const Switch = (props) => {
    return (
        <div className="toggle-switch">
            <input
                type="checkbox"
                className="toggle-switch-checkbox"
                name={props.name}
                id={props.name}
            />
            <label className="toggle-switch-label" htmlFor={this.props.Name}>
                <span className="toggle-switch-inner" />
                <span className="toggle-switch-switch" />
            </label>
        </div>
    );
};

export default Switch;
