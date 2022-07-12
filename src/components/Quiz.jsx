import React from "react";

function Quiz({
  onClick,
  showAnswers,
  choices,
  question,
  correct_answer,
  selected,
  id,
}) {
  const answerElements = choices.map((item) => {
    let className = "options-btn";
    if (item === selected) {
      className += " selected";
    }
    if (showAnswers) {
      if (item === selected && item !== correct_answer) {
        className += " wrong-answer";
      } else if (item === correct_answer) {
        className += " correct";
      } else {
        className += " not-correct";
      }
    }

    return (
      <button
        onClick={() => onClick(id, item)}
        key={item}
        className={className}
        dangerouslySetInnerHTML={{ __html: item }}
      />
    );
  });

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className="options">{answerElements}</div>
      </div>
      <hr className="divider" />
    </main>
  );
}

export default Quiz;
