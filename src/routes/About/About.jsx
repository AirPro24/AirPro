import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import image from "../../assets/map.jpg";
import "./About.css";
import Footer from "./../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={image} alt="" className="about-image" />
        <div className="about-text"></div>
        <div className="about-content">
          <h1>About Us</h1>
          <div className="about-points">
            <p>
              Welcome to AirPro, the name you can trust! Your go-to partner for
              booking airline tickets and travel services. Our mission is to
              make transport planning easy and fun, offering a continuous
              experience from the initial reservation up to your land.
            </p>
            <h2>Our Story</h2>
            <p>
              Founded with a passion for travel and a commitment to customer
              satisfaction, Trust Ticketing has grown into a trusted name in the
              industry. We understand the complexities of travel planning and
              strive to simplify the process for our customers.
            </p>
            <h2 className="bullets">Why Choose Us?</h2>
            <p>
              <strong>Reliability:</strong> With AirPro, you can count on
              accurate and timely bookings.
            </p>
            <p>
              <strong>Customer Service:</strong> Our well-trained staff is ready
              to provide you with professional assistance at each crucial stage
              in the process.
            </p>
            <p>
              <strong>Flexibility:</strong> Enjoy flexible booking options and
              hassle-free changes and refunds.
            </p>
            <p>
              <strong>Safety and Security:</strong> At our company, we've got
              your back when it comes to scams and fraudulent activities. We
              want to make sure your booking experience is as safe as can be.
            </p>
            <h2>Our Values</h2>
            <p>
              At AirPro, we really believe in being honest, transparent, and
              making sure you're happy with our service. Our goal is to go above
              and beyond your expectations. We also take your security seriously
              and want to make sure you're informed about any potential scams
              and how to steer clear of them.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
