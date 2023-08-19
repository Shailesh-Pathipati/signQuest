import React, { Component } from 'react';

export class Chat extends Component {
  componentDidMount() {
    // Initialize the AudioContext after a user gesture
    document.addEventListener('click', () => {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      // Now you can use the audioContext
    });

    // Load the Kommunicate script only once
    if (!window.kommunicate) {
      (function (d, m) {
        var kommunicateSettings = {
          "appId": "3ca152ed055b3a0304d280b6e0c54c045",
          "popupWidget": true,
          "automaticChatOpenOnNavigation": true
        };
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
  }

  render() {
    return (
      <div className='chatbotContent'>
        <h1>CLICK ON THE ICON IN BOTTOM RIGHT OF THE PAGE YO START USING OUR CHATBOT SERVICE</h1>
      </div>
    );
  }
}

export default Chat;
