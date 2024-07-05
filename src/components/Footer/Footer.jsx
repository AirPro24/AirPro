import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="intro">
          <h1>AirPro</h1>
          <p>
            Choose your favorite destination with AirPro. We prioritize honesty,
            transparency, and your satisfaction. Our goal is to exceed your
            expectations while ensuring your security by keeping you informed
            about potential scams and how to avoid them.
          </p>
        </div>
        <div className="link-section">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <footer>&copy; Copyright 2024 AirPro</footer>
      {/* <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div> */}

      {/* <div className="bottom">
        <div>
          <h4></h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">Licensed</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">TroubeShooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
