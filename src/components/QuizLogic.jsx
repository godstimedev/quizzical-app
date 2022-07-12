import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";
import { nanoid } from "nanoid";
import axios from "axios";

function QuizLogic() {
  const [quizData, setQuizData] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isloading, setIsLoading] = useState(false);

  const url =
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setQuizData(
          res.data.results.map((question) => ({
            ...question,
            choices: [
              question.correct_answer,
              ...question.incorrect_answers,
            ].sort(() => Math.random() - 0.5),
            correct_answer: question.correct_answer,
            id: nanoid(),
            selected: "",
          }))
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(id, answer) {
    if (showAnswers) {
      return;
    }
    if (!answers.some((item) => item.id === id)) {
      setAnswers((prevAnswers) => [...prevAnswers, { id: id, answer: answer }]);
    } else {
      setAnswers((prevAnswers) =>
        prevAnswers.map((item) =>
          item.id === id ? { ...item, answer: answer } : item
        )
      );
    }
    setQuizData((prevQuizData) =>
      prevQuizData.map((q) => (q.id === id ? { ...q, selected: answer } : q))
    );
  }

  const quizElements = quizData.map((question) => {
    return (
      <Quiz
        key={question.id}
        {...question}
        onClick={handleClick}
        showAnswers={showAnswers}
      />
    );
  });

  function checkAnswers() {
    if (showAnswers) {
      window.location.reload();
      return;
    }
    answers.forEach((answer) => {
      let correct = quizData.find((item) => item.id === answer.id);

      if (correct.correct_answer === answer.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    });
    setShowAnswers(true);
  }

  return (
    <>
      {isloading ? (
        <div className="load">Loading...</div>
      ) : (
        <>
          <div className="quiz">{quizElements}</div>

          <div className="check-answers">
            {showAnswers && <h3>You scored {score}/5 correct answers </h3>}
            <button onClick={checkAnswers}>
              {!showAnswers ? "Check answers" : "Play Again"}
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default QuizLogic;
