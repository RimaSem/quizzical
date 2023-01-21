export default function Question(props) {
  return (
    <div className="question-container">
      <h3 className="question">{props.question}</h3>
      <div className="answers-container">
        <div className="answer-btn">{props.options[0]}</div>
        <div className="answer-btn">{props.options[1]}</div>
        <div className="answer-btn">{props.options[2]}</div>
        <div className="answer-btn">{props.answer}</div>
      </div>
    </div>
  );
}
