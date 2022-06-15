import React, { useState, useEffect } from "react";
import Quiz from "./Quiz";

function QuizLogic() {
  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const url =
    "https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const quizData = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));

        setQuizData(quizData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   let correct;
  //   let incorrect;
  //   let selectedAns;
  //   function answerReveal() {
  //     let className = className;
  //     if ((selectedAns = correct)) {
  //       className = "options-btn-correct";
  //     } else if ((selectedAns = incorrect)) {
  //       className = "options-btn-incorrect";
  //     }
  //   }

  return quizData.length > 0 ? (
    <>
      <>
        {quizData.map((item, i) => {
          const handleAnswer = (answer) => {
            if (answer === quizData[i].correct_answer) {
              setScore(score + 1);
            }
          };
          //   console.log(score);
          return (
            <Quiz
              key={i}
              data={item}
              handleAnswer={handleAnswer}
              //   question={item.question}
              //   answer={item.correct_answer}
              //   incorrect={item.incorrect_answers}
              //   key={item.index}
            />
          );
        })}
      </>

      <div className="answers">
        <button>Check Answers</button>
      </div>
    </>
  ) : (
    <div>Loading..</div>
  );
}

export default QuizLogic;
