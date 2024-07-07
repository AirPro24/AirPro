import React from "react";

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a
          className="link-button"
          href="https://paypal.me/airpro01?country.x=IN&locale.x=en_GB"
        >
          Pay Now
        </a>
      </div>
    </>
  );
};

export default Hero;
