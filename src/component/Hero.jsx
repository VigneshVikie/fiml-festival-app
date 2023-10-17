import React from "react";
import hero from "../assets/hero-max.jpg";
import dark_logo_row_1 from "../assets/dark_logo_row-1.webp";
import dark_logo_row_2 from "../assets/dark_logo_row-2.webp";

const Hero = () => {
  return (
    <div className="Layout-vertical">
      <div className="Masthead">
        <div className="Masthead-container">
          <picture>
            <source type="image" srcSet={hero} media="(min-width: 1025px)" />
            <source type="image" srcSet={hero} />
            <img src={hero} alt="Hero" />
          </picture>
          <div className="Masthead-title">
            <div className="Header-hero">Easy Submitting</div>
            <div className="Header-heroSubline">
              The world's #1 way to enter film festivals
              <br />
              and screenplay contests
            </div>
            <a className="Button Button-masthead" href="#">
              <button className="browse-btn2">Browse Festivals</button>
            </a>
          </div>
          <a href="#">
            <div className="Masthead-bar">
              <button className="browse-btn">Browse Festivals</button>
              <div className="Masthead-logoContainer">
                <img
                  className="Masthead-logos First"
                  alt=""
                  src={dark_logo_row_1}
                  width="2300"
                  height="139"
                  loading="lazy"
                />
                <img
                  className="Masthead-logos BackfaceVisible"
                  alt=""
                  src={dark_logo_row_2}
                  width="2300"
                  height="139"
                  loading="lazy"
                />
                <img
                  className="Masthead-logos Visible"
                  alt="Festival Logos"
                  src={dark_logo_row_1}
                  width="2300"
                  height="139"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="DecorativeText-component Homepage">
        <div className="Text">
          Home of the Industry's Top Festivals and Filmmakers
        </div>
        <div className="Border"></div>
      </div>
    </div>
  );
};

export default Hero;
