import React from "react";

export default function Question(props) {
  const [isSelected, setIsSelected] = React.useState(false);

  function highlightOption(e) {
    let btnColor = e.target.style.backgroundColor;
    if (!isSelected && (btnColor === "rgb(245, 247, 251)" || btnColor === "")) {
      e.target.style.backgroundColor = "#D6DBF5";
      e.target.style.border = "none";
      setIsSelected((prev) => !prev);
    } else if (isSelected && e.target.style.border === "none") {
      e.target.style.backgroundColor = "rgb(245, 247, 251)";
      e.target.style.border = "0.77px solid #4d5b9e";
      setIsSelected((prev) => !prev);
    }
  }

  return (
    <div className="question-container">
      <h3 className="question">{props.question}</h3>
      <div className="answers-container">
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.options[0]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.options[1]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.options[2]}
        </div>
        <div className="answer-btn" onClick={(e) => highlightOption(e)}>
          {props.answer}
        </div>
      </div>
    </div>
  );
}
