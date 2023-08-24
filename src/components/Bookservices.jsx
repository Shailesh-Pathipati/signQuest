import React from "react";
import { Link } from "react-router-dom";

export default function BookServiceInfo({ imgSrc, altText, heading, description, linkTo, imageWidth, imageHeight }) 
{
  return (
    <section className="service-box">
      <div className="service-content">
        <div className="service-image">
          <img
            src={imgSrc}
            alt={altText}
            style={{ maxWidth: imageWidth, height: imageHeight, display: "block", margin: "0 auto" }}
          />
        </div>
        <div className="service-description">
          {heading && (
            <h4 style={{ fontWeight: "bold", textAlign: "left" }}>
              {heading}
            </h4>
          )}
          <p>{description}</p>
          {linkTo && (
            <Link to={linkTo} className="service-link">
              View Book
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}