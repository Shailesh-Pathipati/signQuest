import React from "react";

import { Link } from "react-router-dom";


export default function VideoOrGif({ imgSrc, altText, heading, linkTo, imageWidth, imageHeight }) 
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
          {linkTo && (
            <Link to={linkTo} className="service-link">
              Click Here
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}