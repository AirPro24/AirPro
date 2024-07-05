import React, { useState } from "react";
import axios from "axios";
import image from "../../assets/contact.jpg";
import "../About/About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const FraudAlerts = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/contact",
        formData
      );
      if (res.status === 201) {
        setFormSubmitted(true);
        // Clear form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="about-container">
        <img src={image} alt="" className="about-image" />

        <div className="">
          <div className="about-content">
            <h1>Scam Awareness</h1>
            <div className="about-points">
              <h2>Travel Safe: Protecting You from Scams</h2>
              <p>
                At AirPro, your safety and security are our top priorities. In
                response to the increasing number of airline ticket scams, we
                have developed a comprehensive guide to help you identify and
                avoid potential fraud.
              </p>
              <h2 className="bullets">Common Scams:</h2>
              <p>
                <strong>Phony Websites and Customer Service Numbers: </strong>
                Be wary of websites or numbers offering discounted flight
                packages. Always verify the authenticity of the source.
              </p>
              <p>
                <strong>Fake Cancellations and Rebookings: </strong>
                Scammers may call or text you claiming your flight has been
                cancelled and offer to rebook for an additional fee. Legitimate
                airlines will never ask for additional payment in this manner.
              </p>
              <h2 className="bullets">How to Protect Yourself:</h2>
              <p>
                {" "}
                <strong>Research First:</strong> If a deal sounds too good to be
                true, it probably is. Look for online reviews and verify the
                company’s legitimacy.
              </p>
              <p>
                <strong>Verify Communication:</strong> Be cautious of emails and
                texts claiming to reschedule or reroute your flight. Never click
                on links or call numbers from these messages. Instead, contact
                the airline directly using the official customer service number
                on their website.{" "}
              </p>{" "}
              <p>
                <strong> Know Your Rights: </strong>
                Legitimate airlines or travel businesses will not call back
                indicating an immediate price increase.
              </p>
            </div>

            {/* <h1>Contact</h1> */}
            {/* <div className="contact-container">
              {formSubmitted && (
                <div className="thank-you-message">
                  <p>Thank you for submitting the form!</p>
                </div>
              )}
              <form onSubmit={onSubmit} className="contact-left">
                <div className="contact-left-title">
                  <h2>Get in touch</h2>
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.email}
                />
                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Your Phone"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.phone}
                />
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.subject}
                />
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  className="contact-input"
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
                <button className="email-button" type="submit">
                  Submit
                </button>
              </form>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default FraudAlerts;
