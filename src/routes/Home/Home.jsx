import React from "react";
import "../../main.css";
import Navbar from "./../../components/Navbar/Navbar";
import Hero from "./../../components/Hero/Hero";
import image from "../../assets/home-hero-image.jpg";
import "../../components/Hero/HeroStyles.css";
import Destination from "../../components/Destination/Destination";
import Trip from "./../../components/Trip/Trip";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImage={image}
        title="Safe & Secure Ticketing for Your Travel"
        text="Click, book, fly. Safe travels guaranteed."
        btnText="Travel Plan"
        // url="/payment"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
