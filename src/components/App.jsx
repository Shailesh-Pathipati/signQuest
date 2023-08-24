
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../Firebase";
import "./Login.css";
import bookservicesData from "./Bookservicesdata";
import books from "./booksdata";
import Books from "./Books";
// import ReactDOM from "react-dom"; // Import ReactDOM here
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import About from "./About";
import ChatBotIcon from "./ChatBotIcon";
// import Heading from "./Header";
import Footer from "./Footer";
import gifsData from "../gifsData";
import Card from "./Card.jsx";
import Home from "./Home";
import Login from "./Login";
import TexttoSpeechPage from "./TexttoSpeechPage";
import Chatbot from "./ChatbotServicePage";
//import Cirriculum from "./ExpandedCoreCurriculumPage";
import BookServicesList from "./bookservicemap";

import LipReading from "./LipReading";
import Contact from "./Contact";
import Register from "./Register"; // Import the Register component
import Reset from "./Reset"; // Import the Reset component



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
  
    // Redirect the user to home page after login/logout
    const [user] = useAuthState(auth);

    const handleLogout = () => {
    logOut();
    window.location.href = "/"; // Redirect to home page after logging out
    };


    return (
        <div>
          <header>
            <nav>
              {/* here we link and give path in <Routes></Routes> */}
              <h1>SignQuest</h1>
              <NavLink to="/">HOME</NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="contact">Contact</NavLink>

              {/*To change the login link to logout button upon successful login */}
            {user ? (
            <>
              <button className="logout" onClick={handleLogout}>
                   <img src="..\logout-icon.png" alt="Logout Icon" className="logout-icon"  />
                   Logout
              </button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}


            </nav>
          </header>
          <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} /> {/* Added Login Route */}
            <Route path="/register" element={<Register />} /> {/* Added Register Route */}
            <Route path="/reset" element={<Reset />} /> {/* Added Reset Route */}
            {/* Wrap the div with a Route or Fragment */}
            <Route path="/first-service" element={<GifComponent />} />
            <Route path="/tap-to-speak" element={<TexttoSpeechPage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/chatbot-service" element={<Chatbot />} />
            <Route
  path="/expanded-core-curriculum"
  element={<BookServicesList bookservicesData={bookservicesData} />}
/>



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