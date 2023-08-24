import React from "react";
import { Link } from "react-router-dom"; // If you are using React Router for navigation

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <h1 align="left">SignQuest</h1>
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
          <Link className="nav-link" to="/login">
              Login
            </Link>
        </li>

        </ul>
      </div>
    </nav>
    </header>
  );
}
