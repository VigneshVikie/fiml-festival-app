import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="Footer">
        <nav id="nav-footer">
          <div className="FlexContainer footer-container">
            <div className="FlexRowContainer">
              <div className="footer-links">
                <a className="Link" href="#">
                  How It Works
                </a>
                <a className="Link" href="#">
                  Browse Festivals
                </a>
                <a className="Link" href="#">
                  Testimonials
                </a>
                <a className="Link" href="#">
                  Help
                </a>
                <a className="Link" href="#">
                  Contact
                </a>
              </div>

              <div className="FlexRow SocialRowDesktop">
                <div className="social-icons">
                  <a className="Link Social facebook" href="#" target="_blank">
                    <GrFacebookOption />
                  </a>
                  <a className="Link Social twitter" href="#" target="_blank">
                    <FaXTwitter />
                  </a>
                  <a className="Link Social insta" href="#" target="_blank">
                    <ImInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="legal-links">
              <a className="Link Legal" href="#">
                Terms
              </a>
              <a className="Link Legal" href="#">
                Privacy
              </a>
              <a className="Link Legal" href="#">
                Logos
              </a>
            </div>
            <div className="social-container">
              <div className="social-icons mob-social-icons">
                <a className="Link Social facebook" href="#" target="_blank">
                  <GrFacebookOption />
                </a>
                <a className="Link Social twitter" href="#" target="_blank">
                  <FaXTwitter />
                </a>
                <a className="Link Social insta" href="#" target="_blank">
                  <ImInstagram />
                </a>
              </div>

              <div className="FlexRow Logo footer-logo" id="footer-logo">
                <a href="#" className="LogoMark">
                  <span className="f-logo">F</span>ilmFreeway
                </a>
                <span className="Copyright"> © FilmFreeway </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
