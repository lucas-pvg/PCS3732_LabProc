import React from "react";
import "./logo.css";

function Logo(props) {
    const classes = "logo " + props.classes;
    return (
        <div className={classes}>
            <img src={require("../../../images/cpu-black.png")} />
            <span>PCS3732</span>
        </div>
    );
}

export default Logo;
