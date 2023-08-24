import React from 'react';
import './About.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="header">
        <h1 align="center">About SignQuest</h1>
      </header>
      <main className="content">
        <div className="section-box welcome-section">
          <p className="section-title">Welcome to SignQuest</p>
          <p>
          "Welcome to SignQuest, an innovative journey into the world of communication and inclusivity. 
          Here, we believe that language knows no boundaries, and our mission is to bridge the gap between 
          the deaf and hearing communities. With SignQuest, we empower you to explore the rich tapestry of sign language, 
          fostering deeper understanding and connection. Whether you're a beginner taking your first steps into this vibrant world or a 
          seasoned signer seeking to expand your horizons, SignQuest is your companion on this remarkable adventure."
          </p>
        </div>
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
        <div className="section-box offer-section">
          <p className="section-title">What We Offer</p>
          <p> </p>
          <p>
<b>ASL Tutorials:</b> Dive into a comprehensive collection of American Sign Language (ASL) tutorials. 
Whether you're a novice or aiming to enhance your skills, our tutorials cater to all levels, enabling you to communicate fluently using ASL.</p>

<p><b>Interactive Chatbot:</b> Engage with our interactive chatbot, designed to assist you in your learning journey.
 The chatbot provides instant answers to your queries, helps you practice sign language, and guides you through various conversational scenarios.</p>

 <p><b>Gamified Lip Reading:</b> Immerse yourself in a unique gamified experience that hones your lip reading skills.
 Our lip reading games are not only engaging but also practical, enhancing your ability to understand spoken language even in noisy environments.</p>

 <p><b>Expanded Knowledge Resources:</b> Access a wealth of knowledge resources that complement your learning process. 
From informative articles to video demonstrations, our platform offers a variety of materials to deepen your 
understanding of sign language and related topics.</p>

<p><b>Speech to Text and Text to Speech:</b> Seamlessly bridge the gap between spoken and signed languages 
with our speech-to-text and text-to-speech facilities. These tools enable effective communication between 
individuals using different modes of expression, fostering better understanding and connection.

          </p>
          {/* More content */}
        </div>
        <div className="section-box vision-section">
          <p className="section-title">Our Team</p>
          <p>
          "Our team at SignQuest is a dedicated and diverse group of students, 
          united by a shared passion for inclusive communication. With backgrounds in linguistics, 
          education, development, and design, we bring a range of expertise to the table. 
          Guided by a common vision, we collaborate to create innovative solutions that break down language 
          barriers and connect communities. Together, we're driven by the belief that everyone deserves a voice, 
          and we're committed to making that a reality through our collective efforts."
          <p>Bhavani A (21z303)</p>
          <p>Shailesh Babu P (21z328)</p>
          <p>Shrinidhi S (21z352)</p>
          <p>Prasun Jha (21z371)</p>
          </p>
        </div>
        {/* Other sections */}
        <div className="section-box vision-section">
          <p className="section-title">Contact Us</p>
          <p>
          Have questions, suggestions, or feedback? We'd love to hear from you. 
          Reach out to us at 21z328@psgtech.ac.in
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
