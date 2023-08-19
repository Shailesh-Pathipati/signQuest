import React, { useState } from 'react';

function TextToSpeechPage() {
  const [recognitionLanguage, setRecognitionLanguage] = useState('en-US');
  const [synthesisLanguage, setSynthesisLanguage] = useState({
    lang: 'en-US',
    voice: 'Wavenet-C',
  });
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
    utterance.lang = synthesisLanguage;
    synth.speak(utterance);
  };

  return (
    <div>
      <h1>Speech Integration with Language Selection</h1>

      <select
        value={recognitionLanguage}
        onChange={(e) => setRecognitionLanguage(e.target.value)}
      >
        <option value="en-US">English (US)</option>
        <option value="hi-IN">Hindi (India)</option>
        <option value="te-IN">Telugu (India)</option>
        <option value="ta-IN">Tamil (India)</option>
      </select>

      <button onClick={startRecognition}>Start Recording</button>

      <h2>Speech to Text</h2>
      <p>{transcription}</p>

      <h2>Text to Speech</h2>

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
      <button onClick={playText}>Play Text</button>
    </div>
  );
}

export default TextToSpeechPage;
