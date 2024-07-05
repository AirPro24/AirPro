import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Hero = (props) => {
  const navigate = useNavigate();

  //  const handleExplorePlansClick = () => {
  //    navigate("/payment");
  //  };
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImage} alt="" />
      </div>
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {/* <button onClick={handleExplorePlansClick} className={props.btnClass}>
          {props.btnText}
        </button> */}
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
