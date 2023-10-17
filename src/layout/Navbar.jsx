import React from "react";

const Navbar = () => {
  return (
    <header className="SiteNavigation-component" id="header">
      <nav id="nav-main" className="Bar">
        <div className="Content">
          <div className="Logo-container">
            <a  className="Logo" href="#">
              FilmFreeway
            </a>
          </div>
          <ul className="Links">
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
      </nav>
    </header>
  );
};

export default Navbar;
