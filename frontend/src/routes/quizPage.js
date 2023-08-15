import React from "react";
import Navbar from "../components/navbar/navbar";
import Quiz from "../components/quiz/quiz";

const QuizPage = () => {
    return (
        <div className="quiz">
            <Navbar />
            <Quiz />
        </div>
    );
};

export default QuizPage;