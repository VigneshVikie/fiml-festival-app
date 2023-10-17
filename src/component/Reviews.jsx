import React from 'react'
import homeDriver from "../assets/home-driver.jpg";


const Reviews = () => {
  return (
<div>
      <div className="FullWidthImage Image-driver">
        <picture>
          <source
            type="image"
            srcSet={homeDriver}
            media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
          />
          <source type="image" srcSet={homeDriver} />
          <img src={homeDriver} alt="Home driver@1x" />
        </picture>
        <div className="CenteredContentLayout">
          <div className="ResponsiveLayout">
            <div className="Content HappyFilmmakers">
              <div className="Header-h1">
                Happy Filmmakers,
                <br />
                Happy Festivals
              </div>
              <div className="Quotes">
                <div className="Quote">
                  <span className="Text">
                    "FilmFreeway has established itself as the industry standard
                    in festival submissions."
                  </span>
                  <span className="Author">
                    Adam Montgomery, Senior Manager Programming
                  </span>
                  <a className="FestivalName" href="#">
                    Sundance Film Festival
                  </a>
                </div>
                <div className="Quote">
                  <span className="Text">
                    "FilmFreeway is where filmmakers go to discover and enter
                    film festivals."
                  </span>
                  <span className="Author">
                    Cameron Bailey, Artistic Director &amp; Co-Head
                  </span>
                  <a className="FestivalName" href="#">
                    Toronto International Film Festival
                  </a>
                </div>
              </div>
              <div className="ButtonContainer">
                <a className="Button Button-specialPinkButton" href="#">
                  <button className="read-reviews-btn">Read Reviews</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default Reviews