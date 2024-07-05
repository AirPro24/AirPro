import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("/8000/signup", {
          email,
          password,
          name,
          contactNumber,
        })
        .then((res) => {
          if (res.data == "exist") {
            // history("/", {state:{id: email}})
            alert("User already exist");
          } else if ((res.data = "notexist")) {
            history("/", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("wrong details"), console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="Signup">
      <form action="POST">
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
          name=""
          id=""
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
          name=""
          id=""
        />
        <input
          type="text"
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Contact Number"
        />
        <input className="submit" type="submit" onClick={submit} />
      </form>
      <div className="or-separator">
        <span>OR</span>
      </div>
      <Link to="/login" className="login-link">
        Already have an account? Login
      </Link>
    </div>
  );
};

export default Signup;
