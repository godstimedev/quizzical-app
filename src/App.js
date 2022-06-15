import React from "react";
import QuizLogic from "./components/QuizLogic";
import Start from "./components/Start";

function App() {
  const [start, setStart] = React.useState(true);

  function startQuiz() {
    setStart(!start);
  }

  // const [quizData, setQuizData] = useState([]);

  // const url =
  //   "https://opentdb.com/api.php?amount=3&category=21&difficulty=easy&type=multiple";

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setQuizData(data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(quizData);

  // const card = quizData.map((item) => {
  //   return (
  //     <>
  //       <Quiz
  //         question={item.question}
  //         answer={item.correct_answer}
  //         incorrect={item.incorrect_answers}
  //         key={item.index}
  //       />

  //     </>
  //   );
  // });

  return (
    <main className="main-page">
      {start ? <QuizLogic /> : <Start start={startQuiz} />}
    </main>
  );
}

export default App;
