import React, { useState } from "react";
import Button from "../../button/button";
import "./expBut.css";

function ExpBut(props) {
    const [isClick, setClick] = useState(false);
    const classes = "exp-but " + props.classes

    function handleClick() {
        setClick(true);
    }

    return (
        <div className={ classes }>
            <Button
                classes={ isClick ? "disable" : "arrow" }
                onClick={ handleClick }
                text="Start"
            />

            <div className={ isClick ? "wipe but-container" : "disable"}>
                <Button classes="light" to="arithmetics" text="Aritméticas" />
                <Button classes="light" to="branch" text="Desvio" />
                <Button to="quiz" text="Quiz" />
            </div>
        </div>
    )
}

export default ExpBut;
