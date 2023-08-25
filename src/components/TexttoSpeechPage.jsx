import React, { useState, useRef, useEffect } from 'react';
import './TextToSpeechPage.css'; // Import a custom CSS file for styling

function TextToSpeechPage() {
  const [recognitionLanguage, setRecognitionLanguage] = useState('en-US');
  const [synthesisLanguage, setSynthesisLanguage] = useState('en-US');
  const [transcription, setTranscription] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [synthesisVoice, setSynthesisVoice] = useState(null);
  const synthesisUtterance = useRef(new SpeechSynthesisUtterance());
  const recognitionRef = useRef(null);

  useEffect(() => {
    // Load voices when component mounts
    loadVoices();
  }, []);

  const loadVoices = () => {
    const voices = window.speechSynthesis.getVoices();
    setSynthesisVoice(voices[0]); // Set the default voice
  };

  const toggleRecognition = () => {
    if (isRecording) {
      stopRecognition();
    } else {
      startRecognition();
    }
  };

  const startRecognition = () => {
    recognitionRef.current = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition)();
    recognitionRef.current.lang = recognitionLanguage;

    recognitionRef.current.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
    };

    recognitionRef.current.start();
    setIsRecording(true);
  };

  const stopRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsRecording(false);
  };

  const voices = window.speechSynthesis.getVoices();
  const languageOptions = [
    { value: 'en-US', label: 'English (US)' },
    { value: 'hi-IN', label: 'Hindi (India)' },
    { value: 'te-IN', label: 'Telugu (India)' },
    { value: 'ta-IN', label: 'Tamil (India)' },
  ];
  const voiceOptions = voices.map((voice) => ({
    value: voice.voiceURI,
    label: `${voice.name} (${voice.lang})`,
  }));

  const playText = () => {
    const synth = window.speechSynthesis;
    const utterance = synthesisUtterance.current;
    utterance.text = textInput;
    utterance.lang = synthesisLanguage;

    if (synthesisVoice) {
      utterance.voice = synthesisVoice;
    }

    synth.speak(utterance);
  };

  return (
    <div className="container">
      <h1 className="title">Speech Integration</h1>

      <div className="language-section">
        <h2>Speech Recognition</h2>
        <label>Select Recognition Language:</label>
        <select
          value={recognitionLanguage}
          onChange={(e) => setRecognitionLanguage(e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button className="action-button" onClick={toggleRecognition}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <div className="transcription">
          <h3>Speech to Text</h3>
          <p>{transcription}</p>
        </div>
      </div>

      <div className="language-section">
        <h2>Text to Speech</h2>
        <label>Select Synthesis Language:</label>
        <select
          value={synthesisLanguage}
          onChange={(e) => setSynthesisLanguage(e.target.value)}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label>Select Synthesis Voice:</label>
        <select
          value={synthesisVoice?.voiceURI}
          onChange={(e) =>
            setSynthesisVoice(
              voices.find((voice) => voice.voiceURI === e.target.value)
            )
          }
        >
          {voiceOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
