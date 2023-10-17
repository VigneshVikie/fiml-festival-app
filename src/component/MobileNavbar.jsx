import React from "react";
import { useState } from "react";

const MobileNavbar = () => {
  const [burgerIsClicked, setBurgerIsClicked] = useState(false);

  const burgerMenu = () => {
    setBurgerIsClicked(!burgerIsClicked);
  };
  return (
    <nav className="mob-nav">
      <div className="mob-content">
        <div className="mob-logo-container">
          <a className="mob-logo" href="#">
            FilmFreeway
          </a>
        </div>
        <div id="menuToggle">
          <input
            id="checkbox"
            type="checkbox"
            checked={burgerIsClicked}
            onChange={burgerMenu}
          />
          <label className="toggle" htmlFor="checkbox">
            <div
              className="mob-bar bar--top"
              style={{ backgroundColor: burgerIsClicked ? "#000" : "#fff" }}
            ></div>
            <div
              className="mob-bar bar--middle"
              style={{ backgroundColor: burgerIsClicked ? "#000" : "#fff" }}
            ></div>
            <div
              className="mob-bar bar--bottom"
              style={{ backgroundColor: burgerIsClicked ? "#000" : "#fff" }}
            ></div>
          </label>
        </div>
      </div>
      {burgerIsClicked && (
        <div className="mob-modal-links">
          <div className="mob-logo-container">
            <a
              className="mob-logo"
              href="#"
              style={{ color: burgerIsClicked ? "#000" : "#fff" }}
            >
              FilmFreeway
            </a>
          </div>
          <ul className="mob-links">
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Browse Festivals</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
