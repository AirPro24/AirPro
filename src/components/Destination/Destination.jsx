import React from "react";
import "./Destination.css";
import image1 from "../../assets/destination1.jpg";
import image2 from "../../assets/destination2.jpg";
import DestinationData from "./DestinationData";
import image3 from "../../assets/destination3.jpg";
import image4 from "../../assets/destination4.jpg";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Why Choose Us?</h1>
        <p>
          Stay Safe with AirPro: Your Guide to Avoiding Airline Ticket Scams
        </p>
        {/* <div className="first-des">
          <div className="des-text">
            {" "}
            <h2>Protecting You from Scams</h2>
            <p>
              dnvjksn nmvbdsmsv kjvcdm vdkjv dvbds kjdvdms kjdv vkjvbde kjd
              vnvbvkj dvv kdsbvkjd kdsv m vkjfs vfdnb kb kj n k nfkbfbvb nh nm
              dfv vdsvbnmdv n n n n b nb. dnvjksn nmvbdsmsv kjvcdm vdkjv dvbds
              kjdvdms kjdv vkjvbde kjd vnvbvkj dvv kdsbvkjd kdsv m vkjfs vfdnb
              kb kj n k nfkbfbvb nh nm dfv vdsvbnmdv n n n n b nb. dnvjksn
              nmvbdsmsv kjvcdm vdkjv dvbds kjdvdms kjdv vkjvbde kjd vnvbvkj dvv
              kdsbvkjd kdsv m vkjfs vfdnb kb kj n k nfkbfbvb nh nm dfv vdsvbnmdv
              n n n n b nb.
            </p>
          </div>

          <div className="image">
            <img src={image} alt="" />
            <img src={image2} alt="" />
           
          </div>
        </div> */}

        <DestinationData
          heading="Protecting You from Scams"
          text="
          Airline ticket scams are increasingly common, with 99% of travelers paying extra due to fraudulent third-party booking websites. At AirPro, your safety is our priority. This guide provides essential tips to identify and avoid scams, ensuring a secure booking experience for both new and existing reservations. Our goal is to make you aware of these scams so you can secure tickets at genuine prices and enjoy hassle-free airline services."
          img1={image1}
          img2={image3}
          className="first-des"
        />

        <DestinationData
          heading="Navigating Airline Ticket Scams: Stay Informed and Protected"
          text=" When booking flights online, exercise caution. Be wary of websites or customer service numbers that promise unrealistically discounted packages. Always verify their authenticity. Additionally, watch out for scammers who claim your flight is cancelled or the ticket goes on standby and offer rebooking or upgrade for an extra fee—legitimate airlines won’t ask for additional payment this way. Stay informed and protect yourself."
          img1={image2}
          img2={image4}
          className="first-des-reverse"
        />
      </div>
    </>
  );
};

export default Destination;
