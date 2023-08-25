import React, { useState } from 'react';
import './ASL.css'; // Import your CSS file for styling

export default function ASL() {
  const [searchQuery, setSearchQuery] = useState('');
  const [videoData] = useState([
    {
      url: 'https://www.youtube.com/embed/EqXA5neYswc',
      description: 'Have a nice day',
    },
    {
      url: 'https://www.youtube.com/embed/EPlhDhll9mw',
      description: 'Thank you',
    },
    {
        url: 'https://www.youtube.com/embed/evr40BNeIfM',
        description: 'Goodbye',
    },
    {
        url: 'https://www.youtube.com/embed/lS6FeuH61fg',
        description: 'Drive safe',
    },
    {
        url: 'https://www.youtube.com/embed/47NAVuMDBdY',
        description: 'Left/Right',
    },
    {
        url: 'https://www.youtube.com/embed/orXM0lBe5as',
        description: 'Keep the change',
    },
    {
        url: 'https://www.youtube.com/embed/3lE-Yx7i2YQ',
        description: 'What a quick delivery',
    },
    {
        url: 'https://www.youtube.com/embed/Q5LK3WnNQxs',
        description: 'Volume control',
    },
    {
        url: 'https://www.youtube.com/embed/jbe2EbfX36U',
        description: 'Straight/U-turn',
    },

  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredVideos = videoData.filter((video) =>
    video.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="asl-container">
      <input
        type="text"
        placeholder="Search videos"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <section id="main-content" className="video-section">
        <div className="container">
          <div className="row">
            {filteredVideos.map((video, index) => (
              <div className="col-lg-4" key={index}>
                <iframe
                  title={`Video ${index + 1}`}
                  width="100%"
                  height="315"
                  src={video.url}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <p>{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
