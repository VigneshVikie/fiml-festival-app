import React from "react";
import Navbar from "../layout/Navbar";
import MobileNavbar from "./MobileNavbar";
import Hero from "./Hero";
import Details from "./Details";
import Reviews from "./Reviews";
import Festivals from "./Festivals";
import GettingStarted from "./GettingStarted";

const Home = () => (
  <div className="Homepage">
    <Navbar />
    <MobileNavbar />
    <Hero />
    <Details />
    <Reviews />
    <Festivals />
    <GettingStarted />
  </div>
);

export default Home;
