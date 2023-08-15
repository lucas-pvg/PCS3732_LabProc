import React from "react";

import "./aboutInstructions.css";

const AboutInstructions = (props) => {
    return (
        <div className="card">
            <h1 className="title">{props.title}</h1>
            <p className="text">{props.info}</p>
        </div>
    );
};

export default AboutInstructions;
