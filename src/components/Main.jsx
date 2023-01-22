import React from "react";
import Question from "./Question";
import database from "../data.js";
import smallBlobTop from "../assets/yellow-small.svg";
import smallBlobBottom from "../assets/blue-small.svg";

export default function Main() {
  const [startOfGame, setStartOfGame] = React.useState(true);
  const [data, setData] = React.useState(database.results);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(true);

  function shuffle(array) {
    const newArray = [...array];
    const length = newArray.length;

    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor(
        (newArray.length - start) * Math.random()
      );
      const randomItem = newArray.splice(randomPosition, 1);

      newArray.push(...randomItem);
    }

    return newArray;
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
        optionsArray={
          playAgain && shuffle([...obj.incorrect_answers, obj.correct_answer])
        }
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
