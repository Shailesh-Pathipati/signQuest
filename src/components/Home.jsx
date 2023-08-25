import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import ServiceInfo from "./ServiceInfo";
import servicesData from "./ServicesData"; // Import the servicesData array
import Testimonial from "./Testimonial";

export default function Home() {
  return (
    <div>
      <section id="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10">
              <div style={{ fontSize: '90px', fontWeight: 'bold' }}>
                BREAKING<br />
                THE<br />
                BARRIERS
              </div>
              <h2>Your ability to learn knows no limits, for your determination is boundless. Let your passion for education break through any barriers.</h2>
            </div>
            <div className="col-lg-2" style={{ position: 'relative', left: '-50px' }}>
              <img
                src="achievement.gif"
                alt="GIF"
                style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '50%',
                  zIndex: '2',
                  position: 'relative',
                  left: '0',
                  animation: 'rotate 10s linear infinite' // Add animation property
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonial />

      <h1 style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', padding: '20px' }}> OUR SERVICES </h1>
      {/* Add all the 4 services */}
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-column" key={index}>
            <ServiceInfo
              imgSrc={service.imgSrc}
              altText={service.altText}
              heading={service.heading}
              description={service.description}
              linkTo={service.linkTo}
              gifDimensions={service.gifDimensions}
            />
          </div>
        ))}
      </div>
      {/* All other components will be here. */}
      <div className="section-box vision-section">
          <p className="section-title">Our Vision</p>
          <p>
          "At SignQuest, our vision is a world united by communication.
           We strive to break down barriers, fostering understanding between diverse communities. 
           Our web application embodies this vision, empowering all individuals to connect through 
           the expressive beauty of sign language. With SignQuest, we're on a mission to make inclusive 
           communication a reality, where every voice finds its place."
          </p>
        </div>
      
      
    </div>
  );
}
