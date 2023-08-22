import React from 'react';
// Import other components or libraries as needed
// import Book1 from "/book2.pdf"

function Books() {
  return (
    <div>
      <h1>Books</h1>
      <div>
        <h2>Book 1</h2>
        <embed src="/book2.pdf" type="application/pdf" width="500" height="600" />
        <button onClick={() => window.open("/Deaf:Mute.pdf", "_blank")}>Full Screen</button>
      </div>
      <div>
        <h2>Book 2</h2>
        <embed src="/book2.pdf" type="application/pdf" width="500" height="600" />
        <button onClick={() => window.open("/book2.pdf", "_blank")}>Full Screen</button>
      </div>
      {/* Add more <div> blocks for each book */}
    </div>
  );
}

export default Books;

