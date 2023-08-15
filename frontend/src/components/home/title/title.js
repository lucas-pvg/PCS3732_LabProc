import React from "react";
import "./title.css";

function Title(props) {
    const classes = "title " + props.className;

    return (
        <div className={classes}>
            <p>Emulador de Instruções</p>
            <h1>ARM32</h1>
            <hr/>
        </div>
    );
}

export default Title;
