import React from "react";
import homeStorytellers from "../assets/home-storytellers.jpg";

const GettingStarted = () => {
  return (
    <div className="FullWidthImage Image-storytellers">
      <picture>
        <source
          type="image"
          srcSet={homeStorytellers}
          media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
        />
        <source type="image" srcSet={homeStorytellers} />
        <img loading="lazy" src={homeStorytellers} alt="Home storytellers" />
      </picture>
      <div className="CenteredContentLayout">
        <div className="ResponsiveLayout">
          <div className="Content Storytellers">
            <div className="Header-h1">Ready To Get Started?</div>
            <div className="Paragraph">
              Submitting to festivals and contests has never been easier.
              <br />
              Join the world's leading film and festival community.
            </div>
            <div className="ButtonContainer">
              <a href="#">
                <button className="get-started-btn">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
