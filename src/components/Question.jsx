import React from "react";
import { decode } from "html-entities";

export default function Question(props) {
  const [isSelected, setIsSelected] = React.useState(false);
  const [savedOptions, setSavedOptions] = React.useState(props.optionsArray);

  React.useEffect(() => {
    if (props.checkAnswers) {
      let options = document.querySelectorAll(".answer-btn");
      options.forEach((option) => {
        if (option.textContent === props.answer) {
          option.style.backgroundColor = "#94D7A2";
          option.style.color = "#293264";
          option.style.border = "none";
        } else if (option.style.backgroundColor === "rgb(214, 219, 245)") {
          option.style.backgroundColor = "#F8BCBC";
          option.style.color = "grey";
        }
      });
    } else if (props.playAgain) {
      setSavedOptions(props.optionsArray);
      setIsSelected(false);
      let options = document.querySelectorAll(".answer-btn");
      options.forEach((option) => {
        if (
          option.style.backgroundColor === "rgb(148, 215, 162)" ||
          option.style.backgroundColor === "rgb(248, 188, 188)"
        ) {
          option.style.backgroundColor = "rgb(245, 247, 251)";
          option.style.border = "0.77px solid #4d5b9e";
          option.style.color = "#293264";
        }
      });
    }
  }, [props.playAgain]);

  function highlightOption(e) {
    if (!props.checkAnswers) {
      let btnColor = e.target.style.backgroundColor;
      if (
        !isSelected &&
        (btnColor === "rgb(245, 247, 251)" || btnColor === "")
      ) {
        e.target.style.backgroundColor = "#D6DBF5";
        e.target.style.border = "none";
        setIsSelected((prev) => !prev);
      } else if (
        isSelected &&
        e.target.style.border === "none" &&
        e.target.style.backgroundColor !== "rgb(248, 188, 188)" &&
        e.target.style.backgroundColor !== "rgb(148, 215, 162)"
      ) {
        e.target.style.backgroundColor = "rgb(245, 247, 251)";
        e.target.style.border = "0.77px solid #4d5b9e";
        setIsSelected((prev) => !prev);
      }
    }
  }

  return (
    <div className="question-container">
      <h3 className="question">{props.question}</h3>
      <div className="answers-container">
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.playAgain
            ? decode(props.optionsArray[0])
            : decode(savedOptions[0])}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.playAgain
            ? decode(props.optionsArray[1])
            : decode(savedOptions[1])}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.playAgain
            ? decode(props.optionsArray[2])
            : decode(savedOptions[2])}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.playAgain
            ? decode(props.optionsArray[3])
            : decode(savedOptions[3])}
        </div>
      </div>
    </div>
  );
}
