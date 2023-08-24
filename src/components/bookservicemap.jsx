import React from "react";
import { Link } from "react-router-dom";
import BookServiceInfo from "./Bookservices"; // Adjust the import path
import bookservicesData from "./Bookservicesdata"; // Adjust the import path

export default function BookServicesList() {
    const itemsPerRow = 3; // Number of items per row
    const booksBeforeNarratives = 9;
  
    return (
      <div>
        <h2 style={{ textAlign: "center", marginTop: "40px",fontWeight:"bold"}}>STUDY RELATED BOOKS</h2>
        <div className="book-services-grid">
          {bookservicesData.slice(0, booksBeforeNarratives).map((service, index) => (
            <div className="book-service-item" key={index}>
              <BookServiceInfo
                imgSrc={service.imgSrc}
                altText={service.altText}
                heading={service.heading}
                description={service.description}
                linkTo={`/books/${index}`}
                imageWidth={service.imageWidth}
                imageHeight={service.imageHeight}
              />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2 style ={{fontWeight:"bold"}}>NARRATIVES</h2>
        </div>
        <div className="book-services-grid">
          {bookservicesData.slice(booksBeforeNarratives).map((service, index) => (
            <div className="book-service-item" key={index + booksBeforeNarratives}>
              <BookServiceInfo
                imgSrc={service.imgSrc}
                altText={service.altText}
                heading={service.heading}
                description={service.description}
                linkTo={`/books/${index}`}
                imageWidth={service.imageWidth}
                imageHeight={service.imageHeight}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  