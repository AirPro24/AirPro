import React from "react";
import image from "../../assets/ticket.jpg";
import "../About/About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
const Service = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <img src={image} alt="" className="about-image" />
        <div className="about-text"></div>
        <div className="about-content">
          <h1>Services</h1>
          <div className="about-points">
            <h2>Our Services</h2>
            <p>
              At AirPro, we offer various services to meet all your travel
              needs. Our goal is to provide you with a comprehensive and
              stress-free booking experience.
            </p>
            <h2>Airline Ticketing</h2>
            <p>
              In our company we offer ticketing services for all major airlines,
              ensuring you get the best deals and the most convenient flights.
              Whether you're planning a domestic trip or an international
              adventure, we got your back.
            </p>
            <h2>Service Charge</h2>
            <p>
              We pride ourselves on transparency and competitive pricing. Our
              service charges are designed to be fair and reflect the high
              quality of service we provide.
            </p>
            <h2>AirPro</h2>
            <p>
              We stand by our commitment to trust and reliability. Our platform
              ensures secure and efficient booking processes so that you can
              book with confidence.
            </p>
            <h2>Changes and Refunds</h2>
            <p>
              Plan changes, and we understand that. That's why we offer flexible
              change and refund policies. Make changes or request a refund
              within 24 hours of booking without any hassle.
            </p>
            <h2>Scam Protection</h2>
            <p>
              At AirPro, we're always on the lookout to protect our customers
              from scams. We know how important it is to keep you safe and
              secure. That's why we provide reliable information and handy tips
              to help you steer clear of those sneaky fraudulent websites. We've
              got your back! Trust us to keep you in the know and scam-free.
            </p>
            <h2>Contact Details</h2>
            <p>
              Have a question or request? We're here to help fill out the form
              with your inquiry or send us an email at
              <a className="contact-info" href="mailto:airpro437@gmail.com">
                AirPro
              </a>{" "}
              .
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Service;
