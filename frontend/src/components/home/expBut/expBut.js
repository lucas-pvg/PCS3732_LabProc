import React, { useState } from "react";
import Button from "../../button/button";
import "./expBut.css";

function ExpBut(props) {
    const [isClick, setClick] = useState(false);
    const classes = "exp-but " + props.className

    function handleClick() {
        setClick(true);
    }

    return (
        <div className={ classes }>
            <Button
                className={ isClick ? "disable" : "arrow" }
                onClick={ handleClick }
                text="Start"
            />

            <div className={ isClick ? "wipe but-container" : "disable"}>
                <Button className="light" to="arithmetics" text="Aritméticas" />
                <Button className="light" to="branch" text="Desvio" />
                <Button to="quiz" text="Quiz" />
            </div>
        </div>
    )
}

export default ExpBut;
