import React from "react";
import Question from "./Question";
import database from "../data.js";
import smallBlobTop from "../assets/yellow-small.svg";
import smallBlobBottom from "../assets/blue-small.svg";

export default function Main() {
  const [data, setData] = React.useState(database.results);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(true);
  // const [correctAnswers, setCorrectAnswers] = React.useState(5);

  // function answeredCorrectly(num) {
  //   setCorrectAnswers(num);
  // }
  function reload() {
    let getOptions = document.querySelectorAll(".answer-btn");
    getOptions.forEach((option) => {
      option.style.backgroundColor = "rgb(245, 247, 251)";
      option.style.color = "#293264";
      option.style.border = "0.77px solid #4d5b9e";
    });
  }

  const questions = data.map((obj) => {
    return (
      <Question
        key={obj.question}
        question={obj.question}
        options={obj.incorrect_answers}
        answer={obj.correct_answer}
        checkAnswers={checkAnswers}
        playAgain={playAgain}
        // answeredCorrectly={answeredCorrectly}
      />
    );
  });

  return (
    <div className="main-page-container">
      <img className="upper-blob" src={smallBlobTop} />
      <div className="all-questions">{questions}</div>
      <div className="check-answers-btn-container">
        {/* {checkAnswers && <p>You scored {correctAnswers}/5 correct answers</p>} */}
        <button
          className="check-answers-btn"
          type="button"
          onClick={() => {
            setPlayAgain((prev) => !prev);
            setCheckAnswers((prev) => !prev);
          }}
        >
          {!checkAnswers ? "Check answers" : "Play again"}
        </button>
      </div>
      <img className="lower-blob" src={smallBlobBottom} />
    </div>
  );
}
