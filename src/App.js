import React from "react";
import QuizLogic from "./components/QuizLogic";
import Start from "./components/Start";

function App() {
  const [start, setStart] = React.useState(false);

  function startQuiz() {
    setStart(!start);
  }

  return (
    <main className="main-page">
      {start ? <QuizLogic /> : <Start start={startQuiz} />}
    </main>
  );
}

export default App;
