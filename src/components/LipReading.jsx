import React, { useState } from "react";
import "./LipReading.css"; // Import your CSS file

const QuizComponent = () => {
  const questions = [
    {
      question: "What does this word look like?",
      options: ["Bleed", "Ballot", "Bucket", "Bought"],
      correctOption: 0,
      video: "https://cdn.lipreading.org/tokensv2/bleed.nicole1.mp4",
    },
    {
      question: "What's the correct word?",
      options: ["Bought", "Book", "Buy", "Bow"],
      correctOption: 1,
      video: "https://cdn.lipreading.org/tokensv2/book.nicole1.mp4",
    },
    {
      question: "Identify the word shown in the video.",
      options: ["Bug", "Busy", "Bucket", "Bounty"],
      correctOption: 3,
      video: "https://cdn.lipreading.org/tokensv2/bounty.nicole1.mp4",
    },
    {
      question: "Which word is being lip-read?",
      options: ["Bought", "Buy", "Bat", "Bone"],
      correctOption: 2,
      video: "https://cdn.lipreading.org/tokensv2/bat.nicole1.mp4",
    },
    {
      question: "What does this word seem to look like?",
      options: ["Mark", "Man", "Meet", "Major"],
      correctOption: 1,
      video: "https://cdn.lipreading.org/tokensv2/man.nicole1.mp4",
    },
    {
      question: "What is the visual composition of the letters constituting this term?",
      options: ["Boost", "Book", "Beet", "Boot"],
      correctOption: 3,
      video: "https://cdn.lipreading.org/tokensv2/boot.nicole1.mp4",
    },
    {
      question: "What does this word seem to look like?",
      options: ["See", "Soup", "Say", "Seem"],
      correctOption: 0,
      video: "https://cdn.lipreading.org/tokensv2/see.nicole1.mp4",
    },
    {
      question: "What does this word seem to look like?",
      options: ["Stop", "Ship", "Soap", "Soup"],
      correctOption: 2,
      video: "https://cdn.lipreading.org/tokensv2/soap.nicole1.mp4",
    },
    {
      question: "What does this word seem to look like?",
      options: ["Left", "Loop", "Leap", "Lime"],
      correctOption: 3,
      video: "https://cdn.lipreading.org/tokensv2/lime.nicole1.mp4",
    },
    {
      question: "What does this word seem to look like?",
      options: ["Peel", "Pool", "Pat", "Pin"],
      correctOption: 0,
      video: "https://cdn.lipreading.org/tokensv2/peel.nicole1.mp4",
    },
    // Add more question objects as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleOptionSelect = (index) => {
    if (!isOptionSelected) {
      setSelectedOption(index);
      setIsOptionSelected(true);

      if (index === questions[currentQuestion].correctOption) {
        setScore(score + 1); // Increase the score if the correct option is selected
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsOptionSelected(false); // Reset the isOptionSelected state
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrev = () => {
    setSelectedOption(null);
    setIsOptionSelected(false); // Reset the isOptionSelected state
    setCurrentQuestion(currentQuestion - 1);
  };

  const currentQuestionData = questions[currentQuestion];
  const isCorrect = selectedOption === currentQuestionData.correctOption;

  return (
    <div className="quiz-container">
      <div className="score-button">Score: {score}/10</div>
      <h1>{currentQuestionData.question}</h1>
      <video controls key={currentQuestionData.video}>
        <source src={currentQuestionData.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="options">
        {currentQuestionData.options.map((option, index) => (
          <div
            key={index}
            className={`option ${selectedOption === index ? "selected" : ""} ${selectedOption === index && isCorrect ? "correct" : selectedOption === index && !isCorrect ? "incorrect" : ""}`}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
      <div className="nav-buttons">
        {currentQuestion > 0 && (
          <button className="prev-button custom-button" onClick={handlePrev}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 && (
          <button className="next-button custom-button" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
