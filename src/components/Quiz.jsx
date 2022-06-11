import React from "react";

function Quiz({ quizData }) {
  //   const quizQuestion = quizData;
  //   const { question, correct_answer } = quizQuestion;
  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <h2>{}</h2>
        <div className="options">
          <button>Quiz</button>
          <button>Quiz</button>
          <button>Quiz</button>
          <button>Quiz</button>
        </div>
      </div>
      <div className="answers">
        <button>Check Answers</button>
      </div>
    </main>
  );
}

export default Quiz;
