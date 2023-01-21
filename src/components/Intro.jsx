import React from "react";
import yellowBlob from "../assets/main-yellow.svg";
import blueBlob from "../assets/main-blue.svg";

export default function Intro() {
  return (
    <div className="intro-page">
      <img className="upper-blob" src={yellowBlob} />
      <h2 className="intro-title">Quizzical</h2>
      <p className="intro-text">
        Take a quiz to test your knowledge on a variety of fun and interesting
        topics!
      </p>
      <button className="start-btn" type="button">
        Start quiz
      </button>
      <img className="lower-blob" src={blueBlob} />
    </div>
  );
}
