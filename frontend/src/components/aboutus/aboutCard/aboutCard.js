import React from "react";
import "./aboutCard.css"

function AboutCard(props) {
    var cardClasses = "about-card " + props.side;
    var imgClasses = "image " + props.className;

    return (
        <div className={cardClasses}>
            <div className={imgClasses} />

            <div className="text">
                <h1 className="name">{props.name}</h1>
                <p className="info">{props.info}</p>
            </div>
        </div>
    );
}

export default AboutCard;
