import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import About from "./About";
import ChatBotIcon from "./ChatBotIcon";

import Heading from "./Header";
import Footer from "./Footer";
import gifsData from "../gifsData";
import Card from "./Card.jsx";
import Home from "./Home";
import Login from "./Login";
import TexttoSpeechPage from "./TexttoSpeechPage";
import Chatbot from "./ChatbotServicePage";
import Cirriculum from "./ExpandedCoreCurriculumPage";
import LipReading from "./LipReading";
import Contact from "./Contact";

//this is completely for the FirstServie gifs data handling.
const GifComponent = () => {
    const createGifs = (gif) => (
      <Card
        key={gif.id}
        img={gif.imgURL}
        des={gif.des}
      />
    );
  
    return (
      <div className="grid-container">
        {gifsData.map(createGifs)}
      </div>
    );
  };
export default function App()
{
    return (
        <div>
          <header>
            <nav>
              {/* here we link and give path in <Routes></Routes> */}
              <h1>SignQuest</h1>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>
              <NavLink to="Login">Login</NavLink>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              {/* Wrap the div with a Route or Fragment */}
              <Route path="/first-service" element={<GifComponent />} />
              <Route path="/tap-to-speak" element={<TexttoSpeechPage />} />
              <Route path="/chatbot-service" element={<Chatbot />} />
              <Route path="/expanded-core-curriculum" element={<Cirriculum />} />
              <Route path="/lip-reading" element={<LipReading />} />
            </Routes>
          </main>
          <footer className="footer">
            <Footer />
          </footer>
          <ChatBotIcon/>{/* included the chatbot in the home page also*/ }
        </div>
      );
      
      
}



