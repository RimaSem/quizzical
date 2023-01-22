import React from "react";
import Question from "./Question";
import database from "../data.js";
import smallBlobTop from "../assets/yellow-small.svg";
import smallBlobBottom from "../assets/blue-small.svg";

export default function Main() {
  const [data, setData] = React.useState(database.results);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  // const [correctAnswers, setCorrectAnswers] = React.useState(5);

  // function answeredCorrectly(num) {
  //   setCorrectAnswers(num);
  // }
  const questions = data.map((obj) => {
    return (
      <Question
        key={obj.question}
        question={obj.question}
        options={obj.incorrect_answers}
        answer={obj.correct_answer}
        checkMe={checkAnswers}
        // answeredCorrectly={answeredCorrectly}
      />
    );
  });

  function handleButton() {
    setCheckAnswers((prev) => !prev);
  }

  return (
    <div className="main-page-container">
      <img className="upper-blob" src={smallBlobTop} />
      <div className="all-questions">{questions}</div>
      <div className="check-answers-btn-container">
        {/* {checkAnswers && <p>You scored {correctAnswers}/5 correct answers</p>} */}
        <button
          className="check-answers-btn"
          type="button"
          onClick={handleButton}
        >
          {!checkAnswers ? "Check answers" : "Play again"}
        </button>
      </div>
      <img className="lower-blob" src={smallBlobBottom} />
    </div>
  );
}
