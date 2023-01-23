import React from "react";
import Question from "./Question";
import smallBlobTop from "../assets/yellow-small.svg";
import smallBlobBottom from "../assets/blue-small.svg";
import { decode } from "html-entities";
import FadeLoader from "react-spinners/FadeLoader";

export default function Main() {
  const [data, setData] = React.useState([]);
  const [correctAnswers, setCorrectAnswers] = React.useState([]);
  const [checkAnswers, setCheckAnswers] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(true);
  const [newData, setNewData] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple")
      .then((result) => result.json())
      .then((APIdata) => setData(APIdata.results))
      .then(() => setLoading(false));
  }, [newData]);

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

  function score() {
    let count = 0;
    const selectedOptions = document.querySelectorAll(".answer-btn");
    selectedOptions.forEach((option) => {
      if (option.style.backgroundColor === "rgb(214, 219, 245)") {
        if (correctAnswers.includes(option.textContent)) {
          count = count + 1;
        }
      }
    });
    return count;
  }

  function correctAnswerArray() {
    let arr = [];
    data.forEach((item) => arr.push(item.correct_answer));
    return arr;
  }

  const questions = data.map((obj) => {
    return (
      <Question
        key={obj.question}
        question={decode(obj.question)}
        options={obj.incorrect_answers}
        answer={decode(obj.correct_answer)}
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
      {loading ? (
        <FadeLoader
          color={"#1a6985"}
          loading={loading}
          cssOverride={{
            marginTop: "20vh",
          }}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div>
          <img className="upper-blob" src={smallBlobTop} />
          <div className="all-questions">{questions}</div>
          <div className="check-answers-btn-container">
            {checkAnswers && <p>You scored {score()}/5 correct answers</p>}
            <button
              className="check-answers-btn"
              type="button"
              onClick={(e) => {
                if (e.target.textContent === "Play again") {
                  setNewData((prev) => !prev);
                }
                setCorrectAnswers(correctAnswerArray);
                setPlayAgain((prev) => !prev);
                setCheckAnswers((prev) => !prev);
              }}
            >
              {!checkAnswers ? "Check answers" : "Play again"}
            </button>
          </div>
          <img className="lower-blob" src={smallBlobBottom} />
        </div>
      )}
    </div>
  );
}
