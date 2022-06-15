import React, { useState } from "react";

function Quiz({ handleAnswer, data: { question, correct_answer, answers } }) {
  //   const [selectedAnswer, setSelectedAnswer] = useState();

  //   const optionClicked = [];

  //   function onAnswerClick(event) {
  //     const playerAnswer = event.target.innerHTML;
  //     setSelectedAnswer(playerAnswer);
  //     console.log(selectedAnswer);
  // if (playerAnswer === answer) {
  //   console.log("correct");
  // } else {
  //   console.log("incorrect");
  // }
  //   }

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="options">
          {answers.map((answer, i) => {
            return (
              <button
                key={i}
                className=" options-btn"
                onClick={() => handleAnswer(answer)}
                dangerouslySetInnerHTML={{ __html: answer }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Quiz;
