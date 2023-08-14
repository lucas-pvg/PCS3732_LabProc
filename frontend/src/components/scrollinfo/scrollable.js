import React from "react";

import "./scrollable.css";

const Scrollable = (props) => {
    return (
        <div className="scrollView">
            <p className="intrucInfo">{props.text}</p>
        </div>
    );
};

export default Scrollable;
