import React from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import hero from "../assets/hero.jpg";
import homeDriver from "../assets/home-driver.jpg";
import homeStorytellers from "../assets/home-storytellers.jpg";
import dark_logo_row_1 from "../assets/dark_logo_row-1.webp";
import dark_logo_row_2 from "../assets/dark_logo_row-2.webp";
import { FestivalTiles } from "../FestivalTiles.js";

const Home = () => (
  <div className="Homepage">
    <Navbar />
    <MobileNavbar />
    <div className="Layout-vertical">
      <div className="Masthead">
        <div className="Masthead-container">
          <picture>
            <source type="image" srcSet={hero} media="(min-width: 1025px)" />
            <source type="image" srcSet={hero} />
            <img className="hero-img" src={hero} alt="Hero" />
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
    <div>
      <div className="ResponsiveLayout">
        <div className="Touchpoints">
          <div className="Touchpoint">
            <div className="Header-h2">
              Discover Amazing
              <br />
              Festivals
            </div>
            <div className="Paragraph">
              Browse thousands of the world's top film festivals and contests.
            </div>
            <div className="Link">
              <a href="#">
                Learn More
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
          <div className="Touchpoint">
            <div className="Header-h2">
              The Smart and Easy
              <br />
              Way to Submit
            </div>
            <div className="Paragraph">
              Add your project then click to submit. Simple and fast.
            </div>
            <div className="Link">
              <a href="#">
                Start Submitting
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
          <div className="Touchpoint">
            <div className="Header-h2">
              Game Changing for
              <br />
              Festivals and Contests
            </div>
            <div className="Paragraph">
              Receive entries, sell tickets, promote and manage your event.
            </div>
            <div className="Link">
              <a href="#">
                Why FilmFreeway
                <span
                  style={{ fontSize: "16px", fontWeight: "600" }}
                  class="material-symbols-outlined"
                >
                  navigate_next
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    </div>
    <div>
      <div className="ResponsiveLayout fest-container">
        <div className="Content WorldsBestFestivals">
          <div className="Header-h1" >
            Enter the World's Best Festivals
          </div>
          <div className="Paragraph">
            Over 12,000 of the world's best film festivals and screenplay
            contests, including &nbsp;
            <strong>
              <a style={{ textDecoration: "none" }} href="#">
                197 Academy Award / BAFTA Award accredited festivals
              </a>
            </strong>
            , use FilmFreeway to reach over two million filmmakers worldwide.
          </div>

          <div className="FestivalTileGrid">
            <div className="FestivalTiles">
              {FestivalTiles.map((img, idx) => {
                return (
                  <div className="Tile">
                    <div className="TileContent">
                      <a className="Link" href="#">
                        <span className="LinkBackground">
                          <span className="LinkCopy">
                            <span className="ViewFestivalLink">
                              View Festival
                            </span>
                          </span>
                        </span>
                        <div className="Image">
                          <img
                            key={idx}
                            src={img.tileImg}
                            alt={img.altName}
                            width="300"
                            height="300"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="ButtonContainer">
            <a className="see-all-fest" href="#">
              <button className="see-all-fest-btn">See All Festivals</button>
            </a>
          </div>
        </div>
      </div>
    </div>
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
  </div>
);

export default Home;
