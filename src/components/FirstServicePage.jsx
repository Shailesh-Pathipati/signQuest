import React, { useState } from "react";
import gifsData from "../gifsData"; // Assuming the path to your gifsData.js
import Card from "./Card"; // Replace with the actual path to your Card component

// import "./FirstServicePage.css"; // Import your CSS styles

const GifComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGifs = gifsData.filter((gif) =>
    gif.des.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const createGifs = (gif) => (
    <Card
      key={gif.id}
      img={gif.imgURL}
      des={gif.des}
    />
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search GIFs by description..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid-container">
        {filteredGifs.map(createGifs)}
      </div>
    </div>
  );
};

export default GifComponent;
