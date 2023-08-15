import React, { useState } from "react";
import Button from "../button/button";
import { Questions } from "./questions";
import "./quiz.css";

function Quiz(props) {
    const classes = "quiz-container " + props.className;

    const [ q, setQ ] = useState(0);
    const [ correct, setCorrect] = useState(0);
    const [ finish, setFinish ] = useState(false);

    function setOption(event) {
        const { text } = event.target;
        var ans = Questions[q].options.indexOf(text);
        var right = Questions[q].correct;

        if (ans == right) setCorrect(correct + 1);
        setFinish(() => ((q + 1) == Questions.length) ? true : false);
        setQ(() => (finish ? q : q + 1));
    }

    return (
        <div className={ classes }>
            <div className="quiz-card">

                {
                    finish
                    ? (<div>
                        <h1 className="question">Fim do Quiz!</h1>
                        <p className="result">Você acertou <span>{correct}</span> perguntas de {Questions.length}!</p>
                        <Button
                            className="quiz-but"
                            text="Voltar"
                            to="/"
                        />
                    </div>)
                    
                    : (<div>
                        <h1 className="question">{Questions[q].question}</h1>

                        {
                            (Questions[q].options.map((option, i) => {
                                return (<Button key={i} onClick={ setOption } className="option" text={option} />)
                            }))
                        }

                        <div className="last">
                            <p className="counter">{q + 1}/{Questions.length}</p>

                            <Button
                                className="quiz-but"
                                text="Voltar"
                                to="/"
                            />
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default Quiz;
