import React from "react";
import { FestivalTiles } from "../helper/FestivalTiles.js";

const Festivals = () => {
  return (
    <div>
      <div className="ResponsiveLayout fest-container">
        <div className="Content WorldsBestFestivals">
          <div className="Header-h1">Enter the World's Best Festivals</div>
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
  );
};

export default Festivals;
