import React from "react";
import "./Trip.css";
import TripData from "./TripData";
import image1 from "../../assets/service2.jpg";
import image2 from "../../assets/service3.jpg";
import image3 from "../../assets/service4.jpg";
const Trip = () => {
  return (
    <div className="trip">
      <h1>How AirPro Works?</h1>
      <p>
        {" "}
        We validate the fraud towards your ticket and save your time and money.
      </p>
      <div className="tripcard">
        <TripData
          image={image1}
          heading="Travel Protection & Support"
          text="We take your travel safety seriously.  Our advanced systems identify fraudulent tickets and reach out directly to affected passengers. We don't want you to overpay or fall victim to scams!  Instead, we'll ensure you get the right ticket at the right price, with all the expected services included."
        />
        <TripData
          image={image2}
          heading="More Than Just Booking"
          text="Don't just book, be supported! AirPro goes beyond a simple booking platform, offering flexibility to adjust your travel plans whenever needed.  We're here to help you navigate unexpected situations, from baggage policies and fare rules to refunds and adding services.  Our mission: a stress-free travel experience, every step of the way."
        />
        <TripData
          image={image3}
          heading=" Fly Smart: Beat Scams"
          text="Don't fall for fake deals! Discounted tickets and promotions with hidden restrictions lurk on fraudulent websites. AirPro fights back! We actively research these sites, helping to slow down scams by empowering travelers with the right info. By avoiding overpriced tickets."
        />
      </div>
    </div>
  );
};

export default Trip;
