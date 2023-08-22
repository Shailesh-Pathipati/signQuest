import React from "react";
import Heading from "./Header";
import Footer from "./Footer";
import ServiceInfo from "./ServiceInfo";
import servicesData from "./ServicesData"; // Import the servicesData array

export default function Home() {
  return (
    <div>
      <section id="title">
            <div class="container-fluid">
                <div class="row">
                <div class="col-lg-10">
                    <h1 style={{ fontSize: '80px' }}>Expand Your Communication Skills Today.</h1>
                </div>
                    <h2>Learn sign language and improve communication with SignQuest's innovative education for the deaf and dumb.</h2>

                </div>
             </div>
        </section>
      <h1 style={{ fontFamily: 'Montserrat', fontSize: '40px', fontWeight: 'bold', marginBottom: '20px', padding: '20px' }}> OUR SERVICES </h1>
      {/*Add all the 4 services*/}
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
      {/* all other components will be here. */}
     
    </div>
  );
}
