import React from "react";

export default function Question(props) {
  const [isSelected, setIsSelected] = React.useState(false);
  const [optionsArray, setOptionsArray] = React.useState(randomizeOptions());

  if (props.checkMe) {
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
  }

  function highlightOption(e) {
    let btnColor = e.target.style.backgroundColor;
    if (!isSelected && (btnColor === "rgb(245, 247, 251)" || btnColor === "")) {
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

  function randomizeOptions() {
    let optionsArr = [...props.options, props.answer];
    return shuffle(optionsArr);
  }

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

  return (
    <div className="question-container">
      <h3 className="question">{props.question}</h3>
      <div className="answers-container">
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {optionsArray[0]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {optionsArray[1]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {optionsArray[2]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {optionsArray[3]}
        </div>
      </div>
    </div>
  );
}
