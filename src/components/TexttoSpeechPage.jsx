import React, { useState } from 'react';
import './TextToSpeechPage.css'; // Import a custom CSS file for styling

function TextToSpeechPage() {
  const [recognitionLanguage, setRecognitionLanguage] = useState('en-US');
  const [synthesisLanguage, setSynthesisLanguage] = useState('en-US');
  const [transcription, setTranscription] = useState('');
  const [textInput, setTextInput] = useState('');

  const startRecognition = () => {
    const recognition = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();
    recognition.lang = recognitionLanguage;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
    };

    recognition.start();

  };

  const playText = () => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textInput);
    utterance.lang = synthesisLanguage.lang; // Use the selected language
    utterance.voice = synthesisLanguage.voice; // Use the selected voice
  
    synth.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="title">Speech Integration</h1>

      <div className="language-section">
        <h2>Speech Recognition</h2>
        <label>Select Language:</label>
        <select
          value={recognitionLanguage}
          onChange={(e) => setRecognitionLanguage(e.target.value)}
        >
          <option value="en-US">English (US)</option>
          <option value="hi-IN">Hindi (India)</option>
          <option value="te-IN">Telugu (India)</option>
          <option value="ta-IN">Tamil (India)</option>
        </select>
        <button className="action-button" onClick={startRecognition}>
          Start Recording
        </button>
        <div className="transcription">
          <h3>Speech to Text</h3>
          <p>{transcription}</p>
        </div>
      </div>

      <div className="language-section">
        <h2>Text to Speech</h2>
        <label>Select Language:</label>
        <select
          value={synthesisLanguage}
          onChange={(e) => setSynthesisLanguage(e.target.value)}
        >
          <option value="en-US">English (US)</option>
          <option value="hi-IN">Hindi (India)</option>
          <option value="te-IN">Telugu (India)</option>
          <option value="ta-IN">Tamil (India)</option>
          <option value="en-US-Wavenet-C">English (US) - Wavenet-C</option>
          <option value="en-US-Wavenet-D">English (US) - Wavenet-D</option>
        </select>
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Enter text to convert to speech"
        ></textarea>
        <button className="action-button" onClick={playText}>
          Play Text
        </button>
      </div>
    </div>
  );
}

export default TextToSpeechPage;
