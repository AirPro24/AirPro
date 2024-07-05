import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsLoggedIn }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("/8000/login", {
          email,
          password,
        })
        // .then((res) => {
        //   if (res.data === "exist") {
        //          setIsLoggedIn(true);
        //     history("/", { state: { id: email } });
        //   } else if ((res.data === "notexist")) {
        //     // alert("User have not sign up.");
        //      setShowAlert(true);
        //   }
        // })
        // .catch((e) => {
        //    setShowAlert(true);
        //  console.log(e);
        // });
        .then((res) => {
          switch (res.data) {
            case "exist":
              setIsLoggedIn(true);
              history("/", { state: { id: email } });
              break;
            case "notexist":
              setShowAlert(true);
              break;
            case "incorrect_password": // New case for incorrect password
              setShowAlert(true); // Show an alert or handle this case as needed
              break;
            default:
              setShowAlert(true); // Default case for unexpected responses
              break;
          }
        })
        .catch((e) => {
          setShowAlert(true);
          console.log(e);
        });
    } catch (e) {
      setShowAlert(true);
      console.log(e);
    }
  }

  return (
    <div className="Login">
      <form action="POST">
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
        <input className="submit" type="submit" onClick={submit} />
      </form>
      <div className="or-separator">
        <span>OR</span>
      </div>
      <Link to="/signup" className="signup-link">
        Sign Up
      </Link>
      {showAlert && <div className="alert">User has not signed up.</div>}
    </div>
  );
};

export default Login;
