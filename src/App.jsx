import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Payment from "./routes/payment/Payment";
// import Success from "./routes/payment/Success";
// import Failure from "./routes/payment/Failure";
import "./main.css";
import About from "./routes/About/About";
import Service from "./routes/Service/Service";
// import Signup from "./routes/Signup/Signup";
import Home from "./routes/Home/Home";
import FraudAlerts from "./routes/Fraud-Alerts/FraudAlerts";
// import Login from "./routes/Login/Login";
// import PrivateRoute from "./routes/Private/PrivateRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failure />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/fraud-alerts" element={<FraudAlerts />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
