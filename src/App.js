import React from "react";
import Quiz from "./components/Quiz";
import Start from "./components/Start";

function App() {
  const [start, setStart] = React.useState(true);

  function startQuiz() {
    setStart(!start);
  }

  const [quiz, setQuiz] = React.useState({
    data: null,
  });

  React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((json) => {
        const { response_code, results } = json;
        setQuiz({
          data: results,
        });
        console.log(quiz);
      });
  }, []);

  const { data } = quiz;

  return (
    <main className="main-page">
      {start ? <Quiz quizData={data} /> : <Start start={startQuiz} />}
    </main>
  );
}

export default App;
