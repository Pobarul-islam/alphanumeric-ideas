import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (
      <div>
        <nav class="navbar">
          <div class="navbar-container container">
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
            <ul class="menu-items">
              <li>
                <a href="#">SurveyForm</a>
              </li>
              <li>
                <a href="#">DiwaliLandingPage</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
            
            </ul>
            <h1 class="logo">Alphanumeric Ideas</h1>
          </div>
        </nav>
      </div>
    );
};

export default Navbar;